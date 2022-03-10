import foods from "../../Assets/Data/Data";
import FoodCard from "../FoodCard/FoodCard";
import "./HomeContent.scss";



const HomeContent = () =>{
  return(
    <div className="home-content">
      <ul className="home-content__list">
          {foods.map((food,i) =>(
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