import React, { Component } from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, count) => (total += count), 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good / total) * 100).toFixed() : 0;
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  getStatisticsData = () => {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const positivePercentage = `${percentage}%`;

    return {
      ...this.state,
      total,
      positivePercentage,
    };
  };

  render() {
    return (
      <>
        <GlobalStyle />

        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics data={this.getStatisticsData()} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
