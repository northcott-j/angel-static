import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function UrgentBlock() {
  return (
    <Alert style={ { margin: "2% 10% 1% 10%", fontSize: "20px", display: "flex", flexDirection: "row", alignItems: "center"} } 
           severity="error">Situation is urgent! Seek help immediately.</Alert>
  )
};

export default UrgentBlock;
