import React from 'react';
import './index.scss';
import { LogoTapAz } from '../../img/LogoTapAz';
import { LogoKapitalBank } from '../../img/LogoKapitalBank';

export const Header: React.FC = () => {
    return (
        <header>
            <title>
                <LogoTapAz/>
                <LogoKapitalBank/>
            </title>
            <p>Siz Tap.az saytında təqdim olunan xidmətin ödənişini edirsiniz.</p>
            <hr/>
            <div className="line">
                <span>Ödəniləcək məbləğ:</span>
                <span className="value">50.00 AZN</span>
            </div>
            <div className="line">
                <span>Xidmətin növü:</span>
                <span className="value">Premium 30 gün</span>
            </div>
        </header>
    );
};