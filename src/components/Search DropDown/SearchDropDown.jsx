import React from "react";
import "./SearchDropDown.css";
import Select from "react-select";

const Property = [
  { value: "Apartment", label: "Apartment" },
  { value: "Plot", label: "Plot" },
  { value: "Hotel", label: "Hotel" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Office", label: "Office" },
  { value: "Villa", label: "Villa" },
];
const BEDROOM = [
  { value: "1 Bedroom", label: "1 Bedroom" },
  { value: "2 Bedroom", label: "2 Bedroom" },
  { value: "3 Bedroom", label: "3 Bedroom" },
  { value: "4 Bedroom", label: "4 Bedroom" },
  { value: "5+ Bedroom", label: "5+ Bedroom" },
];
const PRICERANGE = [
  { value: "Apartment", label: "Apartment" },
  { value: "Plot", label: "Plot" },
  { value: "Hotel", label: "Hotel" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Office", label: "Office" },
  { value: "Villa", label: "Villa" },
];
const COMMUNITY = [
  { value: "Nova Marina", label: "Nova Marina" },
  { value: "Nova Hills Estate", label: "Nova Hills Estate" },
  { value: "Nova Creek Harbour", label: "Nova Creek Harbour" },
  { value: "Arabian Ranches III", label: "Arabian Ranches III" },
  { value: "The Valley", label: "The Valley" },
  { value: "Downtown Nova", label: "Downtown Nova" },
  { value: "Nova South", label: "Nova South" },
  { value: "Nova Beachfront", label: "Nova Beachfront" },
];
function SearchDropDown() {
  return (
    <div className="searchDropDown">
      <div className="searchDropDown__body">
        <div className="searchDropDown__sections">
          <p>Location</p>
          {/* <Select
            defaultValue
            placeholder="Where are you going?"
            options={Property}
          /> */}
          <input
            defaultValue
            placeholder="Where are you going?"
            options={Property}
          />
        </div>
        <div className="searchDropDown__sections">
          <p>From</p>
          {/* <Select options={BEDROOM} placeholder="Choose a date" /> */}
          <input options={BEDROOM} placeholder="Choose a date" />
          {/* <input options={BEDROOM} placeholder="Any" type="date" /> */}
        </div>
        <div className="searchDropDown__sections">
          <p>To</p>
          {/* <Select options={PRICERANGE} placeholder="Choose a date" /> */}
          <input options={PRICERANGE} placeholder="Choose a date" />
        </div>
        <div className="searchDropDown__sections">
          <p>Passenger</p>
          {/* <Select options={COMMUNITY} placeholder="Number of Passengers" /> */}
          <input options={COMMUNITY} placeholder="Number of Passengers" />
        </div>

        <div className="searchDropDown__button">
          <button className="searchDropDown__btn">Search properties</button>
        </div>
      </div>
    </div>
  );
}

export default SearchDropDown;
