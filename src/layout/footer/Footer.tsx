import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icons/Icon.tsx";
import {LinkIconFooter} from "../../components/linkIcons/LinkIconFooter.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <ContactStyled>
                        <ContactElem>
                            <Icon iconId={"footerTel"} width={"30"} height={"30"} viewBox={"0 -2 15 15"}/>
                            <a href="tel:+37362181178"><span>+373(62)181178</span></a>

                        </ContactElem>
                        <ContactElem>
                            <Icon iconId={"footerMail"} width={"30"} height={"30"} viewBox={"-2 -2 15 15"}/>
                            <a href="mailto:shadow_9009@mail.ru"><span>shadow_9009@mail.ru</span></a>

                        </ContactElem>
                        <ContactElem>
                            <Icon iconId={"footerCity"} width={"30"} height={"30"} viewBox={"0 -1 15 15"}/>
                            <a href="https://maps.app.goo.gl/imo11KBKZcGrUcpa9" target="_blank"
                               rel="noopener noreferrer">
                                <span>Moldova Republic, Tiraspol</span>
                            </a>

                        </ContactElem>
                    </ContactStyled>
                    <InfoStyled>
                        <LinkIconFooter/>
                        <span>Designed and made by Evghenii Litvinenco with Love & Coffee</span>
                    </InfoStyled>
                </FlexWrapper>

            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    overflow: clip;
    position: relative;
    ${FlexWrapper} {
        gap: 30px;
    }
    padding: 30px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Тень для лучшего визуального разделения */
    backdrop-filter: blur(10px); /* Размытие фона для эффекта "матового стекла" */
`

const ContactStyled = styled.div`
display: flex;
    gap: 40px;
    @media screen and (max-width: 992px) {
       flex-direction: column;
        gap: 15px;
    }
`

const ContactElem = styled.div`
display: flex;
    align-items: center;
    &>span,
    &>a{
        font-size: 2rem;
        font-family: "DM Sans", sans-serif;
        color: #666666;
    }
`

const InfoStyled = styled.div`
    &>span{
        display: inline-block;
        padding-top: 20px;
        font-size: 1rem;
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
