import React, { useState } from "react";
import FullCountry from "./CountryInfo";

const DisplayCountry = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const countriesToShow = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const buttonClick = (country) => {
    setSearchTerm(country.name);

  };

  if (countriesToShow.length > 10) {
    return (
      <div>
        <label>find countries</label>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        {searchTerm == "" ? "" : "Too many countries"}
      </div>
    );
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <label>find countries</label>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <FullCountry country={countriesToShow[0]}></FullCountry>
      </div>
    );
  } else {
    return (
      <div>
        <label>find countries</label>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        {countriesToShow.map((country) => (
          <div>
            <p key={country.numericCode}>{country.name}</p>
            <button onClick={() => buttonClick(country)}>show</button>
          </div>
        ))}
      </div>
    );
  }
};

export default DisplayCountry;
