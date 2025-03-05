import styled from "styled-components";
import {About} from "./About.tsx";
import {WorkExp} from "./WorkExp.tsx";
import {Education} from "./Education.tsx";
import {Container} from "../../../components/Container.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";


export const AboutWorkEducation = () => {
    return (
        <StyledAboutWorkEducation>
            <Container>
                <AboutContainer>
                    <About/>

                    <h2>Work Experience</h2>
                    <WorkExp description={"Junior Web Developer"}
                             build={"Dr. Rajkumar’s Learning App"}
                             map={"Bengaluru"}
                             calendar={"Sep 2021 - Dec 2021"}/>
                    <WorkExp description={"Web Development Intern"}
                             build={"IonPixelz Web Solutions"}
                             map={"Bengaluru"}
                             calendar={"Sep 2021 - Dec 2021"}/>
                    <WorkExp description={"SEO / SEM Specialist"}
                             build={"HAAPS"}
                             map={"Bengaluru"}
                             calendar={"Sep 2021 - Dec 2021"}/>

                    <h2>Educations</h2>
                    <Education
                        description={"Bachelor in Electronics & Communication"}
                        build={"Bangalore Institute of Technology"}
                        calendar={"Aug 2015 - Dec 2020"}/>
                </AboutContainer>
                    <Elem>
                        <Icon iconId={"elem"} width={"621"} height={"1019"} viewBox={"0 0 621 1019"}/>
                    </Elem>
            </Container>
        </StyledAboutWorkEducation>
    );
};

const StyledAboutWorkEducation = styled.section`
display: flex;
    min-height: 100vh;
    padding-top: 0;
`
const AboutContainer = styled.div`
    max-width: 710px;
    width: 100%;
    height: 100%;
    
    h2 {
        padding: 30px;
    }
    
    position: relative;
    z-index: 0;
`

const Elem = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 836px;
    height: 836px;
    transform: translateX(358px) translateY(650px) rotate(15deg);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

