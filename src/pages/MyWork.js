import ProjectData from "../data/ProjectData";
import Project from "../components/Project";
// import images
import todayLearned from '../img/today-learned.png';
import todoList from '../img/todolist.png';
import weatherDashboard from '../img/weather_dashboard.png';
import pwdGen from '../img/pwdgen.png';
import beatMaker from '../img/beatmaker.png';
import elenaPortfolio from '../img/elena.png';
// Animation
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";

const MyWork = () => {
  const screenshots = {
    'Today I Learned': todayLearned,
    'Todo List': todoList,
    'Weather Dashboard': weatherDashboard,
    'Password Generator': pwdGen,
    'Beat Maker': beatMaker,
    'Elena\'s Portfolio': elenaPortfolio
  };

  return (
    <motion.div exit="exit" variants={pageAnimations} initial="hidden" animate="show">
      
      {ProjectData.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
          screenshot={screenshots[project.title]}
        />
      ))}
    </motion.div>
  );
};

export default MyWork;
