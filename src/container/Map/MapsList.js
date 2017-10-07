import React from 'react'

const MapsList = ({maps, onMapClick,}) =>
    <div style={{marginRight: "120px"}}>
        <h4>Lista</h4>
        <ol>
            <li style={{display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
                {maps.map((current) => {
                    const {name, data} = current
                    return <div>
                        <a key={name} style={{margin: '10px'}} onClick={() => onMapClick(data, name)}>{name}</a>
                    </div>;
                })}
            </li>
        </ol>
    </div>

export default MapsList