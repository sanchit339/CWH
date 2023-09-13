import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = `#042743`;
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />

        <Routes>
          {/* <Route exact path="/about"> */}

          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <Route exact path='/About' element={<About />} />
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />} />

          {/* </Route> */}
        </Routes>
      </Router>


    </>
  );
}

export default App;

//<TextForm showAlert={showAlert} heading = "Enter the Text to Analyze" mode = {mode} />