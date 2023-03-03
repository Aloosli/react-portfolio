
import styled from 'styled-components';

const SuccessPage = () => {
  return (
    <SuccessPageContainer>
      <SuccessMessage>Thank you for your message! I'll get back to you soon.</SuccessMessage>
    </SuccessPageContainer>
  );
};

const SuccessPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SuccessMessage = styled.h2`
  color: #e9c46a;
  font-size: 2rem;
  
  text-align: center;
`;

export default SuccessPage;
