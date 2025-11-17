import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const handleDivClick = (path) => {
        navigate(path);
    };
    
  return (
    <nav className="App">
        <div onClick={() => handleDivClick('/')}>   
            HOME
        </div>
        <div onClick={() => handleDivClick('/about')}>
            ABOUT/CONTACT
        </div>
        <div onClick={() => handleDivClick('/appt')}>
            BOOK APPT
        </div>
        <div onClick={() => handleDivClick('/order')}>
            PLACE ORDER
        </div>
        <div onClick={() => handleDivClick('/map')}>
            MAP
        </div>
    </nav>
  );
}
