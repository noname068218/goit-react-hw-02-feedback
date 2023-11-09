import styled from 'styled-components';
export const StyledButton = styled.button`
  position: relative;
  font-size: 17px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  border-radius: 6em;
  transition: all 0.2s;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: black;
  background-color: white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &::after {
    background-color: #fff;
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;

export const FeedbackWraper = styled.div`
  width: 500px;
  height: auto;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export const SectionStyle = styled.section`
  font-size: large;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BtnWraper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TextP = styled.p`
  font-weight: bold;
`;
