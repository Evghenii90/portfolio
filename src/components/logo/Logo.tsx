import styled from "styled-components";
import logo from "./../../assets/images/icon-development.png"


export const Logo = () => {
    return (
            <StyledLogo>
                <a href={"#"}>
                    <img src={logo} alt="logo"/>
                </a>
            </StyledLogo>
        )
};

const StyledLogo = styled.div`
    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        background-color: #fff;
        //border-radius: 5px;
        margin: 10px;
    }
`

