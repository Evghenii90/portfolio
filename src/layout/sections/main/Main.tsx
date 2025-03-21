import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "./../../../assets/images/foto.webp"
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../components/styles/Theme.tsx";
// import {Icon} from "../../../components/icons/Icon.tsx";
// import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (
        <StyledMain id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <TextContainer>
                        <SmallText>Hi &#128075;</SmallText>
                        <MainSubtitle>My name is <span>Evgeniy</span></MainSubtitle>
                        <MainTitle>A Web Developer.</MainTitle>
                    </TextContainer>

                        <PhotoContainer>
                            {/*<Tilt*/}
                            {/*    className="parallax-effect-img"*/}
                            {/*    tiltMaxAngleX={40}*/}
                            {/*    tiltMaxAngleY={40}*/}
                            {/*    perspective={800}*/}
                            {/*    transitionSpeed={1500}*/}
                            {/*    scale={1.1}*/}
                            {/*    gyroscope={true}>*/}
                            <Photo src={photo} alt="photo"/>
                            {/*</Tilt>*/}
                        </PhotoContainer>

                    {/*<Icon iconId={"abstract"} width={"628"} height={"628"} viewBox={"0 0 628 628"}/>*/}
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding-top: 260px;
    min-height: 50vh;
    width: 100%;
    display: flex;

    ${Container} {
        position: relative;

        svg {
            position: absolute;
            top: -145px;
            right: -130px;
            transform: rotate(180deg);
        }
    }

    @media screen and (max-width: 1200px) {
        ${Container} {
            svg {
                display: none;
            }
        }

        ${FlexWrapper} {
            gap: 50px;
            justify-content: center;
        }
    }

    @media screen and (max-width: 992px) {
        ${FlexWrapper} {
            flex-direction: column;
            justify-items: start;
            align-items: center;
        }
        padding-top: 150px;
    }


`
const TextContainer = styled.div`
    text-align: left;
    @keyframes typing {
        from {
            width: 0
        }
        to {
            width: 100%
        }
    }
    @media screen and (max-width: 992px) {
        & {
            padding-bottom: 40px;
        }
    }
    @media screen and (max-width: 450px) {
        & {
            padding-bottom: 30px;
        }
    }
`

const SmallText = styled.span`
    font-weight: 700;
    font-size: 5.8rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${theme.colors.color1};

    & {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        animation: typing 1s forwards;
    }

    @media screen and (max-width: 768px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 2.5rem;
    }
`

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 5.8rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${theme.colors.color1};

    & {
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        animation: typing 3s forwards infinite;
        animation-delay: 3s;
    }

    @media screen and (max-width: 768px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 2.5rem;
    }
`
const MainSubtitle = styled.div`
    font-weight: 700;
    font-size: 5.8rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${theme.colors.color1};

    span {
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & {
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        animation: typing 1s steps(25, end) forwards;
        animation-delay: 2s;
    }

    @media screen and (max-width: 768px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 2.5rem;
    }
`

// <---------------------------->
const PhotoContainer = styled.div`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    //overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
    @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 450px) {
        width: 250px;
        height: 250px;
    }
`

const Photo = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 50%;
    object-fit: cover;
    z-index: 1;

    &:hover {
        transform: scale3d(105%, 105%, 0.5);
    }

`