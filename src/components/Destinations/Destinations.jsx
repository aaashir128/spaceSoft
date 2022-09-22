import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { destinationsData } from "../ArrayData";
import DestinationCard from "./Destination Card/DestinationCard";
import "./Destinations.css";

function Destinations() {
  const [destinationArray, setDestinationArray] = useState(destinationsData);
  const contentWrapper = useRef(null);

  const scroll = (scrollOffset) => {
    contentWrapper.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="destinations">
      <h2 className="heading">Top destinaitons!</h2>
      <div className="scrollArrows">
        <ChevronLeft onClick={() => scroll(-350)} />
        <ChevronRight onClick={() => scroll(+350)} />
      </div>

      <div className="cardsMap" ref={contentWrapper}>
        {destinationArray.map((v, i) => (
          <DestinationCard key={i} data={v} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
