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
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        padding-left: 0;
    }
    li>a{
        text-decoration: none;
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.44444;
        color: #a7a7a7;
    }
`

