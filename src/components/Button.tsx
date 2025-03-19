import styled from "styled-components";
import {theme} from "./styles/Theme.tsx";

export const Button = styled.button`
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 2rem;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    color: #fffdfd;
    border-radius: 10px;
    height: 50px;
    width: 186px;
    border: none;
    padding: 5px;

    &:hover {
        background: linear-gradient(180deg, #13b0f5 2.6%, #e70faa 100%);
        color: ${theme.colors.color1};
    }

    &:active {
        transform: translateY(2px) translateX(2px);
    }
`