import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-boost";
import { ApolloClient } from "apollo-boost";
import { typeDefs, resolvers } from "./graphql/resolvers";
import {
  GET_CART_HIDDEN,
  GET_CART_ITEMS,
  GET_CART_ITEM_COUNT,
} from "./graphql/queries";

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeQuery({
  query: GET_CART_HIDDEN,
  data: {
    cartHidden: true,
  },
});
client.writeQuery({
  query: GET_CART_ITEMS,
  data: {
    cartItems: [],
  },
});

client.writeQuery({
  query: GET_CART_ITEM_COUNT,
  data: {
    cartItemsCount: 0,
  },
});

// client.query({
//   query: gql`
//     {
//       getCollectionsByTitle(title: "hats") {
//         id
//         title
//         items {
//           id
//           name
//           price
//         }
//       }
//     }
//   `,
// }).then(res => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
