import React from 'react';
import GameList from '../game-list/CarsList';



export default function CarsRecord() {

  
  return (
    
    <div> 
             <GameList/> 
        {/*  <img className="game-img" src={car.photo} />
          <h1>{car.marka}  {car.model}</h1>
          <span className="levels">Регистрационен номер:{car.regno}</span>
          <p className="type">Въведена на:{car.datetime}{formatDate(car._createdOn)}</p> */}
    </div>
  );
}