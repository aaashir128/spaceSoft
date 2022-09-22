import React from "react";
import "./DestinationCard.css";

function DestinationCard({ data }) {
  return (
    <div className="destinationCard">
      <div
        className="projectCardImg"
        style={{
          backgroundImage: `url(${data.img})`,
          width: "240px",
          height: "160px",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="detailsDiv">
        <h3>{data.title}</h3>

        <p className="avgPriceTag">
          Average Price <h5>${data.price}</h5>
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;
