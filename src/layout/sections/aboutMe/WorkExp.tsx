import styled from "styled-components";
import {Icon} from "../../../components/icons/Icon.tsx";
import {theme} from "../../../components/styles/Theme.tsx";

type WorkExpPropsType = {
    description: string;
    build: string;
    map:string;
    calendar: string;
    time: string;
}

export const WorkExp = (props:WorkExpPropsType) => {
    return (
        <StyledWorkExp>
                <h3>{props.description}</h3>
                <span>{props.time}</span>
                <Link href="/">
                    <Icon iconId={"build"} width={"12"} height={"12"} viewBox={"0 -2 12 12"}/>
                    <span>{props.build}</span>
                </Link>
                <Link href="/">
                    <Icon iconId={"map"} width={"13"} height={"13"} viewBox={"0 -2 13 13"}/>
                    <span>{props.map}</span>
                </Link>
                <Link href="/">
                    <Icon iconId={"calendar"} width={"12"} height={"12"} viewBox={"2 -2 13 13"}/>
                    <span>{props.calendar}</span>
                </Link>
        </StyledWorkExp>
    );
};

const StyledWorkExp = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 30px 50px;
    position: relative;

    & > span {
        font-weight: 600;
        font-size: 0.9rem;
        text-align: center;
        line-height: 2.9;
        width: 84px;
        height: 24px;
        color: #018c0f;
        grid-column-start: 4;
        justify-self: end;
        align-self: start;
        background-color: #bfe4b2;
        border-radius: 5px;
    }
    &:before {
        content: '';
        width: 100%;
        height: 1px;
        background-color: #9f9b9b;
        display: inline-block;
        position: absolute;
        top: 60px;
        right: 0;
    }

    h3 {
        grid-column-end: span 3;
        font-weight: 400;
        font-size: 2rem;
        line-height: 1.4;
        color: ${theme.colors.color2};
    }

    a:nth-child(3) {
        grid-column-end: span 2;
    }

    a:nth-child(4) {
        grid-column-start: 3;
        justify-self: start;
    }

    a:nth-child(5) {
        justify-self: end;
        white-space: nowrap;
    }

`

const Link = styled.a`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2.3;
    letter-spacing: 0.08em;
    color: ${theme.colors.color4};
`


