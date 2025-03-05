import styled from "styled-components";
import {Icon} from "../../../components/icons/Icon.tsx";

type WorkExpPropsType = {
    description: string;
    build: string;
    map:string;
    calendar: string;
}

export const WorkExp = (props:WorkExpPropsType) => {
    return (
        <StyledWorkExp>

            <StyledTitle>
                <h3>{props.description}</h3>
                <span>Full time</span>
            </StyledTitle>
            <hr/>
            <StyledLink>
                <Link href="/">
                    <Icon iconId={"build"} width={"12"} height={"12"} viewBox={"0 0 12 12"}/>
                    <a>{props.build}</a>
                </Link>
                <Link href="/">
                    <Icon iconId={"map"} width={"12"} height={"12"} viewBox={"0 0 12 12"}/>
                    <a>{props.map}</a>
                </Link>
                <Link href="/">
                    <Icon iconId={"calendar"} width={"12"} height={"12"} viewBox={"2 0 13 13"}/>
                    <a>{props.calendar}</a>
                </Link>
            </StyledLink>
        </StyledWorkExp>
    );
};

const StyledWorkExp = styled.div`

`
const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        background-color: #8acc70;
        border-radius: 5px;
        padding: 5px;
    }

    padding-bottom: 10px;
`
const StyledLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
`
const Link = styled.a`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

