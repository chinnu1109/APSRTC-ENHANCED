import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Header from '../../components/header/header';
import './timetable.css';

// Import the images as strings
import gnt_vij_palle from './images/gnt_vij_palle.png';
import gnt_vij_exp from './images/gnt_vij_exp.png';
import gnt_vij_del from './images/gnt_vij_del.png';
import vij_gnt_palle from './images/vij_gnt_palle.png';
import vij_gnt_exp from './images/vij_gnt_exp.png';
import vij_gnt_del from './images/vij_gnt_del.png';
import Footer from '../../components/footer/footer';

const places = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Mumbai', 'Hyat', 'Hlem','Guntur','Vijayawada'];
const busTypes = ['Pallevelugu', 'Express', 'Deluxe'];


// Define the image paths as strings
const scheduleImages = {
  Guntur_Vijayawada_Pallevelugu: gnt_vij_palle,
  Guntur_Vijayawada_Express: gnt_vij_exp,
  Guntur_Vijayawada_Deluxe: gnt_vij_del,
  Vijayawada_Guntur_Pallevelugu: vij_gnt_palle,
  Vijayawada_Guntur_Express: vij_gnt_exp,
  Vijayawada_Guntur_Deluxe: vij_gnt_del,
};

function BusSearch() {
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');
  const [busType, setBusType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if form is submitted

  // Function to handle form submission
  const handleSubmit = () => {
    setIsSubmitted(true); // Set state to true when button is clicked
  };

  const handleFromChange = (event, { newValue }) => {
    setFromPlace(newValue);
  };

  const handleToChange = (event, { newValue }) => {
    setToPlace(newValue);
  };

  const handleBusTypeChange = (event) => {
    setBusType(event.target.value);
    setIsSubmitted(false); // Reset form submission state when bus type changes
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    return places.filter(place => place.toLowerCase().startsWith(inputValue));
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion}
    </div>
  );

  const onSuggestionsFetchRequested = ({ value }) => {
    // Fetch suggestions based on input value
  };

  const onSuggestionsClearRequested = () => {
    // Clear suggestions
  };

  const inputProps = {
    placeholder: 'Type a place...',
    value: fromPlace,
    onChange: handleFromChange
  };

  const searchKey = `${fromPlace}_${toPlace}_${busType}`;

  return (
    <div >
      <Header />
      <div className='whole-container flex justify-center align-middle items-center m-10'>
        <div className="text-center border border-solid border-black-500 w-1/3 h-200">
        <h1 className="text-2xl font-bold text-center mt-30px">Search for Bus timings here!!!</h1>
          <div className='flex gap-8 justify-center p-4'>
            <label>From</label>
            <Autosuggest
              suggestions={getSuggestions(fromPlace)}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </div>
          <div className="flex gap-8 justify-center p-4">
            <label>To</label>
            <Autosuggest
              suggestions={getSuggestions(toPlace)}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={{ ...inputProps, value: toPlace, onChange: handleToChange }}
            />
          </div>
          <div className="flex gap-8 justify-center p-4">
            <label>Bus Type</label>
            <select value={busType} onChange={handleBusTypeChange}>
              <option value="">Select Bus Type</option>
              {busTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <button className="p-0 m-2" onClick={handleSubmit}>Search Buses</button>
        </div>
      </div>
      <div className="container">
      
     
        {/* Display the schedule image only if the form is submitted */}
        {isSubmitted && fromPlace && toPlace && busType && (
          <div>
           <h2 className='text-2xl font-bold text-center m-10 '>{fromPlace} to {toPlace} by {busType} BUS TIMINGS</h2>
          <img
            src={scheduleImages[searchKey]}
            alt={`${fromPlace} to ${toPlace} schedule`}
          />
          </div>
        )}
      </div>
      <div  className="mt-40"><Footer/></div>
      
    </div>
  );
}

export default BusSearch;
