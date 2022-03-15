import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/OrderFoods";

import Delete from "../Lib/Svgs/Delete";

import "./OrderList.scss";
import "../Modal/Modal.scss"
import Modal from "../Modal/Modal";

const OrderList = () =>{
const {orderFoods,setOrderFoods} = useContext(Context);
const [paymentModal, setPaymentModal] =  useState(false);
function openPaymentModal(){
  setPaymentModal(!paymentModal)
  } 

return (
<>
  {orderFoods.length > 0 && (
  <>
    <ul className="order-foods-list">
      {orderFoods.map((food)=>(
      <li key={food.id}>
        <div className="order-food">
          <div className="order-food__left">
            <img src={food.img} alt="order food img" />
            <span>
              <h3 className="order-food__left__title">
                {food.title}
              </h3>
              <p className="order-food__left__text">
                {food.available } Bowls available
              </p>
            </span>
          </div>

          <div className="order-food__right">
            <span className="order-food__right-number">
              {food.number}
            </span>
            <span className="order-food__right-price">
              {(food.price * food.number).toFixed(1)}
            </span>
          </div>

        </div>
        <div className="order-food__bottom">
          <input type="text" placeholder="Order note" className="order-food__bottom-input" />
          <button className="order-food__bottom-btn" onClick={()=>{
            setOrderFoods(orderFoods.filter
            (ovqat => ovqat.id !== food.id))
            }}>
            <Delete />
          </button>
        </div>

      </li>
      ))}
    </ul>
    
    <div className="order-footer">
      <span className="order-footer__span">
        <p>Discount</p>
        <b>$0</b>
      </span>
      <span className="order-footer__span">
        <p>Sub Total</p>
        <b>$21,03</b>
      </span>

      <button className="order-footer-btn" 
       onClick={openPaymentModal}> 
        Continue to Payment
      </button>
       
    </div>
  </>
  )}
    {/* <Modal className="modal"
     show={paymentModal} w={600} mh={400}>
    <button className="close-btn" 
    onClick={()=>setPaymentModal()}>
                    &times;
                </button>
       <h3 className="modal-title">
      Nima gap

       </h3>
      
    </Modal> */}
   
</>
)
}
export default OrderList;