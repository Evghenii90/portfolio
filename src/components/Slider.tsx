import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {theme} from "./styles/Theme.tsx";
import "./styles/slider.css"

type SliderPropsType = {
    text:string,
    userName: string,
}

const Slide = (props:SliderPropsType) => {
    return (
        <StyledSlide>
            <Text>{props.text}</Text>
            <Name>@{props.userName}</Name>
        </StyledSlide>
    )
}
const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est et ipsum libero perspiciatis sapiente."} userName={"ivan ivanov"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est et ipsum libero perspiciatis sapiente."} userName={"petr petrov"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est et ipsum libero perspiciatis sapiente."} userName={"igor igorev"}/>,
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}/>
    </StyledSlider>
);


const StyledSlider = styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
`
const StyledSlide = styled.div`
    text-align: center;
    padding: 10px;
`
const Text = styled.p`
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.4;
    color: ${theme.colors.color2};
    cursor: grab;
    //padding-bottom: 10px;
`
const Name = styled.span`
    font-size: 2.5rem;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 22px 0 42px;
    display: inline-block;
 `


