
import styled from 'styled-components';
import {About} from '../styles';

const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
                <div className="lines"></div>
            </div>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
                <div className="lines"></div>
            </div>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
                <div className="lines"></div>
            </div>
        </Faq>
    )

}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
        color: #e9c46a;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    h4 {
        font-size: 1.5rem;
        color: #e76f51;
    }
    .lines {
        background: #e9c46a;
        height: 0.2rem;
        margin: 1rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;

    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection