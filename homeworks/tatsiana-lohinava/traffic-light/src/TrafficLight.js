import React, { useEffect, useState } from 'react'
import { lightData } from './lightData'

export default function TrafficLight() {
    const [currentIndex, setCurrentIndex] = useState(2)

    useEffect(() => {
        const timerId = setTimeout(() => {
            return (currentIndex === lightData.length - 1) ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
        }, 1500);

        return () => {
            clearTimeout(timerId);
        };

    }, [currentIndex]);

    return (
        <div className='trafficlight-body'>
            <div className='trafficlight-head'></div>
            <div className='trafficlight-nest'>
                {lightData.map((dataItem, index) =>
                (<div className='trafficlight-light'
                    style={{ backgroundColor: index === currentIndex && dataItem }} 
                    key={dataItem}>
                </div>
                ))}
            </div>

        </div>
    )
}
