import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navigation from "./components/Nav/Navigation";
import { StoreProvider } from "./utils/GlobalState";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="d-flex">
          <StoreProvider>
            <Header />
            <Navigation />
            <Switch>
              {<Route exact path="/" component={Home} />}
              {<Route exact path="/account" component={Account} />}
              {<Route exact path="/bookings" component={Bookings} />}
              {<Route exact path="/explore" component={Explore} />}
              {<Route exact path="/Saved" component={Saved} />}
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
