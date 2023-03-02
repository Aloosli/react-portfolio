import avatar from "../img/avatar.png";
// Styled Components
import styled from "styled-components";

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
const About = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 5rem;
  color: white;
`;
const Description = styled.div`
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

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  img {
    width: 90%;
    object-fit  : cover;
    overflow: hidden;
  }
`;
const Hide = styled.div`
    overflow: hidden;
`

export default AboutSection;
