import React, { useState } from 'react';
import "./charterbus.css";
import Header from '../../components/header/header';

const cities = ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool'];

const distances = {
    'Visakhapatnam-Vijayawada': 350,
    'Vijayawada-Visakhapatnam': 350,
    'Visakhapatnam-Guntur': 460,
    'Guntur-Visakhapatnam': 460,
    'Visakhapatnam-Nellore': 620,
    'Nellore-Visakhapatnam': 620,
    'Visakhapatnam-Kurnool': 700,
    'Kurnool-Visakhapatnam': 700,
    'Vijayawada-Guntur': 30,
    'Guntur-Vijayawada': 30,
    'Vijayawada-Nellore': 280,
    'Nellore-Vijayawada': 280,
    'Vijayawada-Kurnool': 370,
    'Kurnool-Vijayawada': 370,
    'Guntur-Nellore': 280,
    'Nellore-Guntur': 280,
    'Guntur-Kurnool': 450,
    'Kurnool-Guntur': 450,
    'Nellore-Kurnool': 250,
    'Kurnool-Nellore': 250
  };
  
  const BusForm = () => {
    const [formData, setFormData] = useState({
      busType: '',
      fromDate: '',
      toDate: '',
      fromPlace: '',
      toPlace: '',
      description: '',
      distance: null, // Add distance to the form data state
      totalTime: null, // Add totalTime to the form data state
      chargeByTime: null,
      chargeByDistance: null,
      finalCharge: null
    });
  
    const [suggestions, setSuggestions] = useState([]);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      // Update suggestions based on user input
      if (name === 'fromPlace' || name === 'toPlace') {
        const input = value.toLowerCase();
        const filteredSuggestions = cities.filter(city =>
          city.toLowerCase().startsWith(input)
        );
        setSuggestions(filteredSuggestions);
      }
  
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSuggestionClick = (value) => {
      setSuggestions([]); // Clear suggestions when a suggestion is clicked
      setFormData({
        ...formData,
        fromPlace: value // Set the input value to the clicked suggestion
      });
    };


  const handleSubmit = (e) => {
    e.preventDefault();

    const fromTo = `${formData.fromPlace}-${formData.toPlace}`;
    const dist = distances[fromTo] || distances[`${formData.toPlace}-${formData.fromPlace}`]; // Checking if distance exists in both directions

    if (!dist) {
      console.error('Distance not found for selected places');
      return;
    }

    // Calculate total time in hours
    const fromDate = new Date(formData.fromDate);
    const toDate = new Date(formData.toDate);
    const timeDifference = toDate.getTime() - fromDate.getTime();
    const totalHours = timeDifference / (1000 * 3600); // Convert milliseconds to hours

    // Calculate charge by time
    const chargeByTime = totalHours * 20;

    // Calculate charge based on bus type
    let chargePerKm;
    switch(formData.busType) {
      case 'pallevelugu':
        chargePerKm = 41;
        break;
      case 'express':
        chargePerKm = 52;
        break;
      case 'deluxe':
        chargePerKm = 42;
        break;
      case 'ultradeluxe':
        chargePerKm = 52;
        break;
      default:
        chargePerKm = 0;
    }

    const chargeByDistance = chargePerKm * dist;

    // Find the max value between charge by time and charge by distance
    const maxCharge = Math.max(chargeByTime, chargeByDistance);

    // Calculate final charge including GST
    const gst = 0.03; // GST rate
    const finalCharge = maxCharge + (maxCharge * gst);

    setFormData({
      ...formData,
      distance: dist,
      totalTime: totalHours,
      chargeByTime,
      chargeByDistance,
      finalCharge
    });
  };

  return (
    <div className="whole-container">
      <Header />
      <div className="form-container">
      <h1>Bus Booking Form</h1>
      <form className='form1' onSubmit={handleSubmit}>
        <div >
          <label>Bus Type:</label>
          <select name="busType" value={formData.busType} onChange={handleChange}>
            <option value="">Select Bus Type</option>
            <option value="pallevelugu">Pallevelugu</option>
            <option value="express">Express</option>
            <option value="deluxe">Deluxe</option>
            <option value="ultradeluxe">Ultra Deluxe</option>
          </select>
        </div>
        <div>
          <label>From Date:</label>
          <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
        </div>
        <div>
          <label>To Date:</label>
          <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
        </div>
        <div>
            <label>From Place:</label>
            <input
              type="text"
              name="fromPlace"
              value={formData.fromPlace}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* Suggestions for "from place" */}
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label>To Place:</label>
            <input
              type="text"
              name="toPlace"
              value={formData.toPlace}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* Suggestions for "to place" */}
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      {formData.finalCharge && (
        <div>
          <h3>Charges:</h3>
          <p>Charge by Time: {formData.chargeByTime}</p>
          <p>Charge by Distance: {formData.chargeByDistance}</p>
          <p>Final Charge (including GST): {formData.finalCharge}</p>
        </div>
      )}
    </div>
  );
};

export default BusForm;
