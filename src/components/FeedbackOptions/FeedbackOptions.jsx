import FeedbackButton from '../FeedbackButton/FeedbackButton';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(feedbackType => (
    <FeedbackButton
      key={feedbackType}
      text={feedbackType}
      onClick={() => onLeaveFeedback(feedbackType)}
    />
  ));
};

export default FeedbackOptions;
