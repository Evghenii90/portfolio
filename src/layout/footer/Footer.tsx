import styled from "styled-components";
import {FooterTop} from "./FooterTop.tsx";
import {FooterBottom} from "./FooterBottom.tsx";
import {Container} from "../../components/Container.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTop/>
                <hr/>
                <FooterBottom/>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
`