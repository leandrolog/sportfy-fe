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

const SideBar = ({active}) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar}/>
            <Content>
                <SidebarItem Icon={GiSoccerBall} Text="Partidas"/>
                <SidebarItem Icon={FaChartBar} Text="Estatisticas"/>
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario"/>
                <SidebarItem Icon={FaIdCardAlt} Text="Perfil"/>
                <div className="sidebar-bottom">
                    <SidebarItem Icon={FaRegSun} Text="Configuração"/>
                </div>
            </Content>
        </Container>
    )
}

export default SideBar
