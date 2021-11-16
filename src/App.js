import React, { useState, useEffect, Component } from "react";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import Auth from "./components/auth/auth.component";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged, signOut } from "firebase/auth";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        this.setState({ currentUser: user });
      } else {
        // No user is signed in.
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  logUserOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.setState({currentUser: null})
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      });
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} logUserOut={this.logUserOut} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/auth" element={<Auth />} />
          {/* <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
            <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    );
  }
}

export default App;
