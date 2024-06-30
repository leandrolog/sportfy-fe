import axios from "axios";
import React, {useEffect, useState} from "react";
import {user_id} from "../auth/config/AuthConfig";
import ProfileImage from "../../assets/fotoweb.png";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({});
    const [userId, setUserId] = useState(user_id);

    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user/${userId}`);
            setProfile(response.data);
        } catch (error) {
            console.log("Erro ao obter perfil do usuário:", error);
        }
    };

    const roleTranslate = (role) => {
        switch (role) {
            case 'ROLE_USER':
                return 'Usuário';
            case 'ROLE_ADMIN':
                return 'Administrador';
            default:
                return role;
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            paddingTop: "7rem",
            flexDirection: 'column'
        }}>
            <h1>Perfil</h1>
            <div style={{display: "flex", paddingTop: "2rem", alignItems: 'center'}}>
                <div style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginRight: "2rem",
                    backgroundColor: "#ccc"
                }}>
                    <img src={ProfileImage} alt="Imagem de Perfil"
                         style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style={{marginBottom: "1rem"}}>Nome: {profile.name}</h3>
                    <h3 style={{marginBottom: "1rem"}}>Email: {profile.email}</h3>
                    <h3 style={{marginBottom: "1rem"}}>Cargo: {roleTranslate(profile.role)}</h3>
                </div>
            </div>
            <Button onClick={() => navigate('/new-local')}>Registrar Local</Button>
        </div>
    );
}

export default Profile;
