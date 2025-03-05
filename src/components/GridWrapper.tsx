import styled from "styled-components";

type GridWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}
export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    
    height: 100%;
    `