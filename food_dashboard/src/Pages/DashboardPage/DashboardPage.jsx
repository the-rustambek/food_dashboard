 import date from "../../Utils/Functions/date";
import "./DashboardPage.scss";
import Dollar from "../../Component/Lib/Svgs/Dollar";
import Dish from "../../Component/Lib/Svgs/Dish";
import Bottom from "../../Component/Lib/Svgs/Bottom";
import Customers from "../../Component/Lib/Svgs/Customer";
import Top from "../../Component/Lib/Svgs/Top";
import OrderReport from "../../Component/OrderReport/OrderReport";
import MostOrder from "../../Component/MostOrder/MostOrder";
import ApexChart from "../../Component/ApexChart/ApexChart";

const DashboardPage = () => {
   return (
     <header className="dashboard-page">

       <div className="dashboard-left">
          <div className="dashboard__top">
       <h2 className="dashboard__top-title">
         Dashboard
       </h2>
       <p className="dashboard__top-date">
         {date()}

       </p>
      </div>
         <section className="dashboard-section">
     <ul className="dashboard__list">
       <li className="dashboard__list-item">
         <span>
         <span className="dashboard-icon">
        <Dollar />
        </span>
        <p className="dashboard-pretsent">-32.40% </p>
        <Top />
         </span>
         <p className="dashboard-price">$10,243.00</p>
         <p className="dashboard-total">Total Revenue</p>
       </li>
 
       <li className="dashboard__list-item">
         <span>
        <span className="dashboard-icon">
         <Dish  />
         </span>
        <p className="dashboard-pretsent">-12.40% </p>
        <Bottom />
         </span>
         <p className="dashboard-price">23,456</p>
         <p className="dashboard-total">Total Dish Ordered</p>
       </li>

       <li className="dashboard__list-item">
         <span>
         <span className="dashboard-icon">
         <Customers />
         </span>
        <p className="dashboard-pretsent">2.40% </p>
        <Top />
         </span>
         <p className="dashboard-price">1,234</p>
         <p className="dashboard-total">Total Customer</p>
       </li>
     </ul>
         </section>
         <OrderReport />
     </div>

     <div className="dashboard-right">
     <MostOrder />
     <ApexChart />
     </div>
     </header>
   )
}

export default DashboardPage;