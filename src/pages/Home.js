import React from 'react';
import TypeFormPopup from '../components/TypeFormPopup';

function Home() {
  return (
    <div className="flex-w flex-col-c-sb p-l-15 p-r-15 p-t-55 p-b-35 respon1"
         style={ { flex: 1, justifyContent: "center" } }>
      <span></span>
      <div className="flex-col-c p-t-50 p-b-50">
        <h3 className="l1-txt1 txt-center p-b-10">Angel</h3>
        <p className="txt-center l1-txt2 p-b-60">
          We're here to help.
          </p>
          <TypeFormPopup />
      </div>
    </div>
  );
}

export default Home;
