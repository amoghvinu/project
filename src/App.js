import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Syllabus from './Component/Syllabus';
import Qp from './Component/Qp';
import {Switch , Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Component/Navbar';
import Scheme2017 from './Component/Scheme2017';




function App() {
  return (
    <div>
      
      <Navbar />
      <switch>
      <Route exact path="/" component={Home} />
      <Route path="/Syllabus" component={Syllabus} />
      <Route path="/Qp" component={Qp} />
      <Route path="/Scheme2017" component={Scheme2017}/>
      </switch>
      
    </div>
  );
}

export default App;
