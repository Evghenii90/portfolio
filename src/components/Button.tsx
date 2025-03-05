import styled from "styled-components";

export const Button = styled.button`
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    background-color: #bf3939;
    color: white;
    border-radius: 10px;
    height: 50px;
    width: 186px;
    border: none;

    &:hover {
        height: 53px;
        width: 189px;
        border: 2px solid transparent;
        background-color: #488c2d;
    }

    &:active {
        border-radius: 10px;
        height: 50px;
        width: 186px;
        border: none;
        background-color: white;
        color: #488c2d;
    }
`