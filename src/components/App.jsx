import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const options = { good, bad, neutral };

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(prevSt => prevSt + 1);
        break;
      case 'bad':
        setBad(prevSt => prevSt + 1);
        break;
      case 'neutral':
        setNeutral(prevSt => prevSt + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = good + bad + neutral;
  const countPositiveFeedbackPercentage = Math.round(
    (good * 100) / countTotalFeedback || 0
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    </div>
  );
}
