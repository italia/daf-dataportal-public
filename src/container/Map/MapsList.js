import React from 'react'

const MapsList = ({maps, onMapClick,}) =>
        <ol className="map-datalist">
            <li className="title">
                Source dati
            </li>
            {maps.map((current) => {
                const {name, data} = current
                return <li>
                    <a key={name} style={{margin: '10px'}} onClick={() => onMapClick(data, name)}>{name}</a>
                </li>
            })}
        </ol>

export default MapsList