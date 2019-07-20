import React from "react";

interface IProps {
    size?: number,
    color?: string
}

export default function CloseSVG({size = 24, color = "#000"}: IProps): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             width={size} height={size} viewBox="0 0 24 24">
            <defs>
                <path id="close_a" d="M13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L12 10.586l5.293-5.293a1 1 0 0 1 1.414 1.414L13.414 12z"/>
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="close_b" fill="#fff">
                    <use xlinkHref="#close_a"/>
                </mask>
                <use fill={color} fillRule="nonzero" xlinkHref="#close_a"/>
                <g fill={color} fillOpacity=".4" mask="url(#close_b)">
                    <path d="M0 0h24v24H0z"/>
                </g>
            </g>
        </svg>
    )
}