import avatar from "../img/avatar.png";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>I am passionate</h2>
          </Hide>
          <Hide>
            <h2>
              about<span className="coding"> coding</span>
            </h2>
          </Hide>
          <Hide>
            <h2>
              and<span className="design"> design.</span>
            </h2>
          </Hide>
        </div>
        <p>Contact me for any project ideas you have.</p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={avatar} alt="avatar" />
      </Image>
    </About>
  );
};

// Styled Components


export default AboutSection;
