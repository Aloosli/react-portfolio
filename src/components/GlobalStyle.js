// import the createGlobalStyle function from styled-components
import { createGlobalStyle } from 'styled-components';

// This is a global style component that will be used to style the entire app
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #1b1b1b;
    }
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: red;
        transition: all 0.5s ease;
        &:hover {
            background-color: #23d997;
            color: red;
        }
    }
    `;

    export default GlobalStyle;