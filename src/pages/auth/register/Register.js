import './register.css'
import React, {useState} from 'react';
import InputWithLabel from "../../../components/inputWithLabel/InputWithLabel";
import Button from "react-bootstrap/Button";
import {HttpRequest} from "../config/AuthConfig";
import 'react-toastify/dist/ReactToastify.css';
import {NotifyError, NotifySuccess} from "../../../components/Notify";
import {ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";


function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState();
    const [city, setCity] = useState();
    const [birthDate, setBirthDate] = useState();
    const [favoriteSport, setFavoriteSport] = useState();
    const [role, setRole] = useState("ROLE_USER");

    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()
        const form = {name, email, password, gender, city, birthDate, favoriteSport, role}
        console.log("form", form)
        try {
            await HttpRequest.post(`/user`, form)
            NotifySuccess("Registrado com sucesso!")
            setTimeout(() => {
                navigate('/login')
            }, 1500)
        } catch (error) {
            console.log(error)
            NotifyError("Erro ao registrar!")
        }
    }


    return (
        <div className="register-container">
            <form className='register-form'>
                <h2>Cadastro</h2>
                <ToastContainer position="top-center" closeOnClick pauseOnHover theme="light"/>
                <InputWithLabel
                    title="Nome"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    style={{marginBottom: '1rem'}}
                />
                <InputWithLabel
                    title="Email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    style={{marginBottom: '1rem'}}
                />
                <InputWithLabel
                    title="Senha"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    style={{marginBottom: '1rem'}}
                />
                <InputWithLabel
                    title="Sexo"
                    type="text"
                    onChange={e => setGender(e.target.value)}
                    style={{marginBottom: '1rem'}}
                />
                <InputWithLabel
                    title="Cidade"
                    type="text"
                    onChange={e => setCity(e.target.value)}
                    style={{marginBottom: '1rem'}}
                />
                <InputWithLabel
                    title="Esporte preferido"
                    type="text"
                    onChange={e => setFavoriteSport(e.target.value)}
                    style={{marginBottom: '1rem'}}
                />
                <InputWithLabel
                    title="Data de nascimento"
                    type="date"
                    onChange={e => setBirthDate(e.target.value)}
                    style={{marginBottom: '1rem'}}
                />
                <Button
                    className="register-btn"
                    type="submit"
                    onClick={handleRegister}
                >Enviar
                </Button>
            </form>
        </div>
    );
}

export default Register;
