import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 4rem;
  color: white;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    flex-direction: row;
    justify-content: center;
    
    
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  

  .coding {
    color: #e9c46a;
  }
  .design {
    color: #e76f51;
  }

  @media screen and (min-width: 768px) {
    /* Adjust spacing on larger screens */
    h2 {
      font-size: 2.3rem;
    }
    padding-left: 6rem;
  }

  @media screen and (min-width: 1920px) {
    /* Adjust spacing on larger screens */
    h2 {
      font-size: 3rem;
    }
    
  }
`;

export const Image = styled.div`
  display: flex;
  width: 50%;
  height: auto;

  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    
    img {
      width: 100%;
      margin-left: 4rem;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 50%;

    img {
      width: 100%;
      margin-left: 20rem;
    }
  }
`;



export const Hide = styled.div`
  overflow: hidden;
`;



