import styled from "styled-components";
import {Icon} from "../../../components/icons/Icon.tsx";
import {theme} from "../../../components/styles/Theme.tsx";

type EducationPropsType = {
    description: string;
    build: string;
    calendar: string;
    time: string;
}
export const Education = (props: EducationPropsType) => {
    return (
        <StyledEducation>
                <h3>{props.description}</h3>
                <span>{props.time}</span>

                <Link href="/">
                    <Icon iconId={"build"} width={"12"} height={"12"} viewBox={"0 0 12 12"}/>
                    <a>{props.build}</a>
                </Link>
                <Link href="/">
                    <Icon iconId={"calendar"} width={"12"} height={"12"} viewBox={"1 0 13 13"}/>
                    <a>{props.calendar}</a>
                </Link>

        </StyledEducation>
    );
};

const StyledEducation = styled.div`
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
        white-space: nowrap;
    }

    a:nth-child(3) {
        grid-column-end: span 3;
        justify-self: start;
    }

    a:nth-child(4) {
        justify-self: end;
        grid-column-start: 4;
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