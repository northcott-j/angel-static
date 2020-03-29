import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ChatBot from '../components/ChatBot';
import UrgentBlock from '../components/UrgentBlock';
import WarningBlock from '../components/WarningBlock';
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
      if (this.props.query.score >= 3) {
        return (<UrgentBlock />)
      }
    };

    const showWarningBlock = () => {
      if (this.props.query.score === '2') {
        return (<WarningBlock />)
      }
    };

    const showResources = () => {
      if (this.props.query.score >= 2) {
        return (<Resources context={ this.props.context } search={ this.props.search } />)
      }
    };

    const showMachineLearningHigh = () => {
      if (this.props.query.score <= 1) {
        return (<MachineLearning context={ this.props.context } router={ this.props.router } />)
      }
    };

    const showMachineLearningLow = () => {
      if (this.props.query.score === '3') {
        return (<MachineLearning context={ this.props.context } router={ this.props.router } />)
      }
    };

    const showEducation = () => {
      if (this.props.query.score >= 0) {
        return (<Education />)
      }
    };

    return (
      <Paper style={ { display: "flex", flexDirection: "column", flex: 1, width: "95%", margin: "20px 0",
                       backgroundColor: "rgba(159, 74, 234, 0.39)", paddingTop: "20px" } }>
        { showChatBot() }
        { showUrgentBlock() }
        { showWarningBlock() }
        { showResources() }
        { showMachineLearningHigh() }
        { showEducation() }
        { showMachineLearningLow() }
      </Paper>
    );
  }
}

export default Redirect;
