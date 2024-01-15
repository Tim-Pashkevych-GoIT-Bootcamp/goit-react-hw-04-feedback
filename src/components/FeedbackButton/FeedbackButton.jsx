import { StyledButton } from './FeedbackButton.styled';

const FeedbackButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default FeedbackButton;
