import styled from "styled-components";


export const Logo = () => {
    return (
            <StyledLogo>
                <a href={"#"}>
                    <span>HOME</span>
                </a>
            </StyledLogo>
        )
};

const StyledLogo = styled.div`
a{
    padding: 10px;
    text-decoration: none;
    color: white;
    font-size: 20px;
}
`

