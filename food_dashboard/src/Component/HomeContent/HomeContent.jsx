import { useContext } from "react";
import { useParams } from "react-router-dom";
import foods from "../../Assets/Data/Data";
import FoodCard from "../FoodCard/FoodCard";
import "./HomeContent.scss";
import {Context} 
from "../../Context/OrderFoods";



const HomeContent = () =>{    
  const  {dishtype} = useParams();
  const {orderFoods, setOrderFoods} = useContext(Context);
  // console.log(orderFoods)
  return(
    <div className="home-content">
      <ul className="home-content__list">
          {foods
            .filter((food) =>{
                if(dishtype){
                  return food.type === dishtype;
                }
                return food.type === "hot-dishes"
              })
              .map((food) =>(
                <FoodCard 
                key={food.id} 
                img={food.img}
                title={food.title} 
                price={food.price} 
                available={food.available} 
                onClick={(e) => 
                {
                    const foundFood = foods.find(
                      (ovqat) => ovqat.id === food.id
                    );
                    foundFood.number = foundFood.number ? 
                    foundFood.number + 1 : 1;
                    const uniqueArr = [
                      ...new Set([...orderFoods,foundFood])
                    ]
                    // console.log(foundFood)
                    setOrderFoods(uniqueArr)
                    // (window.localStorage.getItem("orderFoods",JSON.stringify(setOrderFoods))) 
                    // console.log(orderFoods)
                }
              } 
                />        
            ))}
            
            </ul>
    </div>
  )
  
}

export default HomeContent;
