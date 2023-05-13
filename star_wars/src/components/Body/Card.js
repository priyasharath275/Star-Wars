import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
const Card = () => {
  const [starShipData, setStarShipData] = useState([]);
 
  const getData = async () => {
    let data = await axios("https://swapi.dev/api/starships/?format=json").then(
      (data) => data.data.results
    ); 
   
    setStarShipData(data.filter(val => val.crew <=10));
   let s1 = starShipData.map((val) => val.crew).sort((a,b) =>a-b)
   console.log(s1)
  };
  
  useEffect(() => {
    getData();
   
  },[]);

  return (
    <>
      {starShipData.map((val, index) => (
        <div key={`card_${index}`} className="cards">
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
