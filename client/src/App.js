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
import ArtistProfile from "./pages/ArtistProfile";
import HostProfile from "./pages/HostProfile";
import Bookings from "./pages/Bookings";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import LoginHost from "./pages/LoginHost";
import ArtistSignup from "./pages/ArtistSignup";
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
                <Route exact path="/artist" component={ArtistProfile} />
                <Route exact path="/host" component={HostProfile} />
                <Route exact path="/bookings" component={Bookings} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/loginHost" component={LoginHost} />
                <Route exact path="/artistSignup" component={ArtistSignup} />
                <Route exact path="/Saved" component={Saved} />
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
