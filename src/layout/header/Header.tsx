import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {LinkIcon} from "../../components/linkIcons/LinkIcon.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"} >
                    <Logo/>
                    <HeaderMenu />
                    <MobileMenu/>
                    <LinkIcon/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};



const StyledHeader = styled.header`
    background-color: rgba(255, 255, 255, 0.85);
    padding-top: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Тень для лучшего визуального разделения */
    backdrop-filter: blur(10px); /* Размытие фона для эффекта "матового стекла" */

    
    @media screen and (max-width: 992px) {
        ${Container} {
            padding-bottom: 15px;
        }

        ${FlexWrapper} {
            justify-content: start;
        }
    }
`