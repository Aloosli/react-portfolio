import styled from "styled-components";

const Project = ({ title, deployedLink, githubLink, screenshot }) => {
  return (
    <ProjectWrapper>
      <h2>{title}</h2>
      <ProjectScreenshot src={screenshot} alt="screenshot" height={300} width={400} />
      <a href={deployedLink}>Link to deployed version</a>
      <a href={githubLink}>Link to GitHub repository</a>
      
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1.9rem;
    color: #e9c46a;
    padding-bottom: 0.5rem;
    margin-top: 1rem;
    }
  img {
    width: 40%;
    height: 40%;
    border-radius: 10rem;
    }
    a {
        text-decoration: none;
        color: #e76f51;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 1rem;
    }
    
`;

const ProjectScreenshot = styled.img`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`;

export default Project;


