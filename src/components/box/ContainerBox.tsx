import React from "react"
import {MAX_WIDTH} from "../../constants/Constants";

interface IProps {
    children: React.ReactNode
    className?: string
}

export default function ContainerBox({className, children}: IProps): JSX.Element {
    return (
        <div
            className={`container-box ${className}`}
            style={{
                maxWidth: MAX_WIDTH,
            }}
        >
            {children}
            <style jsx>{`
                .container-box{
                    margin: 0 auto;
                    width:100%;
                    padding: 0 5px;
                }
                    .main-container{
                        padding: 40px 0;
                        flex: 1;
                    }
                
            `}</style>
        </div>
    )
}
