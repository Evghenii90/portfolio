import styled from "styled-components";


export const About = () => {
    return (
        <StyledAbout>
            <h2>About Me</h2>
            <p>
                The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
            </p>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
padding-bottom: 20px;
`
