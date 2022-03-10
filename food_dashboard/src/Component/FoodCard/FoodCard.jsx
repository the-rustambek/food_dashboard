import "./FoodCard.scss";

const FoodCard =({img,title,price,available,onClick}) =>{
  return(
    <li className="food-item" onClick={onClick}>  
      <img src={img} alt="food pic" />
      <h3>{title}</h3> 
      <p>{price}$</p>
      <span>
        {available}
       Bowls available
       </span>
    </li>
  )
}
export default FoodCard;