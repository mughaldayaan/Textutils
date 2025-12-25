import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textform from './components/Textform';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light", "bg-dark", "bg-primary", "bg-success", "bg-warning", "bg-danger");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    if(cls) document.body.classList.add('bg-' + cls);

    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes> */}
          {<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} 
        </div>
      {/* </Router> } */}
    </>
  );
}

export default App;
