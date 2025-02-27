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
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Text>{props.subtext}</Text>
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
    margin: 10px;
    border-radius:20px;;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #363636;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`
const Box = styled.div`
    display: flex;
    
`
const Link = styled.a`
    margin: 5px;
    padding: 10px;
    text-decoration: none;
    display: flex;
    a{margin-left: 5px ;}
    color: #fff;
    
`
const Title = styled.h3`
    padding: 10px;
    color: #ccc;
`
const Text = styled.p`
    padding: 10px;
    color: #ccc;
`