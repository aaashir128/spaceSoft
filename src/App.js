// import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch as Switching,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import { useStateValue } from "./config/StateProvider";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        <Header />
        <Switching>
          <Route path="/">
            <Home />
          </Route>
        </Switching>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
