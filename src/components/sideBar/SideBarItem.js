import React from 'react'
import {Container} from "./StyledSideBarItem";

const SidebarItem = ({Icon, Text, path}) => {
    return (
        <a href={path}>
            <Container>
                {Text}
                <Icon/>
            </Container>
        </a>

    )
}

export default SidebarItem
