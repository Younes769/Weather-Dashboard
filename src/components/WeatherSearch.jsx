import React, { useState } from "react";

function WeatherSearch({ onSearch }) {
  
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="search">
      <h2>Weather Dashboard</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Get Weather</button>
    </div>
  );
}
export default WeatherSearch;
