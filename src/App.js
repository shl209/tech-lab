import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import StoreInfo from './pages/storeinfo/StoreInfo';
import PlaceOrder from './pages/placeorder/PlaceOrder';
import BookApt from './pages/bookapt/BookApt';
import Map from './pages/map/Map';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    {/* <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello!
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<StoreInfo />} />
      <Route path="/order" element={<PlaceOrder />} />
      <Route path="/appt" element={<BookApt />} />
      <Route path="/map" element={<Map />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
