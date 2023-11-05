import './login.css'
import {ToastContainer} from "react-toastify";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {HttpRequest} from "../config/AuthConfig";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        const credential = {email, password}
        try {
            const response = await HttpRequest.post(`/login`, credential)
            const token = response.data;
            console.log("token", token)
            sessionStorage.setItem('token', token);
            setTimeout(() => {
                navigate('/')
            }, 1500)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <body className="login-body">
        <div className="login-container">
            <h1 className="login-title">Sportfy</h1>
            <ToastContainer position="top-center" closeOnClick pauseOnHover theme="light"/>
            <form className="login-form">
                <input
                    className="login-input"
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="login-input"
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <Button
                className="btn-in"
                onClick={handleLogin}
            >
                Entrar
            </Button>
        </div>
        </body>
    )
}
export default Login;
