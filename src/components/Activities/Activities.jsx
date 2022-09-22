import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useState } from "react";
import { activitiesData } from "../ArrayData";
import "./Activities.css";
import ActivityCard from "./Activity Card/ActivityCard";

function Activities() {
  const [activitiesArray, setactivitiesArray] = useState(activitiesData);

  return (
    <div className="activities">
      <h2 className="heading">Activities</h2>

      <div className="cardsMap">
        {activitiesArray.map((v, i) => (
          <ActivityCard key={i} data={v} />
        ))}
      </div>
    </div>
  );
}

export default Activities;
