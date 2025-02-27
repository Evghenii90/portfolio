import styled from "styled-components";
import {LinkIcon} from "../../components/linkIcons/LinkIcon.tsx";
import {Logo} from "../../components/logo/Logo.tsx";

export const FooterTop = () => {
    return (
        <StyledFooterTop>
            <Logo/>
            <ContactLink>
                <a href={""}>+373(62)123456</a>
                <a href={""}>shadow@inbox.com</a>
            </ContactLink>
            <LinkIcon/>
        </StyledFooterTop>
    );
};

const StyledFooterTop = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
`
const ContactLink = styled.div`
    a{
        margin: 15px ;
        text-decoration: none;
        color: white;
    }
`
