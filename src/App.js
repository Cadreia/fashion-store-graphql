import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import HatsPage from './components/hats.component';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/shop/hats" element={<HatsPage/>} />
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
