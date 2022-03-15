import DishImg from "../../Assets/Img/1.png"
import SaltedImg from "../../Assets/Img/18.jpg"
import BeefImg from "../../Assets/Img/24.jpg"
import "./MostOrder.scss";


const MostOrder = () =>{
   return (
     <section className="most-order">
       <div className="most-top">
         <h2 className="most-title">
           Most Ordered
         </h2>
         <select>
           <option value="Today">Today</option>
           <option value="Yesterday">Yesterday</option>
         </select>
       </div>
       <ul className="most-list">
         <li className="most-item">
           <img src={DishImg} alt="" className="most-img" />
          <span>
            <h4>Spicy seasoned seafood noodles</h4>
            <p>200 dishes ordered</p>
          </span>
         </li>
         <li className="most-item">
           <img src={SaltedImg} alt="" className="most-img" />
          <span>
            <h4>Salted pasta with mushroom sauce</h4>
            <p>120 dishes ordered</p>
          </span>
         </li>
         <li className="most-item">
           <img src={BeefImg} alt="" className="most-img" />
          <span>
            <h4>Beef dumpling in hot and sour soup</h4>
            <p>80 dishes ordered</p>
          </span>
         </li>
       </ul>
       <button className="most-btn">
         View All
       </button>
     </section>
   )
}

export default MostOrder;