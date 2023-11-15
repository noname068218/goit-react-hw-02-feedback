import React, { Component } from 'react';
import { FeedbackWraper, BtnWraper } from './Feedback.style';
import { Section } from './Title';
import { FeedbackOptions } from './Button';
import { Statistics } from './Statistic';

const Notification = ({ message }) => <p>{message}</p>;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <FeedbackWraper>
          <Section title="Please leave feedback">
            <BtnWraper>
              <FeedbackOptions
                onLeaveFeedback={this.onLeaveFeedback}
                options={this.state}
              />
            </BtnWraper>
          </Section>
          {this.countTotalFeedback() > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positive={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackWraper>
      </div>
    );
  }
}
