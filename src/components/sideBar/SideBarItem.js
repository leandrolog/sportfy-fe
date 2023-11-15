import React from 'react'
import {Container} from "./StyledSideBarItem";

const SidebarItem = ({Icon, Text, path, onClick}) => {
    return (
        <a href={path}>
            <Container onClick={onClick}>
                {Text}
                <Icon/>
            </Container>
        </a>

    )
}

export default SidebarItem
