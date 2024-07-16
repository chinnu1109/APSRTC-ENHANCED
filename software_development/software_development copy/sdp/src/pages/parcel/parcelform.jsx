import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/header";
import "./parcel.css";
import Footer from "../../components/footer/footer";

export default function Parcelpickup() {
    const [formData, setFormData] = useState({
        customer_name: "",
        parcel_type: "",
        from_location: "",
        to_location: "",
        phone_number: "",
        pickup_date: ""
    });
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate("/pickupsubmit", { state: { formData: { ...formData } } });
        try {
            const response = await axios.post('http://localhost:3001/api/parcel', formData);
            console.log(response.data);
            // Redirect to the ThankYou page with form data 
          
        } catch (error) {
            console.log('Error submitting form: ', error);
        }
        console.log("Form submitted"); // Add this line for debugging
    };
    

    return (
        <div>
            <Header />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="customer_name">Customer Name:</label>
                        <input type="text" className="form-control" id="customer_name" name="customer_name" value={formData.customer_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="parcel_type">Parcel Type:</label>
                        <select className="form-control" id="parcel_type" name="parcel_type" value={formData.parcel_type} onChange={handleChange} required>
                            <option value="">Select Parcel Type</option>
                            <option value="Document">Document</option>
                            <option value="Package">Package</option>
                            <option value="Envelope">Envelope</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="from_location">From:</label>
                        <select className="form-control" id="from_location" name="from_location" value={formData.from_location} onChange={handleChange} required>
                            <option value="">Select From Location</option>
                            <option value="Guntur">Guntur</option>
                            <option value="Vijaywada">Vijaywada</option>
                            <option value="Ongole">Ongole</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Anantapur">Anantapur</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="to_location">To:</label>
                        <select className="form-control" id="to_location" name="to_location" value={formData.to_location} onChange={handleChange} required>
                            <option value="">Select To Location</option>
                            <option value="Guntur">Guntur</option>
                            <option value="Vijaywada">Vijaywada</option>
                            <option value="Ongole">Ongole</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Anantapur">Anantapur</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_number">Phone Number:</label>
                        <input type="tel" className="form-control" id="phone_number" name="phone_number" pattern="[0-9]{10}" value={formData.phone_number} onChange={handleChange} required />
                        <small>Format: 1234567890</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pickup_date">Pickup Date:</label>
                        <input type="date" className="form-control" id="pickup_date" name="pickup_date" value={formData.pickup_date} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
