import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../Lib/Svgs/Home";
import Logo from "../Lib/Svgs/Logo";
import "./Sidebar.scss";

const Sidebar = () =>{
  return (
    <div className="sidebar">
    <Link className="logo" to="/">
      <Logo />
      </Link>
    <ul className="sidebar__list">
      <li className="sidebar__item">
          <NavLink to="/" className="sidebar__link" 
           activeClassName="sidebar__link-active"  exact >
          <span className="sidebar__link-item  ">
          <Home />
          </span>
          </NavLink>
      </li>
      <li className="sidebar__item">
          <NavLink to="/discount" className="sidebar__link" 
           activeClassName="sidebar__link-active" > 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </NavLink>

      </li>      <li className="sidebar__item">
          <NavLink to="/graph" className="sidebar__link" 
           activeClassName="sidebar__link-active" > 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </NavLink>

      </li>      <li className="sidebar__item">
          <NavLink to="/order" className="sidebar__link" 
           activeClassName="sidebar__link-active" > 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </NavLink>

      </li>      <li className="sidebar__item">
          <NavLink to="/notification" className="sidebar__link" 
           activeClassName="sidebar__link-active" > 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </NavLink>

      </li>      <li className="sidebar__item">
          <NavLink to="/settings" className="sidebar__link" 
           activeClassName="sidebar__link-active" > 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </NavLink>

      </li>
 
    </ul>
    <button className="sidebar__btn">
      <Home />
      </button>
    </div>
  )
}

export default Sidebar;