import React from 'react'
import Link from 'next/link'

interface IProps {

}

export default function IndexPage(props: IProps) {
    console.log(props)
    return (
        <>
            <h1>Hello World</h1>
            <Link href='/about'><a>About us</a></Link>
        </>
    )
}