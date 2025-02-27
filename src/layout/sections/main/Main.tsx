import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import  photo from "./../../../assets/images/foto.webp"
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                <div>
                    <span>Hi</span>
                    <MainSubtitle>My name is <span>Evgeniy</span></MainSubtitle>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                    <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 50vh;
    width: 100%;
    background-color: #000000;
    color: white;
    div{
        text-align: left;
        font-weight: 700;
        font-size: 58px;
        line-height: 1.2069;
        letter-spacing: -0.02em;
    }
    padding-top: 220px;
`

const MainTitle = styled.h1`
margin: 0;
`
const MainSubtitle = styled.h2`
    margin: 0;
span{
    color: rebeccapurple;
}
`
const Photo = styled.img`
    border-radius: 230px;
    width: 349px;
    height: 349px;
    object-fit: cover;
    border: 7px solid rebeccapurple;
`
