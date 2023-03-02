

const Project = ({ title, deployedLink, githubLink, screenshot }) => {
  return (
    <div>
      <h2>{title}</h2>
      <a href={deployedLink}>Link to deployed version</a>
      <a href={githubLink}>Link to GitHub repository</a>
      <img src={screenshot} alt="screenshot" />
    </div>
  );
};

export default Project;
