import { FieldName } from './types';

export const CARD_NUMBER_LENGTH = 25;
export const CVV_LENGTH = 3;
export const SHELF_LIFE_LENGTH = 2;

const shelfLifeRules = { required: true, maxLength: SHELF_LIFE_LENGTH, minLength: SHELF_LIFE_LENGTH };

export const rules = {
    [FieldName.cardNumber]: { required: true, maxLength: CARD_NUMBER_LENGTH, minLength: CARD_NUMBER_LENGTH },
    [FieldName.cvvCode]: { required: true, maxLength: CVV_LENGTH, minLength: CVV_LENGTH },
    [FieldName.shelfLifeMonth]: shelfLifeRules,
    [FieldName.shelfLifeYear]: shelfLifeRules,
}