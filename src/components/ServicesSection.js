// This is the Services Section of the Home Page
//------------------------------------------------
// import the icons
import clock from "../icons/clock.svg";
import coins from "../icons/coins.svg";
import innovative from "../icons/innovative.svg";

// import styles
import styled from "styled-components";
import { About, Description } from "../Styles";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          Unleashing<span> creative</span> potential.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock-icon" />
              <h2>Efficient</h2>
            </div>
            <p>
              I work quickly and efficient to get the job done on time and to a
              high standard.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={coins} alt="coins-icon" />
              <h2>Affordable</h2>
            </div>
            <p>
              {" "}
              Competitive pricing ensures my services are accessible and
              affordable for everyone.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={innovative} alt="lightbulb-icon" />
              <h2>Innovative</h2>
            </div>
            <p>
              The latest technologies and trends are incorporated into my
              solutions to bring creativity and innovation to your project.
            </p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1.9rem;
    padding-bottom: 2rem;
  }
  p {
    width: 100%;
  }
  span {
    color: #e9c46a;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px; /* set a maximum width */
    margin: 0 auto; /* center the Services component */
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;
const Card = styled.div`
  flex-basis: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: #e76f51;
    padding: 0.5rem;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: left;
  }
`;

export default ServicesSection;
