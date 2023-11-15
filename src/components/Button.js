import { StyledButton } from './Feedback.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <StyledButton key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </StyledButton>
  ));
};
