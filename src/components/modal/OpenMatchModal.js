import './openMatchModal.css'
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import axios from "axios";
import InputWithLabel from "../inputWithLabel/InputWithLabel";
import {GiEntryDoor} from "react-icons/gi";
import {NotifyError, NotifySuccess} from "../Notify";
import {user_id} from "../../pages/auth/config/AuthConfig";

function OpenMatchModal({ show, handleClose, id  }) {

    const [match, setMatch] = useState();

    const [matchId, setMatchId] = useState();
    const [category, setCategory] = useState()
    const [players, setPlayers] = useState()
    const [date, setDate] = useState()
    const [local, setLocal] = useState()
    const [slot, setSlot] = useState()
    const [title, setTitle] = useState()
    const [userId, setUserId] = useState(user_id)

    const getMatch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/match/${id}`);
            setMatch(response.data);
            setMatchId(response.data.id);
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

    const addPlayer = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:8080/match/${matchId}/addPlayer/${userId}`,  )
            handleClose()
            NotifySuccess("Cadastrado na partida com sucesso!")
        } catch (error) {
            console.log("deu erro", error)
            NotifyError("Erro ao entrar na Partida")
        }
    }

    useEffect(() => {
        getMatch()
    }, [id])

    const playersToString = (players) => {
        return players && players.map((player) => player.name).join(', ');
    };

    return (
        <div >
            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <Button className="button-close" onClick={handleClose}>
                        <GiEntryDoor/>
                    </Button>
                </Modal.Header>
                <ModalBody >
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
                    <Modal.Footer >
                        <Button className="button-save" onClick={addPlayer}>Entrar na partida</Button>
                    </Modal.Footer>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default OpenMatchModal;
