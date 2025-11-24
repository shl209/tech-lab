import "./Home.css";
import logo from "../../images/placeholder.png";

export default function Home() {
  return (
    <div className="App">
      <div className="home">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="logo-text">Raccoon Room</p>
        </div>
        <div className="buttons">
          <div>
            <a href="/">
              <img src={logo} className="item" alt="g-spot" />
            </a>
            <p> The General Store</p>
          </div>
          <div>
            <a href="/">
              <img src={logo} className="item" alt="Food Pantry" />
            </a>
            <p> Triton Food Pantry</p>
          </div>
          <div>
            <a href="/">
              <img src={logo} className="item" alt="Kitchen" />
            </a>
            <p> The General Store</p>
          </div>
        </div>
      </div>
    </div>
  );
}
