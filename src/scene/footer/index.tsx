import React from 'react';
import { Maestro } from '../../img/Maestro';
import { VerifiedByViseLogo } from '../../img/VerifiedByVisaLogo';
import { Visa } from '../../img/Visa';
import { VisaElectronLogo } from '../../img/VisaElectronLogo';
import { MasterCard } from '../../img/MasterCard';
import { MasterCardSecureCode } from '../../img/MasterCardSecureCode';
import './index.scss';

export const Footer: React.FC = () => (
    <footer>
        <VerifiedByViseLogo/>
        <Visa/>
        <VisaElectronLogo/>
        <Maestro/>
        <MasterCard/>
        <MasterCardSecureCode/>
    </footer>
)