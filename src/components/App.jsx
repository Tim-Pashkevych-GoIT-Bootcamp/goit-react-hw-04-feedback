import { useState } from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [points, setPoints] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () =>
    Object.values(points).reduce((total, count) => (total += count), 0);

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? ((points.good / total) * 100).toFixed() : 0;
  };

  const onLeaveFeedback = feedbackType => {
    setPoints(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const getStatisticsData = () => {
    const total = countTotalFeedback();
    const percentage = countPositiveFeedbackPercentage();
    const positivePercentage = `${percentage}%`;

    return {
      ...points,
      total,
      positivePercentage,
    };
  };

  return (
    <>
      <GlobalStyle />

      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={Object.keys(points)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics data={getStatisticsData()} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
