import React from "react";
import "./TripBook.css";

const tripBookData = {
  img: "https://images.hdqwalls.com/wallpapers/forest-mountains-3v.jpg",
  title: "August Special Central America Trip",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed quia impedit enim nam quasi molestiae. Dicta eveniet pariatur libero temporibus officiis magnam excepturi, dolor harum iusto ullam, cupiditate placeat.",
};

console.log("tripBookData", tripBookData);

function TripBook() {
  return (
    <div className="tripBook">
      <div
        className="tripBookImg"
        style={{
          backgroundImage: `url(${tripBookData.img})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <h1 className="tripBook__title">{tripBookData.title}</h1>
        <p className="tripBook__description">{tripBookData.description}</p>
        <button>Book a Trip</button>
      </div>
    </div>
  );
}

export default TripBook;
