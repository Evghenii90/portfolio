import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "./../../../assets/images/foto.webp"
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../components/styles/Theme.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi</SmallText>
                        <MainSubtitle>My name is <span>Evgeniy</span></MainSubtitle>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <Position>
                        <PhotoContainer>
                            <Photo src={photo} alt="photo"/>
                        </PhotoContainer>
                        <Elem>
                            <Icon iconId={"abstract"} width={"628"} height={"628"} viewBox={"0 0 628 628"}/>
                        </Elem>
                    </Position>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    margin-top: 200px;
    min-height: 50vh;
    width: 100%;
    display: flex;
    position: relative;
    div {
        text-align: left;
    }
    
`
const SmallText = styled.span`
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: ${theme.colors.fonts.fontTitle};
`

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: ${theme.colors.fonts.fontTitle};


`
const MainSubtitle = styled.h2`
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: ${theme.colors.fonts.fontTitle};

    span {
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
const Position = styled.div`
    position: relative;
`
const PhotoContainer = styled.div`
    
    width: 349px;
    height: 349px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
`

const Photo = styled.img`
    width: 90%;
    height: 90%;
    border-radius: 50%;
    object-fit: cover;

    &:hover {
        border: 5px solid #3776c6;
    }
`
const Elem = styled.div`
    position: absolute;
    transform: rotate(180deg);
    top: -40%;
    right: -40%;
`