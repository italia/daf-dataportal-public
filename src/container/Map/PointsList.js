import React from 'react'

const PointsList = ({points, onPointClick, title,selectedMarker}) =>
    <div>{title}
        <ol>
            {points.map((point) =>
            <li key={point.title} style={{display: "flex",
                flexDirection: "column",
                flexWrap: "wrap"

                //active: selectedMarker?(selectedMarker._id === point._id):false
            }}>
                    <a  style={{margin: '10px'}} onClick={() => onPointClick(point)}>
                        {selectedMarker ?
                        (selectedMarker._id === point._id)?point.title.toUpperCase():point.title
                        :point.title}
                    </a>
            </li>
            )}
        </ol>
    </div>
export default PointsList