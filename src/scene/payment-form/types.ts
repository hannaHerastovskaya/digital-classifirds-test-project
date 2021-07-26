export interface PaymentFormData {
    cardNumber: string;
    cvvCode: string;
    shelfLifeMonth: string;
    shelfLifeYear: string;
}

export enum ValidationStatus {
    validate = 'validate',
    error = 'error',
}

export enum FieldName {
    cardNumber = 'cardNumber',
    cvvCode = 'cvvCode',
    shelfLifeMonth = 'shelfLifeMonth',
    shelfLifeYear = 'shelfLifeYear',
}

export enum CardType {
    visa ,
    none
}