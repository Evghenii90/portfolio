import styled, {css} from "styled-components";
// import {TabsStatusType} from "./project/Project.tsx";

type MenuItemsPropsType = {
    menuItems: Array<{ title: string, status: "all"| "landing"|"react"|"spa" }>,
    changeFilterStatus: (value: "all"| "landing"|"react"|"spa") => void,
    currentFilterStatus: string
}
export const MenuProject =
    (props: MenuItemsPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <MenuList key={index}>
                        <Link active={props.currentFilterStatus=== item.status} as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </MenuList>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    
    & > ul {
        display: flex;
        gap: 50px;
        list-style: none;
    }
`
const MenuList = styled.li`
    padding-bottom: 10px;
    
`
const Link = styled.a<{active:boolean}>`
    position: relative;
    display: block;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.4;
    color: #42446e;
    
    &::after,
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: -5px;
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 1s ease-out;
        ${props => props.active && css<{active?:boolean}>`
            transform: scaleX(1);
    `}
    }
    &::before {
        top: -5px;
        transform-origin: left;
    }
    &:hover::after,
    &:hover::before{
        transform: scaleX(1);
    }
`