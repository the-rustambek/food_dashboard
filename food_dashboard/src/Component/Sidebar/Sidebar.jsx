
import { Link } from "react-router-dom";
import Discount from "../Lib/Svgs/Discount";
import Home from "../Lib/Svgs/Home";
import Graph from "../Lib/Svgs/Graph";
import Message from "../Lib/Svgs/Message";
import Notification from "../Lib/Svgs/Notification";
import Settings from "../Lib/Svgs/Settings";
import Logout from "../Lib/Svgs/Logout";
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
          <Link to="/" className="sidebar__link 
          sidebar__link-active"  
              onClick={handleAddClass}>
          <span className="sidebar__link-item  ">
          <Home />
          </span>
          </Link>
      </li>
      <li className="sidebar__item">
          <Link to="/discount" className="sidebar__link"  
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Discount />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/dashboard" className="sidebar__link" 
            
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Graph />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/message" className="sidebar__link" 
            
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Message />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/notification" className="sidebar__link" 
            
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Notification />
          </span>
          </Link>

      </li>      <li className="sidebar__item">
          <Link to="/settings" className="sidebar__link" 
            
           onClick={handleAddClass}> 
          <span className="sidebar__link-item">
          <Settings />
          </span>
          </Link>

      </li>
 
    </ul>
    <button className="sidebar__btn">
      <Logout />
      </button>
    </div>
  )
}

export default Sidebar;