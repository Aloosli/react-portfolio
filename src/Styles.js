import styled from "styled-components";

export const About = styled.div`
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  color: white;
`;
export const Description = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;

  .coding {
    color: #e9c46a;
  }
  .design {
    color: #e76f51;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 70%;

  img {
    width: 100%;
    object-fit: cover;
    margin-top: 2rem;
    overflow: hidden;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;