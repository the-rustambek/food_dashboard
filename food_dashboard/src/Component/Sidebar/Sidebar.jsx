import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../Lib/Svgs/Home";
import Logo from "../Lib/Svgs/Logo";
import "./Sidebar.scss";

const Sidebar = () =>{
  const handleAddClass = (evt) =>{
    const links = document.querySelectorAll(".sidebar__link-active");

    links.forEach((link) =>{
      link.classList.remove("sidebar__link-active")
    });
    evt.currentTarget.classList.add("sidebar__link-active");
  }

  return (
    <div className="sidebar">
    <Link className="logo" to="/">
      <Logo />
      </Link>
    <ul className="sidebar__list">
      <li className="sidebar__item">
          <Link to="/" className="sidebar__link sidebar__link-active" 
           activeClassName="sidebar__link-active"  exact  onClick={handleAddClass}>
          <span className="sidebar__link-item  ">
          <Home />
          </span>
          </Link>
      </li>
      <li className="sidebar__item">
          <Link to="/discount" className="sidebar__link" 
           activeClassName="sidebar__link-active" 
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/graph" className="sidebar__link" 
           activeClassName="sidebar__link-active" 
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/order" className="sidebar__link" 
           activeClassName="sidebar__link-active" 
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/notification" className="sidebar__link" 
           activeClassName="sidebar__link-active" 
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/settings" className="sidebar__link" 
           activeClassName="sidebar__link-active" 
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Home />
          </span>
          </Link>

      </li>
 
    </ul>
    <button className="sidebar__btn">
      <Home />
      </button>
    </div>
  )
}

export default Sidebar;