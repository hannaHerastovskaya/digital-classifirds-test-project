import { SvgProps } from './types';
import React from 'react';

export const VisaLogo: React.FC<SvgProps> = ({ width = 25, height = 8 }) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height}
         viewBox="0 0 25 8">
        <defs>
            <linearGradient id="5ihcni0lcb" x1="0%" x2="100%" y1="50%" y2="50%">
                <stop offset="0%" stopColor="#1D1C45"/>
                <stop offset="100%" stopColor="#174489"/>
            </linearGradient>
            <path id="xhymg92cwa"
                  d="M12.378.169l-1.67 7.71h-2.02l1.67-7.71h2.02zm8.5 4.978l1.063-2.895.612 2.895h-1.676zm2.254 2.732H25L23.37.17h-1.725c-.388 0-.715.222-.86.565L17.754 7.88h2.12l.422-1.152h2.591l.245 1.152zm-5.273-2.517c.009-2.035-2.85-2.147-2.83-3.057.006-.276.273-.57.857-.645.289-.038 1.087-.067 1.991.344L18.232.37c-.486-.174-1.112-.341-1.89-.341-1.997 0-3.402 1.048-3.413 2.548-.014 1.111 1.003 1.73 1.768 2.1.787.377 1.051.62 1.048.957-.006.518-.628.746-1.209.755-1.016.016-1.605-.271-2.075-.487l-.366 1.69c.472.213 1.343.4 2.247.409 2.122 0 3.51-1.035 3.517-2.638zM9.492.169l-3.273 7.71H4.083l-1.61-6.153c-.098-.38-.183-.518-.48-.678C1.507.788.705.544 0 .392L.048.17h3.437c.438 0 .832.287.932.786l.85 4.462L7.37.169h2.122z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
            <g>
                <g>
                    <g transform="translate(-642.000000, -326.000000) translate(337.000000, 283.000000) translate(305.000000, 43.000000)">
                        <mask id="5dzgjg9s2c" fill="#fff">
                            <use xlinkHref="#xhymg92cwa"/>
                        </mask>
                        <path fill="url(#5ihcni0lcb)"
                              d="M12.378.169l-1.67 7.71h-2.02l1.67-7.71h2.02zm8.5 4.978l1.063-2.895.612 2.895h-1.676zm2.254 2.732H25L23.37.17h-1.725c-.388 0-.715.222-.86.565L17.754 7.88h2.12l.422-1.152h2.591l.245 1.152zm-5.273-2.517c.009-2.035-2.85-2.147-2.83-3.057.006-.276.273-.57.857-.645.289-.038 1.087-.067 1.991.344L18.232.37c-.486-.174-1.112-.341-1.89-.341-1.997 0-3.402 1.048-3.413 2.548-.014 1.111 1.003 1.73 1.768 2.1.787.377 1.051.62 1.048.957-.006.518-.628.746-1.209.755-1.016.016-1.605-.271-2.075-.487l-.366 1.69c.472.213 1.343.4 2.247.409 2.122 0 3.51-1.035 3.517-2.638zM9.492.169l-3.273 7.71H4.083l-1.61-6.153c-.098-.38-.183-.518-.48-.678C1.507.788.705.544 0 .392L.048.17h3.437c.438 0 .832.287.932.786l.85 4.462L7.37.169h2.122z"
                              mask="url(#5dzgjg9s2c)"/>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);