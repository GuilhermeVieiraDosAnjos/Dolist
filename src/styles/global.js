import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
    body{
        width: 100vw;
        overflow-x: hidden;
        height: 100vh;
        background-color: #6D90A6;
        font-family: Arial, Helvetica, sans-serif;

    }

`;

export default GlobalStyle