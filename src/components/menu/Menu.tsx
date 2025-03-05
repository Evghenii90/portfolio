import styled from "styled-components";


export const Menu = (props: {menuItems:Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return <li key={index}><a href="">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    flex-grow: 1;
    
    ul {
        display: flex;
        gap: 50px;
        justify-content: flex-end;
    }
    li>a{
        font-size: 18px;
        line-height: 1.44444;
        color: #a7a7a7;
    }
`

