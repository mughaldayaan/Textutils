import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textform from './components/Textform';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove(
      "bg-light",
      "bg-dark",
      "bg-primary",
      "bg-success",
      "bg-warning",
      "bg-danger"
    );
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    if (cls) {
      document.body.classList.add('bg-' + cls);
      showAlert(`You selected ${cls} mode`, "success");
    }
  };

  const toggleDarkLight = () => {
    if (mode === 'light') {
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
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText=""
        mode={mode}
        toggleMode={toggleMode}
        toggleDarkLight={toggleDarkLight}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route
            path="/"
            element={
              <Textform
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter,Character Counter,Remove extra spaces"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
