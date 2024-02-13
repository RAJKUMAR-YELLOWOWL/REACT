import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update'
import Delete from './Components/Delete'
import FlexView from './Components/FlexView';
import GridView from './Components/GridView';

const App = () =>{
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Create/>}></Route> 
          <Route path="/read" element={<Read/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/delete" element={<Delete/>} />
          <Route path="/GridView" element={<GridView/>} />
          <Route path="/FlexView" element={<FlexView/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;