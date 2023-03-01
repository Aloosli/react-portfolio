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
              about<span className="coding"> coding</span>
            </h2>
          </div>
          <div className="hide">
            <h2>
              and<span className="design"> design.</span>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 5rem;
  color: white;
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
  }
  .coding {
    color: #e9c46a;
  }
  .design {
    color: #e76f51;
    }
  img {
    width: 200px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

    // Styles for screens greater or equal to 500px wide
  @media screen and (min-width: 500px) {

    img {
    width: 250px;
   
    }
    .description {
    margin-bottom: 2rem;
    }
    }

    // Styles for screen sizes greater than or equal to 1440px wide
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 10rem;
    h2  {
        font-size: 4rem;
    }

    img {
    width: 400px;
   
  }
  .description {
    margin-bottom: 2rem;
  } 
}
`;

export default AboutSection;
