import React from "react"
import {FlexDirectionProperty, FlexWrapProperty} from "csstype"

interface IProps {
    children: React.ReactNode
    style?: object,
    className?: string
    direction?: FlexDirectionProperty
    wrap?: FlexWrapProperty
    flex?: number | string
}

export default function FlexBox({className="", children, style, ...styleProps}: IProps): JSX.Element {
    return (
        <div
            className={`flex-box ${className}`}
            style={{
                display: "flex",
                flex: styleProps.flex,
                flexDirection: styleProps.direction || "row",
                flexWrap: styleProps.wrap,
                ...style
            }}
        >
            {children}
        </div>
    )
}
