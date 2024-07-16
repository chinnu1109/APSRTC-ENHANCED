import React from "react";
import { useLocation } from "react-router-dom";
import delivery from "./pickupdelivery.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./parcel.css"; // Import the CSS file

export default function Parcelsubmit() {
    const location = useLocation();
    const formData = location.state.formData;

    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="heading">Thank You, {formData.customer_name}!</h2>
                <p className="message">Your Pickup is on the way</p>
                <p className="message">Pickup Date: {formData.pickup_date}</p>
                <img className="image" src={delivery} alt="Delivery" />
            </div>
            <Footer />
        </div>
    );
}
