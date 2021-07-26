export enum PaymentStatus {
    none,
    success = 'Success',
    error = 'Error',
}

export interface PaymentData {
    data: {
        cardNumber: number;
        cvvCode: number;
        shelfLife: string;
    } | null;
    paymentStatus: PaymentStatus;
}

export interface ContextType {
    paymentData: PaymentData;
    setFormData: (arg: PaymentData) => void;
}