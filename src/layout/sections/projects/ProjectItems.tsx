import styled from "styled-components";
import {Icon} from "../../../components/icons/Icon.tsx";
import {theme} from "../../../components/styles/Theme.tsx";
import {Button} from "../../../components/Button.tsx";

type ProjectItemsPropsType = {
    title: string;
    text: string;
    subtext: string;
    src: string;
    type?: string;
}
export const ProjectItems = (props: ProjectItemsPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt="image"/>
                <Button>View Project</Button>
            </ImageWrapper>

            <BoxText>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <SubText>{props.subtext}</SubText>
            </BoxText>
                <Box>
                    <Link href="/">
                        <Icon iconId={"link-chain"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                        <a href={"#"}>Live Preview</a>
                    </Link>
                    <Link href="/">
                        <Icon iconId={"link-github"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                        <a href={"#"}>View Code</a>
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

    @media screen and (max-width: 796px) {
        max-width: 320px;
    }
    @media screen and (max-width: 690px) {
        max-width: 250px;
    }
    @media screen and (max-width: 550px) {
        max-width: 300px;
    }
    
`
const BoxText = styled.div`
    padding: 27px 27px 21px;
    color: #ccc;
    @media screen and (max-width: 768px) {
        padding: 15px 15px 12px;
    }
`
const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        ${Button}{
            opacity: 1;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 20px 20px 0 0;
            background: rgba(54, 54, 67, 0.3);
            backdrop-filter: blur(4px);
        }
    }
    
    ${Button}{
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    @media screen and (max-width: 768px) {
        height: 200px;
    }
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 27px 21px;
    @media screen and (max-width: 768px) {
        padding: 0 25px 12px 15px;
    }
    
`
const Link = styled.a`
    display: flex;
    gap: 5px;
    font-weight: 400;
    font-size: 1.6rem;

    & > a {
        color: #000;
        text-decoration: underline;
    }
    
    &>a:hover{
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`
const Title = styled.h3`
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 0.9;
    color: ${theme.colors.color3};
    padding-bottom: 17px;
    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
    
`
const Text = styled.p`
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${theme.colors.color2};
    padding-bottom: 12px;
    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
    }
    
`
const SubText = styled.p`
    color: ${theme.colors.color1};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`
