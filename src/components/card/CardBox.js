import './card.css';
import React, {useState} from "react";
import 'moment-timezone';
import {DateTimeConverter} from "../date-time/DateTimeConverter";
import OpenMatchModal from "../modal/OpenMatchModal";

const CardBox = ({data}) => {
    const [matchId, setMatchId] = useState(null);

    const openModal = (id) => {
        setMatchId(id);
    }

    return (
        <div className="card-box">
            {data &&
                data.map((x) => (
                    <button
                        className="card-container"
                        key={x.id}
                        type="button"
                        onClick={() => openModal(x.id)}
                    >
                        <div className="card-header">{x.title}</div>
                        <div className="card-content">Modalidade: {x.category}</div>
                        <div className="card-meta row">
                            <div>Vagas: {x.slot}</div>
                            <div>Local: {x.schedule.local}</div>
                        </div>
                        <small className="card-footer">
                            Data: {DateTimeConverter({date: x.schedule.date})}
                        </small>
                    </button>
                ))}
            <OpenMatchModal
                show={matchId !== null}
                handleClose={() => setMatchId(null)}
                id={matchId}
            />
        </div>
    );
};

export default CardBox;
