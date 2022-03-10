import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeContent from "../../Component/HomeContent/HomeContent";
import HomeTop from "../../Component/HomeTop/HomeTop";
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
          nima gap
        </div>
      </div>
)
}

export default Home;