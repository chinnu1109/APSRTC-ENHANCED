import { useEffect, useSate } from "react"; 
import "./Home.css";


import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner1 from "./banner4.png";
import banner2 from "./banner-bot-2.png"

export default function Home() {
    // const [items, setItems ] = useSate([])
    // useEffect( () => {
    //     const fetchData = async () =>{
    //         const res = await fetch('http://localhost:3000')
    //         const data = await res.json()
    //         setItems(data.items)
    //     }    
    //     fetchData
    // },[])
    return (
        <div>
            <Header />
            <div className="container">
                <img className="image1" src={banner1} />
                <img className="image2" src={banner2} />
            </div>
            <Footer />
           {/* {items.map(i => (
            <p>{i.feedback},{i.rating}</p>
           ))} */}
        </div>
    );
}
