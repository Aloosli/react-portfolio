import ProjectData from "../data/ProjectData";
import Project from "../components/Project";
// import images
import todayLearned from "../img/today-learned.png";
import todoList from "../img/todolist.png";
import weatherDashboard from "../img/weather_dashboard.png";
import pwdGen from "../img/pwdgen.png";
import beatMaker from "../img/beatmaker.png";
import elenaPortfolio from "../img/elena.png";
// Animation
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";
import styled from "styled-components";

const MyWork = () => {
  const screenshots = {
    "Today I Learned": todayLearned,
    "Todo List": todoList,
    "Weather Dashboard": weatherDashboard,
    "Password Generator": pwdGen,
    "Beat Maker": beatMaker,
    "Elena's Portfolio": elenaPortfolio,
  };

  return (
    <motion.div
      exit="exit"
      variants={pageAnimations}
      initial="hidden"
      animate="show"
    >
      <ProjectWrapper>
        {ProjectData.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            screenshot={screenshots[project.title]}
          />
        ))}
      </ProjectWrapper>
    </motion.div>
  );
};

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    
  }
`;

export default MyWork;

