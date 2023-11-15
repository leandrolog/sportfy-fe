import './App.css';
import Header from "./components/header/Header";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate()

    const token = sessionStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }
    }, [])

    return (
        <div>
            <Outlet/>
            {token &&
                <Header/>
            }
        </div>
    );
}

export default App;
