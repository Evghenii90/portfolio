import {createGlobalStyle} from "styled-components";


export const GlobalStyled =createGlobalStyle`
    /*Обнуление*/

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 10px;
    }
    body {
        margin: 0;
        font-family:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button{
        background-color: unset;
        border: none;
    }
    // цвета
    header,section,footer{
    background-color: white;
        //border: 1px solid red;
    }
    
    section {
        padding: 100px 0;
        overflow: clip;
    }
    @media screen and (max-width: 992px) {
        section {
            padding: 50px 0;
        }
    }
    
    
    
`