import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={4} variant="filled" {...props} />;
}

function WarningBlock() {
  return (
    <Alert style={ { margin: "2% 10% 1% 10%", fontSize: "20px", display: "flex", flexDirection: "row", alignItems: "center"} }
           severity="warning">We're sorry to hear that. Please reach out so we can find out more</Alert>
  )
};

export default WarningBlock;
