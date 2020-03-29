import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed';

const buttonStyle = {
  display: "inline-block",
  textDecoration: "none",
  backgroundColor: "#267DDD",
  color: "white",
  cursor: "pointer",
  fontFamily: "Helvetica,Arial,sans-serif",
  fontSize: "20px",
  lineHeight: "50px",
  textAlign: "center",
  margin: 0,
  height: "50px",
  padding: "0px 33px",
  borderRadius: "25px",
  maxWidth: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: "bold",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale"
}

class TypeFormPopup extends Component {
  componentDidMount() {
    const popup = typeformEmbed.makePopup(
      "https://juanathan39angel.typeform.com/to/wTXfpK",
      {
        mode: 'popup',
        onSubmit: function() {
          console.log('Typeform successfully submitted.')
        }
      }
    );
    document.getElementById('bt-popup').addEventListener('click', function() {
      popup.open();
    });
  };

  render() {
    return (
      <div>
        <button id="bt-popup" style={ buttonStyle }>Launch Me</button>
      </div>
    );
  }
}

export default TypeFormPopup;
