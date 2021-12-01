import Weather from "./Weather";
import { useState } from "react";


export default function Searchbar() {
  let [city, setCity] = useState(null);
  let [input, setInput] = useState(null);
  function updateCity(event) {
    event.preventDefault();
    setInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(input);
  }

  if (city) {
    return <Weather city={city} />;
  } else {
    return (
      <div className="Searchbar">
        <h1> Weather app built in React brooooo </h1>
        <form className="mt-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter any city ever"
            onChange={updateCity}
          />
          <input type="Submit"/>
        </form>
      </div>
    );
  }
}
