import React from 'react'
import { useState, useEffect } from 'react';
const DragonApiFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const apiData = await fetch('https://api.spacexdata.com/v4/dragons');
            const jsonData = await apiData.json();
            setData(jsonData);
        }
        fetchData();
    }, [setData])
    return (
        <div>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {data.map((item) => (
                    <div key={item.id}>
                        <img src={item.flickr_images[0]} alt={item.name} style={{ width: '60px', height: '60px' }} />
                        <div>
                            <p>Name: {item.name}</p>
                            <p>Type: {item.type}</p>
                            <p>ID: {item.id}</p>
                        </div>
                    </div>
                )
                )}
            </ul>
        </div>
    )
}

export default DragonApiFetch