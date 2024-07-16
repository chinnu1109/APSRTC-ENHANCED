import logo from './logo.svg';
import Home from './pages/home/Home';
import Timetable from "./pages/timetable/timetable";
import Parcel from "./pages/parcel/parcel";
import Charter from './pages/charter/charter';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import CancelTicket from './pages/cancel-ticket';
import Gallery from './pages/gallery';
import TicketStatus from './pages/ticket-status/ticket-status';
import Logistics from './pages/logistics';
import Wallet from './pages/wallet';
import Trackservice from './pages/track-service';
import Pickupform from "./pages/parcel/parcelform"
import Charterbus from "./pages/charter/charterbus";
import BillDisplay from './pages/charter/billdisplay';
import Footer from './components/footer/footer';
import Feedback from "./pages/feedback/feedback";
import Pickupsubmit from "./pages/parcel/parcelsubmit";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path ="/"  element={ <Home /> } />
        <Route path ="/timetable"  element={ <Timetable /> } />
        <Route path ="/parcel"  element={ <Parcel /> } />
        <Route path ="/charter"  element={ <Charter /> } />
        <Route path ="/cancel-ticket"  element={ <CancelTicket /> } />
        <Route path ="/gallery"  element={ <Gallery /> } />
        <Route path ="/logistics"  element={ <Logistics />} />
        <Route path ="/ticket-status"  element={ <TicketStatus /> } />
        <Route path ="/gallery"  element={ <Gallery /> } />
        <Route path ="/wallet"  element={ <Wallet /> } />
        <Route path ="/track-service"  element={ <Trackservice /> } />
        <Route path ="/pickupform"  element={ <Pickupform /> } />
        <Route path ="/charterbus"  element={ <Charterbus /> } />
        <Route path ="/bill"  element={ <BillDisplay /> } />
        <Route path ="/footer"  element={ <Footer /> } />
        <Route path ="/feedback"  element={ <Feedback /> } />
        <Route path ="/pickupsubmit"  element={ <Pickupsubmit /> } />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
