import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.scss';
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
 
function App() {
 return ( 
  <div className="app ">
        <Sidebar />
      <div className="app__content">
            <Switch>
                  <Route path="/">
                        <Home />      
                  </Route>
                  <Route path="/discount" exact>
                        Discount      
                  </Route>            
                        <Route path="/graph" exact>
                        graph  
                  </Route>                 
                   <Route path="/order" exact>
                        Order    
                  </Route>                 
                   <Route path="/notification" exact>
                        Notification      
                  </Route>
                  <Route path="/settings" exact>
                        settings      
                  </Route>
            </Switch>
      </div>
  </div>
 
);
}

export default App;