import { NavLink } from "react-router-dom";
import date from "../../Utils/Functions/date";
import "./HomeTop.scss";

const HomeTop = () =>{
  return (
    <div className="home-top">
      <div className="home-top__header">
        <div className="user">
          <h2 className="user__name">
           Rustambek Mamadaliyev
          </h2>
          <p className="user__date">{date()}</p>
        </div>
        <form className="form">
          <input type="search"
           placeholder="Search for food, coffee, etc ..." 
           className="form__input" />
        </form>
      </div>
      <div>
        <ul className="nested-links">
          <li className="nested-links__item">
            <NavLink
             className="nested-links__link"  
             activeClassName="nested-links__link-active" exact   to="/">Hot Dishes</NavLink>
          </li>
          <li className="nested-links__item">
            <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact  
              to="/cold_dishes">Cold Dishes</NavLink>
          </li>   <li className="nested-links__item">
            <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact  
              to="/soup">Soup</NavLink>
          </li>   <li className="nested-links__item">
            <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact  
              to="/grill">Grill</NavLink>
          </li>   <li className="nested-links__item">
            <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact  
              to="/appetizer">Appetizer</NavLink>
          </li>   <li className="nested-links__item">
            <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact  
              to="/desert">Desert</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeTop;