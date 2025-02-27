import {Icon} from "../icons/Icon.tsx";
import styled from "styled-components";

export const LinkIcon = () => {
    return (
        <StyledLinkIcon>
            <a href={"#"}>
                <Icon iconId={"headerGitHub"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            </a>
            <a href={"#"}>
                <Icon iconId={"headerTwitter"} width={"30"} height={"30"} viewBox={"0 0 31 31"}/>
            </a>
            <a href={"#"}>
                <Icon iconId={"headerIn"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            </a>
        </StyledLinkIcon>
    );
};

const StyledLinkIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        margin: 5px
    };
`
