import styled from "styled-components";
import {theme} from "../../../components/styles/Theme.tsx";
import {Link} from "react-scroll";

const items = [
    {title: "Home", href: "home"},
    {title: "About", href: "about"},
    {title: "Tech Stack", href: "tech"},
    {title: "Projects", href: "projects"},
    {title: "Contact", href: "contact"}
]
export const HeaderMenu = () => {


    return (
        <StyledHeaderMenu>
            <ul>
                {items.map((item, index) => {
                    return <ListItem key={index}>
                        <NavLink activeClass="active"
                                 to={item.href}
                                 smooth={true}
                                 spy={true}
                                 offset={-130}
                        >
                            {item.title}
                        </NavLink>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`

    ul {
        display: flex;
        gap: 50px;
        justify-content: flex-end;
    }

    @media ${theme.media.desktop} {
        display: none;
    }
`

const ListItem = styled.li`
    padding-bottom: 4px;

`
const NavLink = styled(Link)`
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
    }

    &::before {
        top: -5px;
        transform-origin: left;
    }

    &:hover::after,
    &:hover::before, &.active {
        transform: scaleX(1);
    }

`
