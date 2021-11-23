import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import ActiveGames from "./pages/active-games";
import CompletedGames from "./pages/completed-games";
import Profile from "./pages/profile";
import Game from "./pages/game";

const App = ({ contract, currentUser, nearConfig, wallet }) => {
	return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} nearConfig={nearConfig} wallet={wallet}/>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} contract={contract} currentUser={currentUser} />} />
        <Route exact path="/active-games" render={(props) => <ActiveGames {...props} contract={contract} currentUser={currentUser} />}/>
        <Route exact path="/completed-games" render={(props) => <CompletedGames {...props} contract={contract} currentUser={currentUser} nearConfig={nearConfig} wallet={wallet} />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/game/:id" component={Game} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
