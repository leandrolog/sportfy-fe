import React, {useEffect} from "react";
import './matchModal.css'
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalBody} from "react-bootstrap";
import {NotifyError, NotifySuccess} from "../Notify";
import InputWithLabel from "../../components/inputWithLabel/InputWithLabel";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import axios from "axios";

function MatchModal({modalTitle, data}) {

    const [show, setShow] = useState(false)

    const [title, setTitle] = useState()
    const [local, setLocal] = useState()
    const [date, setDate] = useState()
    const [slot, setSlot] = useState()
    const [category, setCategory] = useState()

    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)
    const schedule = {
        local: local,
        date: date,
    };
    const createMatch = async (e) => {
        e.preventDefault()
        const request = {title, schedule, slot, category}
        try {
            await axios.post("http://localhost:8080/match", request)
            NotifySuccess("Partida criada com sucesso!")
            data()
            console.log("request", request)
            handleClose()
        } catch (error) {
            console.log("deu erro", error)
            NotifyError("Erro ao cadastrar Partida")
        }
    }

    return (
        <div >
            <ToastContainer position="top-center" closeOnClick pauseOnHover theme="light"/>
            <Button className="btn-open-match" onClick={handleOpen}>{modalTitle}</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Nova Partida</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <form>
                        <InputWithLabel
                            placeholder="Titulo:"
                            type="text"
                            inputClassName={"input-container"}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            placeholder="Categoria:"
                            type="text"
                            onChange={(e) => setCategory(e.target.value)}
                            className="input"
                            inputClassName={"input-container"}

                        />
                        <InputWithLabel
                            placeholder="Vagas:"
                            inputClassName={"input-container"}
                            type="text"
                            onChange={(e) => setSlot(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            placeholder="Data:"
                            type="datetime-local"
                            onChange={(e) => setDate(e.target.value)}
                            inputClassName={"input-container"}
                            className="input"
                        />
                        <InputWithLabel
                            placeholder="Local:"
                            type="text"
                            onChange={(e) => setLocal(e.target.value)}
                            inputClassName={"input-container"}
                            className="input"
                        />
                    </form>
                    <Modal.Footer clasName="footer">
                        <Button className="button-close" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button className="button-save" onClick={createMatch}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default MatchModal;
