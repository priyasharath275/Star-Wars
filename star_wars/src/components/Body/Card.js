import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
const Card = () => {
  const [starShipData, setStarShipData] = useState([]);
 
  const getData = async () => {
    let data = await axios("https://swapi.dev/api/starships/?format=json").then(
      (data) => data.data.results
    );
    setStarShipData(data);

  };
  useEffect(() => {
    getData();
  });
  return (
    <>
      {starShipData.filter((val) => (
  
        <div className="cards">
          <div className="cards_cnt">
            <h2>{val.name}</h2>
            <div className="cards_row">
              <div class="cards_column">
                <h3>Model</h3>
                <p>{val.model}</p>
              </div>
              <div class="cards_column">
                <h3>Number of films</h3>
                <p>{val.films.length}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;