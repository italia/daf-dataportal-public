import React from 'react'

const MapsList = ({maps, onMapClick,}) =>
    <div style={{marginRight: "120px"}}>
        <ol className="Linklist Linklist--padded u-layout-prose u-text-r-xs Treeview Treeview--default js-Treeview">
            {maps.map((current) => {
                const {name, data} = current
                return <li>
                    <a key={name} style={{margin: '10px'}} onClick={() => onMapClick(data, name)}>{name}</a>
                </li>
            })}
        </ol>
    </div>

export default MapsList