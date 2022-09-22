import React from "react";
import "./ActivityCard.css";

function ActivityCard({ data }) {
  return (
    <div className="activityCard">
      <div
        className="activityCardImg"
        style={{
          backgroundImage: `url(${data.img})`,
          //   width: "240px",
          //   height: "160px",
          backgroundSize: "cover",
        }}
      ></div>

      <div>
        <h3>{data.title}</h3>
      </div>
    </div>
  );
}

export default ActivityCard;
