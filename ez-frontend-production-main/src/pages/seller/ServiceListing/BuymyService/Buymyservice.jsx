// import React from "react";
import "./buyservice.css";
// import Navbar from "../../../components/Navbar/Navbar";
import ProviderInfo from "./ServiceComp/ProviderInfo";
import Insight from "./ServiceComp/Insight";
import CallBooking from "./ServiceComp/CallBooking";
// import Packages from "./ServiceComp/Packages";
// import UIUX from "./ServiceComp/UIUX";
// import Services from "./ServiceComp/Services";
import ServiceProvider from "./ServiceComp/serviceProvider";
import { useSelector } from "react-redux";
import Footer from "../../../Landing/components/footer";
import UIUXdesign from './UIUXdesign';

function BuyService() {
  const { isAuthenticated, error, user } = useSelector((state) => state.user);
  return (
    <>
      {/* <ServiceProvider /> */}

      {/* <ServiceProvider user={user} /> */}
      <section className="section2 flex flex-col md:flex-row gap-4 mx-3 md:mx-28">
        {/* LEFT SIDE */}
        <div className="hidden md:block w-full md:w-3/12 flex flex-col">
          {/* CARD */}

          {/* <ProviderInfo user={user} /> */}
          {/* Card End */}

          {/* insights start*/}

          {/* <Insight /> */}
          {/* insights End */}
          {/* BOOK CALL */}

          {/* <CallBooking /> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:full">
          {/* <Services /> */}

          {/* <Packages /> */}
          {/* <UIUX /> */}


          <UIUXdesign />

        </div>
      </section>
      <div className="w-full mt-20 bg-gray-100">
        <Footer />
      </div>
    </>
  );
}
export default BuyService;
