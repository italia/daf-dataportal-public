import React from 'react'

const PointsList = ({points, onPointClick, title}) =>
    <div>{title}
        <ol>
            <li style={{display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
                {points.map((point) =>
                    <a key={point.title} style={{margin: '10px'}} onClick={() => onPointClick(point)}>
                        {point.title}
                    </a>)}
            </li>
        </ol>
    </div>
export default PointsList