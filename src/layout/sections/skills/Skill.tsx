import styled from "styled-components";
import {SectionText} from "../../../components/SectionText.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Skill = () => {
    return (
        <StyledSkill>
            <Container>
                <FlexWrapper direction="column" wrap={"wrap"} align={"center"} justify={"center"}>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionText> Technologies I’ve been working with recently</SectionText>
                    <Icons>
                        <Icon iconId={"html"} />
                        <Icon iconId={"css"}/>
                        <Icon iconId={"js"}/>
                        <Icon iconId={"github"} viewBox={"-16 -16 120 120"}/>
                        <Icon iconId={"git"} viewBox={"0 -8 120 120"}/>
                        <Icon iconId={"bootstrap"} viewBox={"-16 -16 120 120"}/>
                        <Icon iconId={"tailwind"} viewBox={"7 10 120 120"}/>
                        <Icon iconId={"vscode"} viewBox={"0 -5 120 120"}/>
                        <Icon iconId={"react"} viewBox={"0 -8 120 120"}/>
                        <Icon iconId={"redux"} viewBox={"0 -8 120 120"}/>
                    </Icons>
                </FlexWrapper>
            </Container>
        </StyledSkill>
    );
};

const StyledSkill = styled.section`
    min-height: 557px;
    margin-top: 20px;
`
const Icons = styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        gap: 105px;
    
`
