import "./navbar.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/LogoFinal.png"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { PopupButton } from '@typeform/embed-react'

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer" style={{ backgroundColor: 'transparent' }}>
        <Link to="/">
          <img
            src={logo}
            style={{ width: 2636/7.5, height: 1192/7.5 }}
            onClick={handleSearch}
          />
        </Link>
        <div className="navItems">
          <button className="navButton" onClick={() => loginWithRedirect()}>Signup</button>
          <button className="navButton" onClick={() => loginWithRedirect()}>Login</button>
          <PopupButton id="mEzCFLh8" style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
          <button className="navButton">List your studio</button>
          </PopupButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
