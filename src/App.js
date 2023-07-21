import React, {useState} from "react";
 import axios from "axios";


function App() {


  //const url ='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=380f54688574b237dee4221ef181b766'
  return (
    <div className="app">

       <div className="container">
         <div className="top">
           
           <div className="location">
             <p>Dallas</p>
           </div>
            <div className="temp">
               <h1 className="bold">67 F</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
         </div>
         <div className="bottom">
           <div className="feels">
             <p>65 C</p>
           </div>
           <div className="humiditty">
              <p className="bold">20%</p>
              <p>humidity</p>
           </div>
           <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind speed</p>
           </div>
         </div>
       </div>
    </div>
  );
}

export default App;
