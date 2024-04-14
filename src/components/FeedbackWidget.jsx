// FeedbackWidget.jsx
import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification'; // Importujemy komponent Notification
import { countTotalFeedback, countPositiveFeedbackPercentage } from './FeedbackUtils';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback({ good, neutral, bad });
    const positivePercentage = countPositiveFeedbackPercentage({ good, neutral, bad });

    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        {total > 0 ? ( // Renderujemy blok statystyk tylko jeśli mamy przynajmniej jedną odpowiedź
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" /> // Wyświetlamy komunikat o braku odpowiedzi
        )}
      </div>
    );
  }
}

export default FeedbackWidget;
