import React from "react";
import Header from "../../components/header/header";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./parcel.css";
import doorpickup from "./doorpickup.png";
import pickuptruck from "./pickuptruck.png";
import Footer from "../../components/footer/footer";

export default function Parcel() {
    return (
        <div>
            <Header />
            <div className="background-container">
                {/* Wrap the overlay image inside a Link component */}
                <Link to="/pickupform">
                    <img src={doorpickup} alt="Background" className="background-image" />
                    <img src={pickuptruck} alt="Overlay" className="overlay-image" />
                </Link>
            </div>
            <Footer />
        </div>
    );
}
