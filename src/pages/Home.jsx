import React from "react";
import Activities from "../components/Activities/Activities";
import Destinations from "../components/Destinations/Destinations";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import SearchDropDown from "../components/Search DropDown/SearchDropDown";
import TripBook from "../components/Trip Book/TripBook";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__img">
        <img
          className="homeImg"
          src="https://two.travel/wp-content/uploads/2021/11/Tulum-Blog-Background-1536x1151.jpg"
          alt=""
        />
        <SearchDropDown />
      </div>

      <div className="home__projects">
        <Projects />
      </div>

      <div className="home__tripBook">
        <TripBook />
      </div>

      <div className="home__destinations">
        <Destinations />
      </div>
      <div className="home__activities">
        <Activities />
      </div>
      {/* <div className="home__activities">
        <Footer />
      </div> */}

      
    </div>
  );
}

export default Home;
