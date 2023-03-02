// This is the Services Section of the Home Page
//------------------------------------------------
// import the icons
import clock from "../icons/clock.svg";
import coins from "../icons/coins.svg";
import innovative from "../icons/innovative.svg";
import responsive from "../icons/responsive.svg";
// import styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

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
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={coins} alt="coins-icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={innovative} alt="lightbulb-icon" />
              <h3>Innovative</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
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
    padding: 1rem 0rem 2rem 0rem;
  }
  span {
    color: #e9c46a;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    
    h3 {
      font-size: 1.5rem;
      margin-left: 1rem;
      color: #e76f51;
      padding: 0.5rem;
    }
  }
`;

export default ServicesSection;
