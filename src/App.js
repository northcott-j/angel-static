import React from 'react';
import './App.css';
import TypeFormPopup from './components/TypeFormPopup';

function App() {
  return (
    <div className="App">
    <div className="bg-g1 size1 flex-w flex-col-c-sb p-l-15 p-r-15 p-t-55 p-b-35 respon1">
      <span></span>
      <div className="flex-col-c p-t-50 p-b-50">
        <h3 className="l1-txt1 txt-center p-b-10">
          Angel
        </h3>

        <p className="txt-center l1-txt2 p-b-60">
          We're here to help.
        </p>

        <TypeFormPopup />


      </div>

      <span className="s1-txt3 txt-center">
        @ 2020 Recorded Future & Expedition Hacks
      </span>

    </div>
    </div>
  );
}

export default App;
