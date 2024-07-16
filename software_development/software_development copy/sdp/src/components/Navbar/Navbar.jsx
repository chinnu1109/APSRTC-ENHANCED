import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#ee2b39" }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-7 text-white" to="/">Home</Link>
        <Link className="mr-7 text-white" to="/ticket-status">Ticket Status</Link>
        <Link className="mr-7 text-white" to="/cancel-ticket">Cancel Ticket</Link>
        <Link className="mr-7 text-white" to="/charter">Charter</Link>
        <Link className="mr-7 text-white" to="/parcel">Parcel</Link>
        <Link className="mr-7 text-white" to="/gallery">Gallery</Link>
        <Link className="mr-7 text-white" to="/wallet">Wallet</Link>
        <Link className="mr-7 text-white" to="/timetable">TimeTable/Track</Link>
        <Link className="mr-7 text-white" to="/track-service">Track Service</Link>
        <Link className="mr-7 text-white" to="/logistics">Logistics</Link>
        </div>
      </div>
    </nav>
  );
}
