import logo from "./assets/logo.svg"
import plus from "./assets/plus.svg"
import origin from "./assets/origin.svg"
import stop from "./assets/stop.svg"
import destination from "./assets/destination.svg"
import './App.css';

function App() {
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
                <div className="origin"><span>Origin</span><input type="text"></input></div>
                <div className="stop"><span>Stop</span><input type="text"></input><span className="add"><img src={plus} />Add another stop</span></div>
                <div className="destination"><span>Destination</span><input type="text"></input></div>
              </div>
              <button className="button">
                Calculate
              </button>
          </div>
          <div className="distance">
            <div className="display"><h3>Distance</h3><span>1,427 kms</span></div>
            <div className="text">The distance between Mumbai and Delhi via the seleted route is 1,427 kms.</div>
          </div>
        </div>
        <div className="right">dasdasdasdas</div>
        </diV>
      </div>
    </div>
  );
}

export default App;
