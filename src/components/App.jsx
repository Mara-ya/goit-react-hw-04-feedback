import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviews = {good, neutral, bad}

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood (good => good + 1)
        break;
      
      case 'neutral':
        setNeutral(neutral => neutral + 1)
        break;

      case 'bad':
        setBad (bad => bad + 1)
        break;
    
      default:
        throw new Error('Not supported type');
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  const keys = Object.keys(reviews);

  return (
    <div>
    <Section title="Please leave feedback">
      <FeedbackOptions options={keys} onLeaveFeedback={handleClick}/>
    </Section>
    <Section title="Statistics">
    {total ? 
    <Statistics 
    good={good} 
    neutral={neutral} 
    bad={bad}
    total={total} 
    positivePercentage={positivePercentage}/> :<Notification message="There is no feedback"/>}
    </Section>
    </div>
  );
}