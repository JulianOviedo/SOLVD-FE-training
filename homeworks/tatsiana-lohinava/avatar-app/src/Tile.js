import React from 'react'
import './App.css';

export default function Tile({ data, handleDataUpdate }) {

    return (
        <button className='tile tile-photo' onClick={handleDataUpdate}>
            {data && <img src={data.url} alt={`${data.first_name} ${data.last_name}`} />}
        </button>
    )
}
