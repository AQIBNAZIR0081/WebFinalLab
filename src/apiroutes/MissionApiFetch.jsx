import React from 'react'
import { useState, useEffect } from 'react';

const MissionApiFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const apiData = await fetch('https://api.spacexdata.com/v3/missions');
            const jsonData = await apiData.json();
            setData(jsonData);
        }
        fetchData();
    }, [setData])
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ul>
                {data.map((item) => (
                    <li key={item.mission_id}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>ID: {item.mission_id}</p>
                            <p>Name: {item.mission_name}</p>
                            <p>Description: {item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MissionApiFetch