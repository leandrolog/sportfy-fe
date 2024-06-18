import './side-bar.css'
import React from 'react'
import {Container, Content} from "./StyledSideBar";
import {
    FaTimes,
    FaRegSun,
    FaIdCardAlt,
    FaRegCalendarAlt,
    FaChartBar
} from 'react-icons/fa'

import SidebarItem from "./SideBarItem";
import {GiSoccerBall} from "react-icons/gi";
import {useNavigate} from "react-router-dom";

const SideBar = ({active}) => {

    const navigate = useNavigate()
    const closeSidebar = () => {
        active(false)
    }
    const onLogout = async () => {
        await sessionStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar}/>
            <Content>
                <SidebarItem path="/match" Icon={GiSoccerBall} Text="Partidas" />
                <SidebarItem path="/statics" Icon={FaChartBar} Text="Estatisticas"/>
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario"/>
                <SidebarItem path="/profile" Icon={FaIdCardAlt} Text="Perfil"/>
                <div className="sidebar-bottom">
                    <SidebarItem onClick={onLogout} Icon={FaRegSun} Text="Sair"/>
                    <SidebarItem Icon={FaRegSun} Text="Configuração"/>
                </div>
            </Content>
        </Container>
    )
}
export default SideBar
