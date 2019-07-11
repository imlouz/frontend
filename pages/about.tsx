import React from 'react'
import Link from 'next/link'
import MainLayout from "../components/layout/MainLayout";

interface IProps {

}

export default function IndexPage(props: IProps) {
    console.log(props)
    return (
        <MainLayout>
            <h1>About Project</h1>
            <Link href='/'><a>Home page</a></Link>
        </MainLayout>
    )
}