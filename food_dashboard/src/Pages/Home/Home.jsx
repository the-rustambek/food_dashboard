import { useContext } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeContent from "../../Component/HomeContent/HomeContent";
import HomeTop from "../../Component/HomeTop/HomeTop";
import { Context } from "../../Context/OrderFoods";
import "./Home.scss";

const Home = () =>{
  const {orderFoods,SetOrderFoods} = 
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
              <Route path="/">
                  <HomeContent />
              </Route>
                </Switch>
        </div>
        <div className="home__right">
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
                <button>&times;</button>
              </li>
             ))}
            </ul>
          )}
        </div>
      </div>
)
}

export default Home;