// import logo from "./images/placeholder.png";
import Navbar from "./navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/login/Login";
import Home from "./pages/home/Home.js";
import StoreInfo from "./pages/storeinfo/StoreInfo.js";
import PlaceOrder from "./pages/placeorder/PlaceOrder.js";
// import BookApt from "./pages/bookapt/BookApt";
// import Map from "./pages/map/Map";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storeinfo" element={<StoreInfo />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
