import logo from "./assets/logo.svg"
import plus from "./assets/plus.svg"
import origin from "./assets/origin.svg"
import stop from "./assets/stop.svg"
import destination from "./assets/destination.svg"
import './App.css';
import { useState } from "react";
 import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function App(props) {

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(1427);
  const[stop,setStop]=useState(null);

  const onMapClick = (event, map, coord) => {
    map.panTo(center);
    if (origin) {
      setDestination(coord);
      calculateDistance();
    } else {
      setOrigin(coord);
    }
  };
  const center = { lat: 20.5937, lng: 78.9629 }
  const calculateDistance = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDistance(result.routes[0].legs[0].distance.text);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  return (
    <div className="App">
      <div className='navBar'>
        <img src={logo}/>
      </div>
      <div className="main-container">
        <p>Let's calculate <b>distance</b> from Google maps</p>
        <diV className="content">
        <div className="left">
          <div className="entries">
            <div className="data">
                <div className="origin"><span>Origin</span><input type="text" onChange={(event) => setOrigin(event.target.value)}
                  value={origin}></input></div>
                <div className="stop"><span>Stop</span><input type="text" onChange={(event) => setStop(event.target.value)}
                  value={stop}></input><span className="add"><img src={plus} />Add another stop</span></div>
                <div className="destination"><span>Destination</span><input type="text" onChange={(event) => setDestination(event.target.value)}
                  value={destination}></input></div>
              </div>
              <button className="button " onClick={calculateDistance}>
                Calculate
              </button>
          </div>
          <div className="distance">
              <div className="display"><h3>Distance</h3><span>{distance}</span></div>
            <div className="text">The distance between Mumbai and Delhi via the seleted route is 1,427 kms.</div>
          </div>
        </div>
        <div className="right">
            <Map
              google={props.google}
              onClick={onMapClick}
              zoom={6}
              defaultCenter= {{lat: 40.7767644, lng: -73.9761399}}
              style={{ width: '500px', height: '411px' }}
            >
              {origin && <Marker position={origin} />}
              {destination && <Marker position={destination} />}
            </Map>
        </div>
        </diV>
      </div>
    </div>
  );
}
//

export default GoogleApiWrapper({
  apiKey: process.env.React_APP_GOOGLE_MAPS_API_KEY,
})(App);
