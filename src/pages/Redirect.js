import React, { Component } from 'react';
import ChatBot from '../components/ChatBot';
import UrgentBlock from '../components/UrgentBlock';
import Resources from '../components/Resources';
import MachineLearning from '../components/MachineLearning';
import Education from '../components/Education';

class Redirect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context
    };
  }

  render() {
    const showChatBot = () => {
      if (this.props.query.score >= 2) {
        return (<ChatBot />)
      }
    };

    const showUrgentBlock = () => {
      if (this.props.query.score >= 2) {
        return (<UrgentBlock />)
      }
    };

    const showResources = () => {
      if (this.props.query.score >= 0) {
        return (<Resources />)
      }
    };

    const showMachineLearning = () => {
      if (this.props.query.score >= 0) {
        return (<MachineLearning />)
      }
    };

    const showEducation = () => {
      if (this.props.query.score >= 0) {
        return (<Education />)
      }
    };

    return (
        <div>
          { this.props.query.name }
          { showChatBot() }
          { showUrgentBlock() }
          { showResources() }
          { showMachineLearning() }
          { showEducation() }
        </div>
    );
  }
}

export default Redirect;
