import { FieldName } from '../scene/payment-form/types';

export const onFocusInput = (input: string) => {
    const nextSibling = document.querySelector(input);
    // @ts-ignore
    nextSibling?.focus();
};

export const onKeyDownWithFocusUpdate = (
    code: string,
    currentFieldCondition: boolean,
    nextField: FieldName,
    unDisableNextField: (arg: boolean) => void
) => {
    if (code === 'Enter' && currentFieldCondition){
        unDisableNextField(false);
        onFocusInput(`input[name=${nextField}]`);
    }
};