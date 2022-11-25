
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg:message,
          type: type
        })
        setTimeout(() => {
          setAlert(null); 
        }, 3000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
}
  const toggleMode = (cls) => {
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
    }
}

    // const toggleMode = ()=>{
    //   if(mode === 'light'){
    //     setMode('dark');
    //     document.body.style.backgroundColor = 'grey';
    //     showAlert("Dark mode has been enable", "success")

    //   }
    //   else{
    //     setMode('light');
    //     document.body.style.backgroundColor = 'white';
    //     showAlert("Light mode is enabled", "success");
    //   }
    // };

  return (
   <>
      
      <Router>
      <Navbar title="techySquad" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      
      
        <Routes>
          <Route path="/" element={<Textform heading = "Techysquad - Word counter Character counter" />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
      </Router>
   </>
  );
}

export default App;
