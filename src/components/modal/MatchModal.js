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
function  MatchModal({modalTitle, data}) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const [title, setTitle] = useState()
    const [schedule, setSchedule] = useState({
        local : "",
        date: "",
    })
    const [slot, setSlot] = useState()
    const [category, setCategory] = useState()

    const createRequest = async (e) => {
        e.preventDefault()
        const request = {title, schedule, slot, category}
        try {
            await axios.post("/match", request)
            NotifySuccess("Partida criada com sucesso!")
            data()
            handleClose()
        } catch (error) {
            console.log("deu erro", error)
            NotifyError("Erro ao cadastrar produto")
        }
    }
    return (
        <div>
            <ToastContainer position="top-center" closeOnClick pauseOnHover theme="light"/>
            <Button variant="primary" onClick={handleOpen}>{modalTitle}</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Nova Partida</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <form >
                        <InputWithLabel
                            title="Titulo:"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            title="Categoria:"
                            type="text"
                            onChange={(e) => setCategory(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            title="Vagas:"
                            type="text"
                            onChange={(e) => setSlot(e.target.value)}
                            className="input"
                        />
                        <InputWithLabel
                            title="Data:"
                            type="date"
                            onChange={(e) => setSchedule(schedule.date(e.target.value))}
                            className="input"
                        />
                        <InputWithLabel
                            title="Local:"
                            type="text"
                            onChange={(e) => setSchedule(schedule.local(e.target.value))}
                            className="input"
                        />
                    </form>
                    <Modal.Footer clasName="footer">
                        <Button className="button-close" onClick={handleClose}>
                            close
                        </Button>
                        <Button className="button-save" onClick={createRequest}>
                            Save
                        </Button>
                    </Modal.Footer>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default MatchModal;
