import React, { useState } from 'react'
import './header.css'
import { FaBars } from 'react-icons/fa'
import SideBar from "../sideBar/SideBar";

const Header = () => {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className="header-container">
            <FaBars onClick={showSidebar}/>
            {sidebar &&
                <SideBar active={setSidebar}
                />
            }
        </div>
    )
}

export default Header
