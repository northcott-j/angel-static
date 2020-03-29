import React from 'react';
import Paper from '@material-ui/core/Paper';

function Education() {
  return (
    <div style={ { width: "100%" } }>
      <Paper style={ { margin: "20px auto", width: "95%", padding: "10px" } }>
        <h3>Educational Stuff</h3>
        <div style={ { maxWidth: "850px", textAlign: "left", margin: "20px auto 0 auto", } }>
          <dl>
            <dt>The Back Story</dt>
            <dd>
              “It can happen to anyone,” and “it’s happening in your backyard,” are common in the anti-human trafficking field. But it’s more complicated than that.
            </dd>
            <dt>Fairy Tales and Tall Tales</dt>
            <dd>
              Stories become weapons in the hands of human traffickers – be they romantic fantasies or tall tales about jobs that sound too good to be true.
            </dd>
            <dt>How the Story Goes</dt>
            <dd>
              Keeping victims isolated – sometimes physically, sometimes emotionally – is a key method of control in most labor trafficking situations.
            </dd>
            <dt>Life Stories</dt>
            <dd>
              Anyone selling sex who is under 18 is legally a trafficking victim. There are a number of racial myths and stereotypes associated with sex trafficking.
            </dd>
            <h5>People you know might be vulnerable to trafficking if they:</h5>
            <ul>
              <li>Have an unstable living situation</li>
              <li>Have a history of domestic violence</li>
              <li>Has a caregiver or family member who has a substance abuse issue</li>
              <li>Are runaways or involved in the juvenile justice or foster care system</li>
              <li>Are undocumented immigrants</li>
              <li>Are facing poverty or economic need</li>
              <li>Have a history of sexual abuse</li>
              <li>Are addicted to drugs or alcohol</li>
            </ul>
          </dl>
        </div>
      </Paper>
    </div>
  )
};

export default Education;
