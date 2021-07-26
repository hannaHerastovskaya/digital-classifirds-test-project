import React, { useEffect, useState } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { PaymentForm } from './payment-form';
import { Context, initialContextData } from './context';
import './index.scss';

export const MainComponent: React.FC = () => {
    const [paymentData, setFormData] = useState(initialContextData.paymentData);

    useEffect(() => {
        if (paymentData.data) {
            alert(paymentData.paymentStatus);
            console.log(paymentData.data);
        }
    }, [paymentData]);

    return (
        <Context.Provider value={{ paymentData, setFormData }}>
            <div id="container">
                <div id="main">
                    <Header/>
                    <PaymentForm/>
                </div>
                <Footer/>
            </div>
        </Context.Provider>
    )
}