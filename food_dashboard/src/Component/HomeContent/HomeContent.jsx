import { useParams } from "react-router-dom";
import foods from "../../Assets/Data/Data";
import FoodCard from "../FoodCard/FoodCard";
import "./HomeContent.scss";



const HomeContent = () =>{    
  const  {dishtype} = useParams();
  // console.log(abdulla)
  return(
    <div className="home-content">
      <ul className="home-content__list">
          {foods.filter((food) =>{
            if(dishtype){
              return food.type === dishtype;
            }
            return food.type === "hot-dishes"
          })
          .map((food,i) =>(
            <FoodCard key={i} 
             img={food.img}
             title={food.title} 
             price={food.price} 
             available={food.available} />        
         ))}
         
        </ul>
    </div>
  )
  
}

export default HomeContent;
