import React from "react";
import FlexBox from "../box/FlexBox";
import LogoSVG from "../icons/LogoSVG";
import ContainerBox from "../box/ContainerBox";

export default function Header() {
    return (
        <header className="main-header">
            <ContainerBox>
                <FlexBox>
                    <LogoSVG/>
                </FlexBox>
            </ContainerBox>
            <style jsx>{`
                        .main-header {
                          height: 92px;
                          display:flex;
                          align-items:center;
                          background-color: #ffffff;
                        }
                    `}</style>
        </header>
    )
}