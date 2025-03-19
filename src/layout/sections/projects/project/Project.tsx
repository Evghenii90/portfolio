import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {SectionText} from "../../../../components/SectionText.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {ProjectItems} from "../ProjectItems.tsx";
import pr1 from "./../../../../assets/images/project_1.webp"
import pr2 from "./../../../../assets/images/project_2.webp"
import pr3 from "./../../../../assets/images/project_3.webp"
import pr4 from "./../../../../assets/images/project_4.webp"
import pr5 from "./../../../../assets/images/project_5.webp"
import pr6 from "./../../../../assets/images/project_6.webp"
import {Container} from "../../../../components/Container.tsx";
import {MenuProject} from "../MenuProject.tsx";
import {useState} from "react";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

const projectItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'Landing',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'SPA',
        status: 'spa'
    },
]

const projectsData = [
    {
        src: pr1,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        subtext: "Tech stack : HTML , JavaScript, SASS, React",
        type: "landing"
    },
    {
        src: pr2,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        subtext: "Tech stack : HTML , JavaScript, SASS, React",
        type: "landing"
    },
    {
        src: pr3,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        subtext: "Tech stack : HTML , JavaScript, SASS, React",
        type: "react"
    },
    {
        src: pr4,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        subtext: "Tech stack : HTML , JavaScript, SASS, React",
        type: "react"
    },
    {
        src: pr5,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        subtext: "Tech stack : HTML , JavaScript, SASS, React",
        type: "spa"
    },
    {
        src: pr6,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        subtext: "Tech stack : HTML , JavaScript, SASS, React",
        type: "spa"
    },
]


export const Project = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredProjects = projectsData;
    if (currentFilterStatus === "landing") {
        filteredProjects = projectsData.filter(work => work.type === "landing");
    }
    if (currentFilterStatus === "react") {
        filteredProjects = projectsData.filter(work => work.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredProjects = projectsData.filter(work => work.type === "spa");
    }

    function changeFilterStatus (value: TabsStatusType ) {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledProject id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <MenuProject menuItems={projectItems}
                             changeFilterStatus={changeFilterStatus}
                             currentFilterStatus = {currentFilterStatus}
                />
                <FlexWrapper justify={"center"} wrap={"wrap"}>
                    {filteredProjects.map(project => {
                        return <ProjectItems title={project.title}
                                             text={project.text}
                                             subtext={project.subtext}
                                             src={project.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
    min-height: 100vh;
    overflow: clip;
    position: relative;
    ${FlexWrapper} {
        gap: 20px;
    }

    ${SectionText} {
        padding-bottom: 40px;
    }

    @media screen and (max-width: 992px) {
        ${FlexWrapper} {
            justify-content: space-around;
        }
    }
`
