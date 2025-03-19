import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {Slider} from "../../../components/Slider.tsx";



export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <SectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quos!</SectionText>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Icon iconId={"quote"} width={"50"} height={"50"} viewBox={"0 0 50 50"}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    position: relative;

    ${FlexWrapper} {
        box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
        border: 2px solid #7765d2;
        border-radius: 2rem;
        padding: 50px 0;
        margin-top: 40px;
    }

    ${SectionText} {
        padding-bottom: 40px;
    }
`