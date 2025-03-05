import styled from "styled-components";
import {Icon} from "../../../components/icons/Icon.tsx";

type ProjectItemsPropsType = {
    title: string;
    text: string;
    subtext: string;
    src: string;
}
export const ProjectItems = (props: ProjectItemsPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="image"/>
            <BoxText>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <SubText>{props.subtext}</SubText>
            </BoxText>
                <Box>
                    <Link href="/">
                        <Icon iconId={"link-chain"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                        <a>Live Preview</a>
                    </Link>
                    <Link href="/">
                        <Icon iconId={"link-github"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                        <a>View Code</a>
                    </Link>
                </Box>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    max-width: 373px;
    width: 100%;
    margin-bottom: 62px;
    border-radius: 20px;;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #fff;
    
`
const BoxText = styled.div`
    padding: 27px 30px 0;
    color: #ccc;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 9px 30px 25px;
    
`
const Link = styled.a`
    
    display: flex;
    gap: 5px;

    font-weight: 400;
    font-size: 16px;
    
    color: #000;
`
const Title = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    
    color: #000;
    padding-bottom: 12px;
`
const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: #666;
    
`
const SubText = styled.p`
    padding: 12px 0;
    color: #42446e;
    font-size: 14px;
`
