import React from 'react'

const PointsList = ({points, onPointClick, title,selectedMarker}) => {
    // {title}
    console.log(points);
    return <ol className="map">
        {points.length===0 ? null :
            <li className="title">
                Luoghi
            </li>
        }

        {points.map((point) =>
            <li key={point.title} style={{
                //active: selectedMarker?(selectedMarker._id === point._id):false
            }}>
                <a style={{margin: "10px"}} onClick={() => onPointClick(point)}>
                    {selectedMarker ?
                        (selectedMarker._id === point._id) ? point.title.toUpperCase() : point.title
                        : point.title}
                </a>
            </li>
        )}
    </ol>;
}

export default PointsList