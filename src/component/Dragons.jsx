import React from 'react'
import Head from './Head'
import DragonApiFetch from '../apiroutes/DragonApiFetch'
const Dragons = () => {
    return (
        <>
            <Head />
            <DragonApiFetch />
        </>
    )
}

export default Dragons