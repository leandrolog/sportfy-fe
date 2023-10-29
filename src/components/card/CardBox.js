import './card.css'
import React from "react";
import 'moment-timezone';
import {DateTimeConverter} from "../date-time/DateTimeConverter";


const CardBox = ({data}) => {
    return (
        <div className="card-box">
            {data && data.map((x, index) => (
                <div key={index} className="card-container">
                    <div className="card-header">{x.title}</div>
                    <div className="card-content">Modalidade: {x.category}</div>
                    <div className="card-meta row">
                        <div>Vagas: {x.slot}</div>
                        <div>Local: {x.schedule.local}</div>
                    </div>
                    <small className="card-footer">
                        Data: {DateTimeConverter({date: x.schedule.date})}
                    </small>
                </div>
            ))}
        </div>
    )
}
export default CardBox;
