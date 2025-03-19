import styled from "styled-components";
import {theme} from "./styles/Theme.tsx";

export const SectionText = styled.p`
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 1.2;
    text-align: center;
    color: ${theme.colors.color2};
    padding-bottom: 124px ;
    @media screen and (max-width: 768px) {
        font-size: 3.5rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 2rem;
    }
`