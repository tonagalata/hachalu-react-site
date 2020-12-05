import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Charity from './pages/Chairty'
import OromoArts from './pages/OromoArts'
import Signup from './pages/Signup'
import Footer from "./components/Footer";
import About from "./pages/About";
import GetInvolved from './pages/GetInvolved';
import Fundraising from './pages/Fundraising';
import Peace from './pages/Peace';
import Unity from './pages/Unity'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/oromo-arts" exact component={OromoArts} />
          <Route path="/oromo-unity" exact component={Unity} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/peace" exact component={Peace} />
          <Route path="/fundraising" exact component={Fundraising} />
          <Route path="/charity" exact component={Charity} />
          <Route path="/about-us" exact component={About} />
          <Route path="/get-involved" exact component={GetInvolved} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        {/* <div className="footer"> */}
          <Footer/>
        {/* </div> */}
      </Router>

    </>
  );
}

export default App;