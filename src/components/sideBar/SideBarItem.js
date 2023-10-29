import React from 'react'
import { Container} from "./StyledSideBarItem";

const SidebarItem = ({ Icon, Text }) => {
    return (
        <Container>
            <Icon />
            {Text}
        </Container>
    )
}

export default SidebarItem
