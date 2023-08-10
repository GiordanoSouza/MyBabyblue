import React, {Component} from 'react';
import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

class App extends Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element= {<Home/>}/>
              <Route path="/About" element= {<About/>}/>
              <Route path="/Contact" element= {<Contact/>}/>
            </Routes>
        </BrowserRouter>
      </div>
      
      
      
    );
  }
}

export default App;
