import {Icon} from "../icons/Icon.tsx";
import styled from "styled-components";


const links = [
    {href: "https://github.com/Evghenii90", iconId: "headerGitHub", viewBox: "0 0 30 30"},
    {href: "https://t.me/moveton_01", iconId: "headerTelegram", viewBox: "0 0 26 26"},
    {
        href: "https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BB%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE-65740534b/",
        iconId: "headerIn",
        viewBox: "0 0 30 30"
    },
];

export const LinkIconFooter = () => {


    return (
        <StyledLinkIconFooter>
            {links.map((link, index) => (
                <a target="_blank"
                   rel="noopener noreferrer"
                   key={index}
                   href={link.href}>
                    <Icon
                        iconId={link.iconId}
                        width="30"
                        height="30"
                        viewBox={link.viewBox}
                    />
                </a>
            ))}
        </StyledLinkIconFooter>
    );
};

const StyledLinkIconFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    & > a {
        color: #666666;
    }

    & > a:hover {
        color: #13b0f5;
    }
`
