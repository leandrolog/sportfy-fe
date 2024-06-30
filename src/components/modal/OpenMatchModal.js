import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {ModalBody} from "react-bootstrap";
import axios from "axios";
import InputWithLabel from "../inputWithLabel/InputWithLabel";
import {GiEntryDoor} from "react-icons/gi";
import {NotifyError, NotifySuccess} from "../Notify";
import {user_id} from "../../pages/auth/config/AuthConfig";

function OpenMatchModal({show, handleClose, id}) {

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
            setTitle(response.data.title)
            setPlayers(
                response.data.players.slice(0, 4).map((player, index) => ({
                    ...player,
                    position: (() => {
                        switch (index) {
                            case 0:
                                return {x: 85, y: 150};
                            case 1:
                                return {x: 475, y: 150};
                            case 2:
                                return {x: 75, y: 270};
                            case 3:
                                return {x: 465, y: 270};
                            default:
                                return {x: 85, y: 150};
                        }
                    })(),
                    colorClass: index === 0 || index === 2 ? "player-red" : "player-blue"
                }))
            );
        } catch (error) {
            console.log("error", error);
        }
    }

    const addPlayer = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:8080/match/${matchId}/addPlayer/${userId}`,)
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

    return (
        <div>
            <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <form>
                        <InputWithLabel
                            placeholder="Categoria:"
                            type="text"
                            inputClassName={"input-container"}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            placeholder="Categoria:"
                            type="datetime-local"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            inputClassName={"input-container"}
                            className="input"
                        />
                        <InputWithLabel
                            placeholder="Local:"
                            type="text"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                            inputClassName={"input-container"}
                            className="input"
                        />
                        {players && players.map((player, index) => (
                            <div
                                key={index}
                                className={`player ${player.colorClass}`}
                                style={{top: `${player.position.y}px`, left: `${player.position.x}px`}}
                            >
                                {player.name}
                            </div>
                        ))}
                    </form>
                    <Modal.Footer>
                        <Button className="button-save" onClick={addPlayer}>Entrar na partida</Button>
                        <Button className="button-close" onClick={handleClose}>
                            Sair
                        </Button>
                    </Modal.Footer>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default OpenMatchModal;
