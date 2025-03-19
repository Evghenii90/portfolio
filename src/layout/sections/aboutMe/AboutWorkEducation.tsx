import styled from "styled-components";
import {About} from "./About.tsx";
import {WorkExp} from "./WorkExp.tsx";
import {Education} from "./Education.tsx";
import {Container} from "../../../components/Container.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {theme} from "../../../components/styles/Theme.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";


export const AboutWorkEducation = () => {
    return (
        <StyledAboutWorkEducation id={"about"}>
            <Container>
                <AboutWrapper>
                    <About/>

                    <SectionTitle>Work Experience</SectionTitle>
                    <WorkExp description={"Junior Web Developer"}
                             time={"Full time"}
                             build={"Dr. Rajkumar’s Learning App"}
                             map={"Bengaluru"}
                             calendar={"Sep 2021 - Dec 2021"}/>
                    <WorkExp description={"Web Development Intern"}
                             time={"Internship"}
                             build={"IonPixelz Web Solutions"}
                             map={"Bengaluru"}
                             calendar={"Sep 2021 - Dec 2021"}/>
                    <WorkExp description={"SEO / SEM Specialist"}
                             time={"Internship"}
                             build={"HAAPS"}
                             map={"Bengaluru"}
                             calendar={"Sep 2021 - Dec 2021"}/>

                    <SectionTitle>Educations</SectionTitle>
                    <Education
                        description={"Bachelor in Electronics & Communication"}
                        time={"Full time"}
                        build={"Bangalore Institute of Technology"}
                        calendar={"Aug 2015 - Dec 2020"}/>
                </AboutWrapper>
                <Icon iconId={"elem"} width={"1019"} height={"1019"} viewBox={"0 0 1019 1019"}/>
            </Container>
        </StyledAboutWorkEducation>
    );
};

const StyledAboutWorkEducation = styled.section`
    display: flex;
    min-height: 80vh;
    position: relative;
    overflow: clip;

    ${Container} {
        & > svg {
            position: absolute;
            top: -80px;
            right: -420px;
        }
    }
    @media screen and (max-width: 1200px) {
        ${Container} {
            & > svg {
                top: -80px;
                right: -520px;
            }
        }
    }
    @media screen and (max-width: 1100px) {
        ${Container} {
            & > svg {
                top: -80px;
                right: -600px;
            }
        }
    }
    @media screen and (max-width: 1000px) {
        ${Container} {
            & > svg {
                top: -80px;
                right: -650px;
            }
        }
    }
    
    
    @media screen and (max-width: 992px) {
        ${Container} {
            & > svg {
                display: none;
                
            }
        }
    }
    

`
const AboutWrapper = styled.div`
    max-width: 710px;
    width: 100%;
    height: 100%;
    ${SectionTitle}{
        text-align: left;
        @media screen and (max-width: 768px) {
            font-size: 4rem;
        }
        @media screen and (max-width: 450px) {
            font-size: 2.5rem;
        }
    }
    h2 {
        padding: 30px 30px 10px 0;
        font-weight: 700;
        font-size: 4.2rem;
        line-height: 1.2;
        color: ${theme.colors.color1};
    }
    @media screen and (max-width: 992px) {
        max-width: 100%;
    }
`

