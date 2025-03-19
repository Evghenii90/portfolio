import styled from "styled-components";
import {theme} from "./styles/Theme.tsx";

export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 1.2;
    text-align: center;
    color: ${theme.colors.color1};
    padding-bottom: 18px ;
    @media screen and (max-width: 768px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 2.5rem;
    }
`