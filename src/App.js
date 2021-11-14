import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/shop" element={<ShopPage/>} />
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
