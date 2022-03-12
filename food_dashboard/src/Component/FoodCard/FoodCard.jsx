
import "./FoodCard.scss";

const FoodCard =({img,title,price,available
  ,onClick}) =>{
  return(
    <li className="food-item" 
    onClick={onClick}>  
      <img src={img} alt="food pic" />
      <h3>{title}</h3> 
      <p>{price}$</p>
      
      <span>
       <b> {available  }</b>
       <span className="food-span">Bowls available</span>
       </span>
    </li>
  )
}
export default FoodCard;