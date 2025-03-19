import styled from "styled-components";
import {Icon} from "../icons/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";


export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);
    return (
        <>
            {showBtn && (<StyledGoTopBtn onClick={() => {
                scroll.scrollToTop({behavior: "smooth"});
            }}>
                <Icon iconId={"arrowGoTop"} width={"60"} height={"60"} viewBox={"0 0 64 64"}/>
            </StyledGoTopBtn>)}

        </>

    );
};

const StyledGoTopBtn = styled.button`
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: filter 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 15px rgb(83, 172, 214));
    }

    &:active {
        transform: scale(0.95); /* Добавляем небольшой эффект нажатия */
    }
`
