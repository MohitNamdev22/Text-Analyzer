
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () =>{
    if (mode  === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode Enabled","success");
      document.title = "Text Analyzer - Dark Mode"
      
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled","success");
      document.title = "Text Analyzer - Light Mode"

    }
  }

  return (
   < >

  {/*<Navbar title="Text Editor" aboutText="About Us"/>*/}
  {/*<Navbar/> */}
  <Navbar title='TextAnalyzer' mode={mode} toggleMode = {toggleMode} />
  <Alert alert = {alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter text to analyze"  mode={mode}/>
  

  </div>
   </>

  );
}

export default App;
