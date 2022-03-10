import "./FoodCard.scss";

const FoodCard =({img,title,price,available}) =>{
  return(
    <li className="food-item">
      <img className=""
       src={img} 
       alt="food pic" width="200" height="200" />
      <h3>{title}</h3>    
      <p>{price}</p>
      <span>{available}</span>
    </li>
  )
}
export default FoodCard;