import React from 'react'
import Head from './Head'
import MissionApiFetch from '../apiroutes/MissionApiFetch'
const Missions = () => {
    return (
        <div>
            <Head />
            <MissionApiFetch />
        </div>
    )
}

export default Missions