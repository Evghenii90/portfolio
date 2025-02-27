import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SkillIcon} from "./SkillIcon.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";


export const Skill = () => {
    return (
        <StyledSkill>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper direction={"row"} wrap={"wrap"} align={"center"} justify={"space-around"}>
                <SkillIcon iconId={"html"} />
                <SkillIcon iconId={"css"}/>
                <SkillIcon iconId={"js"}/>
                <SkillIcon iconId={"github"}/>
                <SkillIcon iconId={"git"}/>
                <SkillIcon iconId={"bootstrap"}/>
                <SkillIcon iconId={"tailwind"}/>
                <SkillIcon iconId={"vscode"}/>
                <SkillIcon iconId={"react"}/>
                <SkillIcon iconId={"redux"}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.section`
background-color: #000000;
    min-height: 50vh;
    padding-top: 100px;
`
