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


export const Project = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <ProjectItems
                        src={pr1}
                        title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        subtext={"Tech stack : HTML , JavaScript, SASS, React"}
                    />
                    <ProjectItems
                        src={pr2}
                        title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        subtext={"Tech stack : HTML , JavaScript, SASS, React"}
                    />
                    <ProjectItems
                        src={pr3}
                        title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        subtext={"Tech stack : HTML , JavaScript, SASS, React"}
                    />
                    <ProjectItems
                        src={pr4}
                        title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        subtext={"Tech stack : HTML , JavaScript, SASS, React"}
                    />
                    <ProjectItems
                        src={pr5}
                        title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        subtext={"Tech stack : HTML , JavaScript, SASS, React"}
                    />
                    <ProjectItems
                        src={pr6}
                        title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        subtext={"Tech stack : HTML , JavaScript, SASS, React"}
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
`