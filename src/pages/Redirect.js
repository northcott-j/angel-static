import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
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
        return (<Resources context={ this.props.context } search={ this.props.search } />)
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
      <Paper style={ { display: "flex", flexDirection: "column", flex: 1, width: "95%", margin: "20px 0",
                       backgroundColor: "rgba(159, 74, 234, 0.39)"} }>
        { showChatBot() }
        { showUrgentBlock() }
        { showResources() }
        { showMachineLearning() }
        { showEducation() }
      </Paper>
    );
  }
}

export default Redirect;
