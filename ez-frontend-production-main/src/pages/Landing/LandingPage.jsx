import { useEffect } from "react";
import MetaData from "../../components/MetaDeta/MetaDeta.jsx";
import Navbar from "../../components/Navbar/Newnav/NewNav.jsx";
import Footer from "./components/footer";
import InifiniteLoop from "./components/Brands.jsx";
import Solid from "./components/Solid";
import Test from "./components/test.jsx";
import Getstarted from "./components/Getstarted";
import Newfaq from "./components/Newfaq";
import CommunityDescription from "./components/CommunityDescription.jsx";
import SaveHours from "./components/SaveHours.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import Ez_karo from "./components/CoffeeMug.jsx";
import UserSliding from "./components/UserSliding.jsx";
import LapMob from "./components/LapMob.jsx";
import BuildFunnel from "./components/buildFunnel.jsx";
import InputRange from "./components/Calculator.jsx";
import NewTestimonals from "./components/GlassCard.jsx";
import Header from "./Header.jsx";
import  EzOneLink from './components/EzOneLink.jsx'
import Style from "./style.module.css";
// import ProfessionalSlider from "./components/ProfessionalSlider.jsx";
import MarketStrategy from "./components/MarketStrategy.jsx";
import UiDesigners from "./UiDesigners.jsx";
import BeautifulPortFolioLink from "./components/BeautifulPortFolioLink.jsx";
import ThousandOfInspiring from "./components/ThousandOfInspiring.jsx";
// import InspiringData from "./components/InspiringData.jsx";
import { useDispatch } from "react-redux";
import { getUsers } from "../../actions/userActions.js";


const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <MetaData title="eZ - The One App" />
      <div className="w-full sticky md:absolute top-0 h-[10vh] z-50 bg-white md:bg-transparent shadow md:shadow-none">
        <Navbar />
      </div>
      <div
        className={`w-full  flex flex-wrap ${Style.bg_spark} overflow-hidden`}
      >
        <div className="w-full py-1 shadow-md sticky top-0 z-40 bg-white bg-opacity-75 ">
          <Header />
          <div className="bg-white">
            <MarketStrategy />
            <BeautifulPortFolioLink/>
            <UiDesigners/>
            {/* <InspiringData/> */}
            <ThousandOfInspiring/>
            <Ez_karo />
            <UserSliding />
            <LapMob />
            <EzOneLink />
            {/* <ProfessionalSlider /> */}
            <InifiniteLoop />
            <SaveHours />
            <BuildFunnel />
            <CommunityDescription />
            <WhyChoose />
            <InputRange />
            <Test />
            <Newfaq />
            <Solid />
            <NewTestimonals />
            <Getstarted />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
