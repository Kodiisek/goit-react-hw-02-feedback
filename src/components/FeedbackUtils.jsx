// FeedbackUtils.jsx
const countTotalFeedback = ({ good, neutral, bad }) => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  const total = countTotalFeedback({ good, neutral, bad });
  return total === 0 ? 0 : Math.round((good / total) * 100);
};

export { countTotalFeedback, countPositiveFeedbackPercentage };
