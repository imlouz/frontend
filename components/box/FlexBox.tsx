import React from "react";
import {FlexDirectionProperty, FlexWrapProperty} from "csstype";

interface IProps {
    children: React.ReactNode,
    className?: string
    direction?: FlexDirectionProperty,
    wrap?: FlexWrapProperty,
}

export default function FlexBox({className, children, ...styleProps}: IProps): JSX.Element {
    return (
        <div
            className={`flex-box ${className}`}
            style={{
                display: "flex",
                flexDirection: styleProps.direction||'row',
                flexWrap: styleProps.wrap,
            }}>
            {children}
        </div>
    )
}