import React, { useState } from 'react';
import "./charterbus.css";
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';

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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    busType: '',
    fromDate: '',
    toDate: '',
    fromPlace: '',
    toPlace: '',
    description: '',
    distance: null,
    totalTime: null,
    chargeByTime: null,
    chargeByDistance: null,
    finalCharge: null
  });

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fromPlace' || name === 'toPlace') {
      const input = value.toLowerCase();
      const filteredSuggestions = cities.filter(city =>
        city.toLowerCase().startsWith(input)
      );
      name === 'fromPlace' ? setFromSuggestions(filteredSuggestions) : setToSuggestions(filteredSuggestions);
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSuggestionClick = (value, name) => {
    name === 'fromPlace' ? setFromSuggestions([]) : setToSuggestions([]);
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const fromTo = `${formData.fromPlace}-${formData.toPlace}`;
    const dist = distances[fromTo] || distances[`${formData.toPlace}-${formData.fromPlace}`];

    if (!dist) {
      console.error('Distance not found for selected places');
      return;
    }

    const fromDate = new Date(formData.fromDate);
    const toDate = new Date(formData.toDate);
    const timeDifference = toDate.getTime() - fromDate.getTime();
    const totalHours = timeDifference / (1000 * 3600);

    const chargeByTime = totalHours * 20;

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

    const maxCharge = Math.max(chargeByTime, chargeByDistance);

    const gst = 0.03;
    const finalCharge = maxCharge + (maxCharge * gst);
    navigate("/bill", { state: { formData: { ...formData, distance: dist, totalTime: totalHours, chargeByTime, chargeByDistance, finalCharge } } });
  };

  return (
    <div >
      <Header />
      <div className="form-container">
      <h1 className="text-2xl font-bold text-center">Bus Booking Form</h1>
      <form className='form1' onSubmit={handleSubmit}>
        <div>
        <div>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
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
          <input className="frominput"type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
        </div>
        <div>
          <label>To Date:</label>
          <input className="toinput"type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
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
            <ul>
              {fromSuggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion, 'fromPlace')}>
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
            <ul>
              {toSuggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion, 'toPlace')}>
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
      <Footer />
    </div>
  );
};

export default BusForm;
