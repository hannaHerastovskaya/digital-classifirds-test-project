import { ContextType, PaymentStatus } from './types';
import { createContext } from 'react';

export const initialContextData: ContextType = {
    paymentData: {data: null, paymentStatus: PaymentStatus.none},
    setFormData: () => {
    }
};

export const Context = createContext(initialContextData);