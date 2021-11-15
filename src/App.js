import React from 'react';
import './App.css';
import HomePage from './pages/home/homepage.component';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import Auth from './components/auth/auth.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/shop" element={<ShopPage/>} />
          <Route exact path='/auth' element={<Auth/>} />
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
