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
  const { UserType, SetUserType } = useState();

  const venues = [
    {
      Owner: "Austin",
      City: "Richmond",
      musicType: "Country",
      Ocuupancy: "50-75",
      pictures: [
        "/images/artist.png",
        "/images/artist.png",
        "/images/artist.png",
        "/images/artist.png",
      ],
      id: 0.123,
    },
  ];
  const artists = [
    {
      Name: "Austin",
      Rate: "50 per Hour",
      musicType: "Pop",
      bandSize: "2-4",
      pictures: [
        "/images/artist.png",
        "/images/artist.png",
        "/images/artist.png",
        "/images/artist.png",
      ],
      id: 0.123,
    },
  ];
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
