import React, { BaseSyntheticEvent, KeyboardEvent, useCallback, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardType, FieldName, PaymentFormData, ValidationStatus } from './types';
import { CreditCard } from '../../img/CreditCard';
import { formatCardNumber, getNumberValue, validMonthNumber } from '../../helpers/validation';
import { PaymentStatus } from '../types';
import { onFocusInput, onKeyDownWithFocusUpdate } from '../../helpers';
import { VisaLogo } from '../../img/VisaLogo';
import { Context } from '../context';
import {CARD_NUMBER_LENGTH, CVV_LENGTH, rules, SHELF_LIFE_LENGTH} from './constants';
import './index.scss';

export const PaymentForm: React.FC = () => {
    const { setFormData } = useContext(Context);

    const { cvvCode, cardNumber, shelfLifeYear, shelfLifeMonth } = FieldName;
    const { validate, error } = ValidationStatus;

    const {register, setValue, handleSubmit, formState: {errors}, getValues} = useForm<PaymentFormData>();

    const [disableShelfLifeMonth, setDisableShelfLifeMonth] = useState(true);
    const [disableShelfLifeYear, setDisableShelfLifeYear] = useState(true);
    const [disableCVV, setDisableCVV] = useState(true);
    const [cardType, setCardType] = useState<CardType>(CardType.none);

    const onSubmit = handleSubmit(({cardNumber, cvvCode, shelfLifeMonth, shelfLifeYear}) => {
        setFormData({
            data: {
                cardNumber: +cardNumber.replace(/[^\d]/g, ''),
                cvvCode: +cvvCode,
                shelfLife: `${shelfLifeMonth}/${shelfLifeYear}`
            },
            paymentStatus: PaymentStatus.success,
        })

    });

    const getValidationStatus = useCallback(
        (fieldName: FieldName) => errors[fieldName] ? error : validate,
        [error, errors, validate],
    );

    const onChangeCVV = (e: BaseSyntheticEvent) => {
        setValue(`${cvvCode}`, getNumberValue(e.target.value, CVV_LENGTH));
    };

    const onChangeShelfLifeMonth = (e: BaseSyntheticEvent) => {
        const { name, value } = e.target;
        const validValue = validMonthNumber(value);
        setValue(name, validValue);
        if (validValue.length === SHELF_LIFE_LENGTH) {
            setDisableShelfLifeYear(false);
            onFocusInput(`input[name=${shelfLifeYear}]`);
        }
    };

    const onChangeShelfLifeYear = (e: BaseSyntheticEvent) => {
        const { name, value } = e.target;
        const currentValue = getNumberValue(value, SHELF_LIFE_LENGTH);
        setValue(name, currentValue);
        if (!value) onFocusInput(`input[name=${shelfLifeMonth}]`)
    };

    const onFocusShelfLifeYear = useCallback(() => {
        if (getValues(`${shelfLifeMonth}`)?.length < SHELF_LIFE_LENGTH)
            onFocusInput(`input[name=${shelfLifeMonth}]`);
    }, [getValues, shelfLifeMonth]);

    const onKeyDownShelfLifeYear = useCallback((e: KeyboardEvent) => {
        const currentShelfLifeYearLength = getValues(`${shelfLifeYear}`)?.length;
        if (e.code === 'Backspace' && !currentShelfLifeYearLength){
            onFocusInput(`input[name=${shelfLifeMonth}]`);
        }
        if (currentShelfLifeYearLength === SHELF_LIFE_LENGTH && e.code === 'Enter'){
            setDisableCVV(false);
            onFocusInput(`input[name=${cvvCode}]`);
        }
    }, [cvvCode, getValues, shelfLifeMonth, shelfLifeYear]);

    const onChangeCardNumber = useCallback((e: BaseSyntheticEvent) => {
        const currValue = getNumberValue(e.target.value, CARD_NUMBER_LENGTH).replace(/[^\d]/g, '');
        setValue(`${cardNumber}`, formatCardNumber(currValue, ' - '));
        setCardType(cardNumber ? CardType.visa : CardType.none);
    }, [cardNumber, setValue]);

    const shelfLifeClassName = (errors[shelfLifeMonth] || errors[shelfLifeYear]) ? error : validate;

    const handleSubmitKeyDown = (e: KeyboardEvent) => {
        const disabledFields = !getValues(`${cvvCode}`)?.length || disableShelfLifeYear || disableShelfLifeMonth;
        if (e.code === 'Enter' && disabledFields ) e.preventDefault();
    };
    
    const onKeyDownOnCardNumber = useCallback((e: KeyboardEvent) => onKeyDownWithFocusUpdate(
        e.code,
        getValues(`${cardNumber}`)?.length === CARD_NUMBER_LENGTH,
        shelfLifeMonth,
        setDisableShelfLifeMonth
    ), [cardNumber, getValues, shelfLifeMonth]);
    
    const handleOnBlurCardNumber = useCallback(() => {
        getValues(`${cardNumber}`)?.length === CARD_NUMBER_LENGTH && setDisableShelfLifeMonth(false)
    }, [cardNumber, getValues]);
        
    const handleOnBlurShelfLifeMonth = useCallback(() => {
        getValues(`${shelfLifeMonth}`)?.length === SHELF_LIFE_LENGTH && setDisableShelfLifeYear(false)
    }, [getValues, shelfLifeMonth]);
    
    const handleOnBlurShelfLifeYear = useCallback(() => {
        getValues(`${shelfLifeYear}`)?.length === SHELF_LIFE_LENGTH && setDisableCVV(false);
    }, [getValues, shelfLifeYear]);
    
    const cardIcon = cardType === CardType.visa ? <VisaLogo /> : <CreditCard />;
    
    return (
        <form onSubmit={onSubmit} onKeyDown={handleSubmitKeyDown}>
            <label>Kartın nömrəsi</label>
            <div className={`inputContainer ${getValidationStatus(cardNumber)}`}>
                <input
                    {...register(cardNumber, rules[cardNumber])}
                    placeholder="0000 - 0000 - 0000 - 0000"
                    onChange={onChangeCardNumber}
                    onKeyDown={onKeyDownOnCardNumber}
                    onBlur={handleOnBlurCardNumber}
                />
                {cardIcon}
            </div>
            <div id="formFields">
                <div className="field">
                    <label>Bitmə tarixi</label>
                    <div className={`inputContainer ${shelfLifeClassName}`} id="shelfLife">
                        <input
                            {...register(shelfLifeMonth, rules[shelfLifeMonth])}
                            placeholder="00"
                            onChange={onChangeShelfLifeMonth}
                            onBlur={handleOnBlurShelfLifeMonth}
                            disabled={disableShelfLifeMonth}
                        />
                        <span>/</span>
                        <input
                            {...register(shelfLifeYear, rules[shelfLifeYear])}
                            placeholder="00"
                            onChange={onChangeShelfLifeYear}
                            onFocus={onFocusShelfLifeYear}
                            onKeyDown={onKeyDownShelfLifeYear}
                            onBlur={handleOnBlurShelfLifeYear}
                            disabled={disableShelfLifeYear}
                        />
                    </div>
                </div>
                <div className="field">
                    <label>CVV/CVC2</label>
                    <div className={`inputContainer ${getValidationStatus(cvvCode)}`} id={cvvCode}>
                        <input
                            {...register(cvvCode, rules[cvvCode])}
                            placeholder="***"
                            onChange={onChangeCVV}
                            type="password"
                            disabled={disableCVV}
                        />
                        <CreditCard/>
                    </div>
                </div>
                <span>Kartın arxasında yerləşən 3 rəqəm</span>
            </div>
            <button type="submit">Ödəmək</button>
        </form>
    )
}
