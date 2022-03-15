import Filter from "../Lib/Svgs/Filter";
import Avatar1 from "../../Assets/Img/Avatar1.svg"
import "./OrderReport.scss"
import { useEffect, useState } from "react";


const OrderReport=()=> {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()).then((data) =>{
      setUsers(data)
    })
  })


return (<section className="report">
  <div className="report-top">
    <h3 className="report-title"> Order Report </h3> 
    <button className="report-btn">
      <Filter />
      <p>Filter Order</p>
    </button>
  </div>
  <div className="report-list">
    <table className="report-table">
      <thead>
        <tr>
          <th scope="col">Customer</th>
          <th scope="col">Menu</th>
          <th scope="col">Total Payment</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      
{users.length > 0  && (
  <tbody>
{users.map((user,i) =>(
          <tr>
          <td> <img src={ Avatar1 } alt="Avatar1" />
            <p>{user.name}</p>
          </td>
          {/* <td> Spicy seasoned <br /> seafood noodles </td> */}
          <td><p>{user.company.catchPhrase}</p></td>
          <td> ${user.id*95} </td>
          <td> <span>Completed</span> </td>
        </tr>
))}

  </tbody>
)}
      
    </table>
  </div>
</section>)
}

export default OrderReport;