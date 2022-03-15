 
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeContent from "../../Component/HomeContent/HomeContent";
import HomeTop from "../../Component/HomeTop/HomeTop";
 import OrderList from "../../Component/OrderList/OrderList";
import "./Home.scss";

const Home = () =>{
 
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
                  <option value="Dine In">Dine In</option>
                  <option value="To Go">To Go</option>
                  <option value="Delivery">Delivery</option>
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

       <OrderList />

      
        </div>
      </div>
)
}

export default Home;