import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import { NotificationManager } from 'react-notifications';

const sentimentFloor = -0.25;

class MachineLearning extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context,
      value: "",
      submitted: false
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  async formSubmit() {
    const data = await this.state.appState.runAnalysis(this.state.value);
    if (data.length === 0) {
      return;
    }
    const score = data[0];
    const magnitude = data[1];
    if ((score * magnitude) <= sentimentFloor) {
      const query = this.state.appState.parseQuery(this.props.router.location);
      query.score = 2;
      const newQuery = this.state.appState.makeQuery(query);
      const pathname = this.props.router.location.pathname;
      this.props.router.history.push({
        pathname: pathname,
        search: newQuery
      });
    } else {
      NotificationManager.success('Please reach out if you have any questions!', 'Thanks you!', 3000);
      this.setState({ submitted: true })
    }
  }

  render() {
      if (!this.state.submitted) {
          return (<Paper style={ { display: "flex", flexDirection: "column", width: "55%", minWidth: "335px",
                     alignItems: "center", margin: "0 auto", padding: "10px 0 15px 0" } }>
        <h3>Hey! If you have a moment, could you answer one more question?</h3>
        <form style={ { width: "95%" } } noValidate autoComplete="off">
          <TextField
            id="standard-multiline-flexible"
            label="How'd you find Angel and was it what you expected?"
            multiline
            rowsMax="20"
            rows="10"
            style={ { width: "100%" } }
            value={ this.state.value }
            onChange={ this.handleChange.bind(this) }/>
        </form>
        <Fab aria-label="like" style={ { marginTop: "20px" } }
             onClick={ this.formSubmit.bind(this) }>
          <FavoriteIcon />
        </Fab>
      </Paper>
    )
  }
  else {
    return <div></div>
  }
  };
};

export default MachineLearning;
