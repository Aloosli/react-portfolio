import avatar from "../img/avatar.png";
// Styled Components
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>I am passionate</h2>
          </div>
          <div className="hide">
            <h2>
              about<span> coding</span>
            </h2>
          </div>
          <div className="hide">
            <h2>
              and<span> design.</span>
            </h2>
          </div>
        </div>
        <p>Contact me for any project ideas you have.</p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
    </About>
  );
};

// Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 5rem;
  color: white;
  img {
    width: 200px;
    margin-top: 1rem
    margin-bottom: 1rem;
  }
`;

export default AboutSection;
