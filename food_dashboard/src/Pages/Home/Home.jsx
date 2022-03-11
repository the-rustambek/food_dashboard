import { useContext } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeContent from "../../Component/HomeContent/HomeContent";
import HomeTop from "../../Component/HomeTop/HomeTop";
import { Context } from "../../Context/OrderFoods";
import "./Home.scss";

const Home = () =>{
  const {orderFoods,setOrderFoods} = 
  useContext(Context);
return (
      <div className="home">
        <div className="home-left">
            <div>
                <HomeTop />
              </div>
           <div className="home__middle">
               <h2 className="home__middle-title">
                  Choose Dishes</h2>
              <select className="home__middle-select">
                  <option value="dine in">dine in</option>
                  <option value="dine out">dine out</option>
                </select>
              </div>

                <Switch>
                
              <Route path="/:dishtype">
                  <HomeContent />
              </Route>
              <Route path="/" exact>
                  <HomeContent />
              </Route>
                </Switch>
        </div>
        <div className="home__right">
            <h2 className="home__right-title">
              Order #34562
            </h2>
            <div className="home__right-box">
              <button className="home__right-btn">
                Dine In
              </button>
              <button className="home__right-btn">
                To Go
              </button><button className="home__right-btn">
                Delivery
              </button>
            </div>
            <div className="home__right__header">
              <p className="home__right__header-text">
                Item
              </p>
              <span>
                <p className="home__right__header-subtext">
                  Qty
                </p>
                <p className="home__right__header-subtext">
                  Price
                </p>
              </span>
            </div>

          {orderFoods.length > 0 && (
            <ul>
             {orderFoods.map((food)=>(
                <li key={food.id}>
                <span>
{food.title}
                </span>
                <code>
                  {food.number}
                </code>
                <button onClick={() =>{
                  setOrderFoods(orderFoods.filter(ovqat => ovqat.id !== food.id))
                }}>&times;</button>
                <em>{food.price * food.number}</em>
              </li>
             ))}
            </ul>
          )}
        </div>
      </div>
)
}

export default Home;