import styled from "styled-components";
import {theme} from "../../../components/styles/Theme.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About Me</SectionTitle>
            <p>
                The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
            </p>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
padding-bottom: 20px;
${SectionTitle}{
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 2.5rem;
    }
}
    &>p{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 1.4;
        color: ${theme.colors.color2};
        @media screen and (max-width: 768px) {
            font-size: 1.5rem;
        }
        @media screen and (max-width: 450px) {
            font-size: 1.2rem;
        }
    }
`
