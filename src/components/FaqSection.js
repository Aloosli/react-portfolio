import styled from "styled-components";
import { About } from "../Styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";


const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
      <Toggle title="How do i start?">
        <div className="question">
          <div className="answer">
            <p>
              Feel free to head over to my contact page and drop me a message!
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="What services do you offer?">
        <div className="question">
          <div className="answer">
            <p>
              I offer website design and development, web application
              development, mobile app development solutions.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="How long does it take to complete a project?">
        <div className="question">
          <div className="answer">
            <p>
              The duration of a project depends on its complexity and scope. I
              work closely with clients to create a timeline and keep them
              updated on progress throughout the development process.
            </p>
          </div> 
        </div>
      </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    
    display: block;
    padding-top: 1rem;
    color: #e9c46a;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h4 {
    font-size: 1.6rem;
    color: #e76f51;
  }
  .lines {
    background: #e9c46a;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 0.2rem 0rem;
    }
  }
`;

export default FaqSection;
