import React, { useState, useEffect, Component } from "react";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import Auth from "./components/auth/auth.component";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: "",
    };
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
      if (this.state.currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        console.log(this.state.currentUser);
      } else {
        // No user is signed in.
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
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
