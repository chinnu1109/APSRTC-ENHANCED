import React from "react";
import { useLocation } from 'react-router-dom';
import "./charter.css";
import Header from "../../components/header/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import Footer from "../../components/footer/footer";




const BillDisplay = () => {
  const location = useLocation();
  const formData = location.state.formData;

  return (
    <div>
        <Header />
        <div className="bill-container">
          <h1>Receipt</h1>
          
          <div className="bill-table">
            <div className="bill-details">
             <p><strong> Customer Name</strong></p>
              <p><strong>From Place:</strong></p>
              <p><strong>To Place:</strong></p>
              <p><strong>Bus Type:</strong></p>
              <p><strong>From Date:</strong></p>
              <p><strong>To Date:</strong></p>
              <p><strong>Total Time:</strong></p>
              <p><strong>Distance:</strong></p>
              <p><strong>Charge by Time:</strong></p>
              <p><strong>Charge by Distance:</strong></p>
              <p><strong>Final Charge (including GST):</strong></p>
            </div>
            
            <div className="bill-info">
            <p>{formData.name}</p>
            <p>{formData.fromPlace}</p>
            <p>{formData.toPlace}</p>
            <p>{formData.busType}</p>
            <p>{formData.fromDate}</p>
            <p>{formData.toDate}</p>
            <p>{formData.totalTime} hours</p>
            <p>{formData.distance} km</p>
            <p><FontAwesomeIcon icon={faIndianRupeeSign} />{formData.chargeByTime}</p>
            <p><FontAwesomeIcon icon={faIndianRupeeSign} />{formData.chargeByDistance}</p>
            <p><FontAwesomeIcon icon={faIndianRupeeSign} />{formData.finalCharge}</p>
            </div>
          </div>
          <div className="payment-gateway">
            <h2>Payment Gateway</h2>
            <button className="payment-button">Pay Now</button>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default BillDisplay;
