import React from "react";

interface IProps {
    size?: number,
    color?: string
}

export default function CopySVG({size = 24, color = "#000"}: IProps): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             width={size} height={size} viewBox="0 0 24 24">
            <defs>
                <path id="copy_a"
                      d="M11 10a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9zm0-2h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3zm-6 6a1 1 0 0 1 0 2H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1z"/>
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="copy_b" fill="#fff">
                    <use xlinkHref="#copy_a"/>
                </mask>
                <use fill={color} fillRule="nonzero" xlinkHref="#copy_a"/>
                <g fill={color} fillOpacity=".4" mask="url(#copy_b)">
                    <path d="M0 0h24v24H0z"/>
                </g>
            </g>
        </svg>)
}