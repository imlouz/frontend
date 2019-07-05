import React, {useEffect} from 'react'
import dynamic from 'next/dynamic'

const DynamicLoader = dynamic(
    import('./EditorComponent'),
    {
        loading: () => (<p>loading...</p>),
        ssr: false
    }
)

// const DynamicLoader = (componentPromisable) => dynamic(
//     componentPromisable,
//     {
//         loading: () => (<p>loading...</p>),
//         ssr: false
//     }
// )

export default DynamicLoader