import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaVbar from './components/NaVbar';
import Login from './components/Login';
import Register from './components/Register';
import { Form, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Container from 'react-bootstrap/esm/Container';




function App() {
 

  return (
    <div className="App">

     <h1>List of Todos</h1>
     
<NaVbar />      
   <Routes>
    <Route  path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route exact path="/home" element={<Home/>}/>
   </Routes>
    </div>
  );


  
  

}

export default App;
