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
        font-size: 2rem;
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
        font-size: 1.1rem;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    // Styles for screens greater or equal to 500px wide
  @media screen and (min-width: 500px) {
  h2 {
        font-size: 3rem; 
  }
  p {
    font-size: 1.8rem;
    padding: 3rem 0rem;
    line-height: 130%;
    }
  button {
    font-size: 1.4rem;
    
  }
    }
    `;

export default GlobalStyle;
