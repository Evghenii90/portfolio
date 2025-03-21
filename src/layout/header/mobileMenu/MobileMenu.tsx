import styled, {css} from "styled-components";
import {theme} from "../../../components/styles/Theme.tsx";
import {useEffect, useState} from "react";
import {Link} from "react-scroll";

const items = [
    {title: "Home", href: "home"},
    {title: "About", href: "about"},
    {title: "Tech Stack", href: "tech"},
    {title: "Projects", href: "projects"},
    {title: "Contact", href: "contact"}
]
export const MobileMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    // Эффект для блокировки скролла
    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflow = "hidden"; // Блокируем скролл
        } else {
            document.body.style.overflow = "auto"; // Восстанавливаем скролл
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuIsOpen]);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    const onLinkClick = () => {
        setMenuIsOpen(false);
    };
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(!menuIsOpen)
            }}>
                <ul>
                    {items.map((item, index) => {
                        return <ListItem key={index} >
                            <NavLink
                                activeClass="active"
                                     to={item.href}
                                     smooth={true}
                                     spy={true}
                                     offset={-130}
                                onClick={onLinkClick}
                            >
                                {item.title}
                            </NavLink>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.desktop} {
        display: block;
        //overflow: visible;
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999999;
    background-color: rgba(175, 173, 173, 0.9);
    display: none;
    

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        

        ${NavLink} {
            color: ${theme.colors.color1};
            font-weight: bold;
            font-size: 2rem;
        }
    `}
    ul {
        display: flex;
        gap: 50px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -130px;
    right: -100px;
    z-index: 99999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.color1};
        position: absolute;
        left: 40px;
        bottom: 30px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(35, 52, 97, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.color1};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.color1};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }

`

const ListItem = styled.li`
    padding-bottom: 10px;

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
    &:hover::before{
        transform: scaleX(1);
    }
`