import MetaData from "../../components/MetaDeta/MetaDeta";
import Overviewpage from "../SellerLandingPage/Overviewpage/Overviewpage";
// import "./seller.css";

function SellerDashboard({ user, isAuthenticated, profileRoute, percentage }) {

  return (
    <>
    <MetaData title="Seller Dashboard | eZ - The One App"/>
      <Overviewpage
        user={user}
        isAuthenticated={isAuthenticated}
        profileRoute={profileRoute}
        percentage={percentage}
      />
    </>
  );
}

export default SellerDashboard;

