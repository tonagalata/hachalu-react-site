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
          <Route path="/" exact 
          component={Home}/>
          <Route path="/oromo-arts" component={OromoArts} />
          <Route path="/oromo-unity" component={Unity} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/peace" component={Peace} />
          <Route path="/fundraising" component={Fundraising} />
          <Route path="/charity" component={Charity} />
          <Route path="/about-us" component={About} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>

    </>
  );
}

export default App;