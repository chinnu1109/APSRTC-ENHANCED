import React from "react";
import Hirecharges from "../../images/hirecharges.png";
import "./charter.css";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

export default function charter(){
    return(
        <div>
            <Header />
            <div className="charter">
                <div className="container">
                    <h1  style={{ fontSize: "24px", fontWeight: "bold" ,marginBottom:"4px"}}>How to Charter a Bus of A.P.S.R.T.C.</h1>
                    <div>SL.NO. TYPE OF SERVICE SPECIAL HIRE TARIFF/KM1 PALLEVELUGU 41.00 2 EXPRESS 52.003 DELUXE 46.004 ULTRA DELUXE 52.005 S.LUXURY 49.006 INDRA 71.007 GARUDA 93.008 GARUDA PLUS 99.009 AMARAVATHI 118.0010 METRO LUX A/C 93.0011 METRO DELUXE 49.0012 METRO EXPRESS 48.0013 CITY ORD 45.0014 CITY ORD (MINI-36) 36.00
                    Corporation will supply buses to the private parties on special hire basis for the purpose of pilgrimage, marriages, leisure travel, meetings, excursions etc.
                    The parties who desire to hire a bus may place printed requisition with the Depot Manager with details like from, to places, timings, date etc. On receipt of requisition, the Depot Manager will calculate the estimated amount for the distance as per the trips indicated plus a deposit of 15% extra on estimated hire charges and collect the same from the hirer in advance. After completion of special hire contract, the balance amount refundable will be paid to the hirer within three days.
                    These charter services will be made available on:
                    </div>
                </div>
                <div className="container">
                    <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>CASUAL CONTRACT BASIS :</h3>
                    <div>Various types of buses i.e., Super Luxury, Deluxe, Express, Palle Velugu and City will be made available to the public on hire basis. Hire charges will be calculated on hire basis or distance basis whichever is higher. The hours will be converted into KMs for calculation of special hire amount. The hourly chargable KMs irrespective of day and night and peak and slack seasons the uniform KMs of 20 per hour. The minimum chargeable distance is 330 KMs duruing all seasons. The amount will be collected in advance.
                    INTER - STATE CASUAL CONTRACT :
                    The buses will be made available to the passengers on casual contract basis covering Inter-State routes also. The fare & terms and conditions are same as above. But the permit fee and cess if any etc., levied by other states shall have to be borne by the contracting parties, besides regular hire charges.
                    </div>
                </div>
                <div className="container">
                    <h3>: SPECIAL HIRE CHARGES</h3>
                    <img className="hirechargesimage" src={Hirecharges} alt="hire" />
                </div>
                <Link to="/charterbus"><button type="submit">Click here to book a bus</button></Link>
            </div>
            <Footer />
        </div>
    );
} 