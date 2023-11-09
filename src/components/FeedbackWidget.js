import React, { Component } from 'react';
import { StyledButton } from './Feedback.style';

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    countTotalFeedback > 0 ? (good / countTotalFeedback) * 100 : 0;

  return (
    <div>
      <p>good = {good}</p>
      <p>neutral = {neutral}</p>
      <p>bad = {bad}</p>
      <p>Total = {countTotalFeedback}</p>
      <p>Good: {Math.round(countPositiveFeedbackPercentage)}%</p>
    </div>
  );
};

const Notification = ({ message }) => <p>{message}</p>;

const Button = ({ value, onUpdate }) => (
  <StyledButton onClick={onUpdate}>Clicks: {value}</StyledButton>
);

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => (
  <div>
    <Button value={good} onUpdate={onLeaveFeedback('good')} />
    <Button value={neutral} onUpdate={onLeaveFeedback('neutral')} />
    <Button value={bad} onUpdate={onLeaveFeedback('bad')} />
  </div>
);

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateA = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateB = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateC = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={good}
            neutral={neutral}
            bad={bad}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>
        {good + neutral + bad > 0 ? (
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} />
          </Section>
        ) : (
          <Section title="Statistics">
            <Notification message="There is no feedback" />
          </Section>
        )}
      </div>
    );
  }

  updateFeedback = type => () => {
    if (type === 'good') {
      this.updateA();
    } else if (type === 'neutral') {
      this.updateB();
    } else if (type === 'bad') {
      this.updateC();
    }
  };
}
