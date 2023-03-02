import styled from 'styled-components';

export const About = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 5rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    object-fit  : cover;
    overflow: hidden;
  }
`;
export const Hide = styled.div`
    overflow: hidden;
`