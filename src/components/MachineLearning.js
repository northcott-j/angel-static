import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';

class MachineLearning extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context,
      value: ""
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  async formSubmit() {
    const data = await this.state.appState.runAnalysis(this.state.value);
    console.log(data);
  }

  render() {
    return (
      <Paper style={ { display: "flex", flexDirection: "column", width: "85%",
                     alignItems: "center", margin: "0 auto", padding: "10px 0 15px 0" } }>
        <form style={ { width: "95%" } } noValidate autoComplete="off">
          <TextField
            id="standard-multiline-flexible"
            label="How are you feeling today?"
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
  };
};

export default MachineLearning;
