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
import Login from "./pages/Login";
import LoginHost from "./pages/LoginHost";
import ArtistSignup from "./pages/ArtistSignup";
import HostSignup from "./pages/HostSignup";
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
        <StoreProvider>
          <div className="wrapper">
            <Header />
            <main className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/bookings" component={Bookings} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/loginHost" component={LoginHost} />
                <Route exact path="/artistSignup" component={ArtistSignup} />
                <Route exact path="/hostSignup" component={HostSignup} />
              </Switch>
            </main>

            <Navigation />
          </div>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
