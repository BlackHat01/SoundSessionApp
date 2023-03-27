import "./navbar.css"
import logo from "../../assets/LogoFinal.png"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer" style={{ backgroundColor: 'transparent' }}>
          <img
            src={logo}
            style={{ width: 2636/7.5, height: 1192/7.5 }}
          />
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