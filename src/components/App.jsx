import {FeedbackOptions}  from './FeedbackOptions/FeedbackBtn'
import {Statistics} from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import React, { Component } from 'react';

export class App extends Component {
	state = {
	  good: 0,
	  neutral: 0,
	  bad: 0,
	};
  
	handleFeedback = e => {
	  if (e === 'Good') {
		this.setState({ good: this.state.good + 1 });
	  } else if (e === 'Neutral') {
		this.setState({ neutral: this.state.neutral + 1 });
	  } else if (e === 'Bad') {
		this.setState({ bad: this.state.bad + 1 });
	  }
	};
  
	countTotalFeedback = () => {
	  let total = this.state.good + this.state.neutral + this.state.bad;
	  return total;
	};
  
	countPositiveFeedbackPercentage = () => {
	  if (this.countTotalFeedback() === 0) {
		return 0;
	  }
	  return Math.round((this.state.good / this.countTotalFeedback()) * 100);
	};
  
	render() {
	  return (
		<div>
		  <Section title="Please leave feedback" />
		  <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.handleFeedback}/>
		
		  <Section title="Statistics" />

		  {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
		</div>
	  );
	}
  }
