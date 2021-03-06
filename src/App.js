import React, { Component, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { default as Header } from "./components/header/header.container";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectIsCollectionLoaded } from "./redux/shop/shop.selector";
import { GlobalStyle } from "./global.styles";
import { Suspense } from "react";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/home/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shoppage.component"));
const Auth = lazy(() => import("./pages/auth/auth.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const CollectionsOverview = lazy(() =>
  import("./components/collections-overview/collections-overview.container")
);
const CollectionPage = lazy(() =>
  import("./pages/collection/collection.container")
);

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    // shopCollectionsArray dispatch collections data to redux
    // const { setCurrentUser, shopCollectionsArray } = this.props;

    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          // User is signed in
          const userDocRef = await createUserProfileDocument(user);

          // assign current user state the value of the resulting snapshop
          onSnapshot(userDocRef, (doc) => {
            setCurrentUser({
              id: doc.id,
              ...doc.data(),
            });
          });
        } else {
          // No user is signed in.
        }
        setCurrentUser(user);
        // createCollectionAndDocuments('collections', shopCollectionsArray.map(({title, items}) => ({title, items})))
      },
      (error) => {},
      (complete) => {
        // technically should never get called since auth state can always be changing indefinitely and may never complete
      }
    );
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  logUserOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.setState({ currentUser: null });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header logUserOut={this.logUserOut} />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />}>
                <Route index element={<CollectionsOverview />} />
                <Route
                  exact
                  path=":collectionId"
                  element={<CollectionPage />}
                />
              </Route>
              <Route exact path="/checkout" element={<CheckoutPage />} />
              <Route
                exact
                path="/auth"
                element={
                  this.props.currentUser ? (
                    <Navigate replace to="/" />
                  ) : (
                    <Auth />
                  )
                }
              />
              {/* <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
            <Route path="*" element={<NotFound/>}/> */}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionsLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
