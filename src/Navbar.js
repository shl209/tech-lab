import "./App.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleDivClick = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <div className="App-header">
        <div className="buttons">
          <div onClick={() => handleDivClick("/")}>Home</div>
          <div onClick={() => handleDivClick("/about")}>Contact</div>
          <div onClick={() => handleDivClick("/appt")}>Book Appointment</div>
          <div onClick={() => handleDivClick("/order")}>Order</div>
          <div onClick={() => handleDivClick("/map")}>Map</div>
        </div>
      </div>
    </nav>
  );
}
