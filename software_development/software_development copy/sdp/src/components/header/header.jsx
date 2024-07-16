import React from "react";
import Navbar from "../Navbar/Navbar";
import Headerimage from "../../images/Headerimage.png"

export default function Header(){
    return(
        <div>
            <img src={Headerimage} className="Headerimage" alt="Headerimage" />
            <Navbar />
           
        </div>
    )
}