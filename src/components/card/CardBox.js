import './card.css'
import React from "react";


const CardBox = ({data}) => {

    return (
        <div  className="card-box">
            {data && data.map((x, index) => (
                <div key={index} className="card-container">
                        <div className="card-header">{x.title}</div>
                        <div className="card-content">{x.category}</div>
                        <div className="card-meta row">
                            <div>{x.slot}</div>
                            <div>d-container ap</div>
                        </div>
                        <div className="card-footer">aaaaaaa</div>
                </div>
            ))}
        </div>
    )
}
export default CardBox;
