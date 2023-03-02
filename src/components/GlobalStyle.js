// import the createGlobalStyle function from styled-components
import { createGlobalStyle } from "styled-components";

// This is a global style component that will be used to style the entire app
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #264653;
        font-family: 'Gabriela', serif;
    }
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 40px;
        border: 5px solid #e76f51;
        background: transparent;
        color: #e9c46a;
        transition: all 0.5s ease;
        &:hover {
            background-color: #f4a261;
            color: #e76f51;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 2.4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        color: #2a9d8f;
    }
    span {
        font-weight: bold;
        
    }
    a {
        font-size: 1.2rem;
    }
    p{
        padding: 2.5rem 0rem;
        color: #ccc;
        font-size: 1.6rem;
        line-height: 150%;
    }`;

export default GlobalStyle;
