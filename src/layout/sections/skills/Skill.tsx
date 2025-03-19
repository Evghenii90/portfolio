import styled from "styled-components";
import {SectionText} from "../../../components/SectionText.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {Container} from "../../../components/Container.tsx";



export const Skill = () => {
    return (
        <StyledSkill id={"tech"}>
            <Container>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionText> Technologies I’ve been working with recently</SectionText>
                    <Icons>
                        <Icon iconId={"html"} />
                        <Icon iconId={"css"}/>
                        <Icon iconId={"js"}/>
                        <Icon iconId={"github"} viewBox={"-16 -16 120 120"}/>
                        <Icon iconId={"git"} viewBox={"-8 -8 120 120"}/>
                        <Icon iconId={"bootstrap"} viewBox={"-16 -16 120 120"}/>
                        <Icon iconId={"tailwind"} viewBox={"7 10 120 120"}/>
                        <Icon iconId={"vscode"} viewBox={"-5 -5 120 120"}/>
                        <Icon iconId={"react"} viewBox={"-5 -8 120 120"}/>
                        <Icon iconId={"redux"} viewBox={"0 -8 120 120"}/>
                        <Icon iconId={"styled"} width={"110"} height={"120"} viewBox={"-5 -5 130 130"}/>
                        <Icon iconId={"figma"} viewBox={"-10 -10 120 120"}/>
                    </Icons>
            </Container>
        </StyledSkill>
    );
};

const StyledSkill = styled.section`
    min-height: 557px;
    overflow: clip;
    position: relative;
`
const Icons = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        justify-items: center;
        gap: 105px 94px;
    @media screen and (max-width: 992px) {
        gap: 75px 54px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        justify-items: center;
    }
`
