import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {LinkIcon} from "../../components/linkIcons/LinkIcon.tsx";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items} />
            <LinkIcon/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`