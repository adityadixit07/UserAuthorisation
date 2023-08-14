import "./Overviewpage.css";
import UpdateDetails from "./UpdateDetails";
import Welcome from "./Components/Welcome";
import EditRoutes from "./Components/EditRoutes";
import Analytics from "./Components/Analytics";
import Revenue from "./Components/Revenue";
import GrowFollowers from "./Components/GrowFollowers";
import RecentOrders from "./Components/RecentOrders";
// import Footer from '../../Landing/components/footer';


const Overviewpage = ({ user, isAuthenticated, profileRoute, percentage }) => {
  const profileViews = user?.profileViews ? user.profileViews : 0;
  const uniqueViews = user?.uniqueViews ? user.uniqueViews : 0;

  return (
    <>
      <div className="overflow-x-hidden mb-[10vh] " style={{width:"90%"}}>

        <Welcome
          name={user?.firstName}
        />

        <EditRoutes
          profileRoute={profileRoute}
        />

        <UpdateDetails
          percentage={percentage}
          profileRoute={profileRoute}
        />

        <Analytics
          profileViews={profileViews}
          uniqueViews={uniqueViews}
        />

        <Revenue />

        <GrowFollowers />

        <RecentOrders />

      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Overviewpage;
