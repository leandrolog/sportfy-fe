import './openMatchModal.css'
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import axios from "axios";
import InputWithLabel from "../inputWithLabel/InputWithLabel";

function OpenMatchModal({ show, handleClose, id , data}) {

    const [match, setMatch] = useState();
    const [category, setCategory] = useState()

    const getMatch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/match/${id}`);
            setMatch(response.data);
            setCategory(response.data.category)
            setDate(response.data.schedule.date)
            setLocal(response.data.schedule.local)
            setSlot(response.data.slot)
            setPlayers(response.data.players)
            setTitle(response.data.title)
        } catch (error) {
            console.log("error", error);
        }
    }
    console.log("match", match);

    useEffect(() => {
        getMatch()
    }, [id])

    const [players, setPlayers] = useState(match?.players)
    const [date, setDate] = useState(match?.schedule?.date)
    const [local, setLocal] = useState(match?.schedule?.local)
    const [slot, setSlot] = useState(match?.slot )
    const [title, setTitle] = useState(match?.title )

    const playersToString = (players) => {
        return players && players.map((player) => player.name).join(', ');
    };

    return (
        <div >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Partida</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <form>
                        <InputWithLabel
                            title="Categoria:"
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            title="Data:"
                            type="datetime-local"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            title="Local:"
                            type="text"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            title="Jogadores:"
                            type="text"
                            value={playersToString(players)}
                            onChange={(e) => setPlayers(e.target.value)}
                            className="input"
                        />
                    </form>
                    <Modal.Footer className="footer">
                        <Button className="button-close" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="button-save">Save</Button>
                    </Modal.Footer>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default OpenMatchModal;
