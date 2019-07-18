import React from "react";
import FlexBox from "../box/FlexBox";
import LogoSVG from "../icons/LogoSVG";
import ContainerBox from "../box/ContainerBox";
import Link from "next/link";

export default function Header() {
    return (
        <header className="main-header">
            <ContainerBox>
                <FlexBox>
                    <Link href="/">
                        <a>
                            <LogoSVG/>
                        </a>
                    </Link>
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