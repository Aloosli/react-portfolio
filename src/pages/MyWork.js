import ProjectData from "../data/ProjectData";
import Project from "../components/Project";

import todayLearned from '../img/today-learned.png';
import todoList from '../img/todolist.png';
import weatherDashboard from '../img/weather_dashboard.png';
import pwdGen from '../img/pwdgen.png';
import beatMaker from '../img/beatmaker.png';
import elenaPortfolio from '../img/elena.png';

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
    <div>
      
      {ProjectData.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
          screenshot={screenshots[project.title]}
        />
      ))}
    </div>
  );
};

export default MyWork;
