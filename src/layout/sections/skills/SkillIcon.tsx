import styled from "styled-components";
import {Icon} from "../../../components/icons/Icon.tsx";

type SkillIconPropsType = {
    iconId: string;
    width?:string;
    height?:string;
    viewBox?:string;
}
export const SkillIcon = (props:SkillIconPropsType) => {
    return (
        <StyledSkillIcon>
            <Icon iconId={props.iconId}/>
        </StyledSkillIcon>
    );
};

const StyledSkillIcon = styled.div`
    width: 15%;
    align-items: center;
    justify-items: center;
    margin: 20px;
`
