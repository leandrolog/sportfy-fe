import './profile.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {user_id} from "../auth/config/AuthConfig";


function Profile() {

    const [profile, setProfile] = useState([])
    const [userId, setUserId] = useState(user_id)

    const getProfile = async () => {

        try {
            const response = await axios.get(`http://localhost:8080/user/${userId}`)
            setProfile(response.data)
        } catch (error) {
            console.log("errou", error)
        }

    }
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
        getProfile()
    }, [])
    console.log("profile", profile)

    return (
        <div style={{justifyContent: "center", display: "flex", alignItems:"center", paddingTop: "7rem", flexDirection:'column'}}>
            <div>
                <h1>Profile page</h1>
            </div>
            <div style={{paddingTop: "7rem", alignItems: 'center'}}>
                <h3>Nome: {profile.name}</h3>
                <h3>Email: {profile.email}</h3>
                <h3>Cargo: {roleTranslate(profile.role)}</h3>
            </div>
        </div>
    )

}

export default Profile
