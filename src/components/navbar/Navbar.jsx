import "./navbar.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/LogoFinal.png"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer" style={{ backgroundColor: 'transparent' }}>
        <Link to="/">
          <img
            src={logo}
            style={{ width: 2636/7.5, height: 1192/7.5 }}
          />
        </Link>
        <div className="navItems">
          <button className="navButton">Signup</button>
          <button className="navButton">Login</button>
          <button className="navButton">List your studio</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar