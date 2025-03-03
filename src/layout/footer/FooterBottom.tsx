import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const FooterBottom = () => {
    return (
        <StyledFooterBottom>
            <Menu menuItems={items}/>
            <p><small>© 2025 Evgeniy Litvinenko, All Rights Reserved.</small></p>
        </StyledFooterBottom>
    );
};

const StyledFooterBottom = styled.div`
    background-color: #000000;
    color: #ccc;
p{
    text-align: center;
}

`