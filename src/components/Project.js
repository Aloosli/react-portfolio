import styled from "styled-components";


const Project = ({ title, deployedLink, githubLink, screenshot }) => {
    return (
      <ProjectWrapper>
        <h2>{title}</h2>
        <ProjectScreenshot src={screenshot} alt="screenshot" height={300} width={400} />
        
        <LinksWrapper>
          <a href={deployedLink}>Deployment</a>
          <a href={githubLink}>GitHub</a>
        </LinksWrapper>
      </ProjectWrapper>
    );
  };
  
  const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 2rem;
      color: #e9c46a;
      padding-bottom: 0.5rem;
      margin-top: 4rem;
      margin-bottom: 1rem;
    }
    a {
        color: #e76f51;
        text-decoration: none;
        font-size: 1.5rem;
    }
  `;
  
  const ProjectScreenshot = styled.img`
    object-fit: contain;
    max-width: 60%;
    max-height: 60%;
    `;
  
  const LinksWrapper = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  `;
  
  export default Project;
  


