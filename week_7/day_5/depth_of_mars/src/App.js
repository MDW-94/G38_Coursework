import React from 'react';
import MarsContainer from './container/marsContainer';

import './App.css'

function App() {
  const cameras = [
    {name: "FHAZ1", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=5NolkJIyNUDigo4FTvHkaJByRqzVKu53tNdGv8mW"},
    {name: "FHAZ2", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=5NolkJIyNUDigo4FTvHkaJByRqzVKu53tNdGv8mW"},
    {name: "Mast", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=5NolkJIyNUDigo4FTvHkaJByRqzVKu53tNdGv8mW"}
  ]


  return (
    <div className='app'>
      <MarsContainer cameras={cameras}/>
    </div>
  );
}

export default App;

// NASA API Key: 5NolkJIyNUDigo4FTvHkaJByRqzVKu53tNdGv8mW
// Account Email: matthew.wasylko@gmail.com
// Account ID: 5039435d-44ae-4b19-aa56-b61ca0afe2f2

// const cameras = [
//   {name: "FHAZ1", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY"},
//   {name: "FHAZ2", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"},
//   {name: "Mast", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY"}

