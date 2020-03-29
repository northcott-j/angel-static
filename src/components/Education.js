import React from 'react';
import Paper from '@material-ui/core/Paper';

function Education() {
  return (
    <div style={ { width: "100%" } }>
      <Paper style={ { margin: "20px auto", width: "95%", padding: "10px" } }>
        <h3>Educational Stuff</h3>
        <div style={ { maxWidth: "850px", textAlign: "left", margin: "20px auto 0 auto", } }>
          <dl>
            <dt>Definition list</dt>
            <dd>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </dd>
            <dt>Lorem ipsum dolor sit amet</dt>
            <dd>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </dd>
          </dl>
        </div>
      </Paper>
    </div>
  )
};

export default Education;
