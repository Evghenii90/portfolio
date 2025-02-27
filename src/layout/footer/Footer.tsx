import styled from "styled-components";
import {FooterTop} from "./FooterTop.tsx";
import {FooterBottom} from "./FooterBottom.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterTop/>

            <FooterBottom/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #000000;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`