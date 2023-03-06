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
        font-weight: lighter;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.75rem 1rem;
        border-radius: 40px;
        border: 3px solid #e76f51;
        background: transparent;
        
        transition: all 0.5s ease;
        &:hover {
            background-color: #f4a261;
            color: #e76f51;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 1.7rem;
        
    }
    h3 {
        font-family: "montserrat", sans-serif;
        color: white;
    }
   
    span {
        font-weight: bold;
        
    }
    a {
        color: #e9c46a;
        text-decoration: none;
        font-size: 1.2rem;
    }
    p{
        font-family: "Montserrat", sans-serif;
        padding: 1.5rem 0rem;
        color: #ccc;
        font-size: 1.2rem;
        line-height: 150%;
        
    }
    @media screen and (min-width: 768px) {
    
        h2 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.5rem;
    
    
        }
    }
`;


export default GlobalStyle;
