// import Popups from "../components/popUps.jsx";
// import ProfileBox from "../../components/ProfileBox/ProfileBox";
// import CommunityMapping from "../../components/CommunityMapping/CommunityMapping";
// import DashboardBar from "./IndividualDashboard/IndiCommp/DashboardBar/DashboardBar";
// import ExploreCommunities from "../../components/ExploreCommunities/ExploreCommunities";
import StartupPost from "../../components/StartupPost/StartupPost";
// import CommentBox from "../../components/CommentBox/CommentBox"
// import PollPost from "../../components/PollPost/PollPost.jsx";
import StartupType from "./IndividualDashboard/commp/StartupType";
// import Overviewpage from "../../SellerLandingPage/Overviewpage/Overviewpage";
import IndioverviewPage from "./IndividualDashboard/commp/IndioverviewPage";
import IndioverviewPage2 from "./IndividualDashboard/commp/IndioverviewPage2";
import Invite from "./IndividualDashboard/commp/Invite";
import PopularEzer from "./IndividualDashboard/commp/PopularEzer";
// import { useSelector } from "react-redux";
// import InviteCard from "./IndividualDashboard/commp/InviteCard";
// import ProfileBoxUpdate from "./IndividualDashboard/IndiCommp/ProfileBox/ProfileBoxUpdate";
import ProfileBox from "../../components/ProfileBox/ProfileBox";
import MetaData from "../../components/MetaDeta/MetaDeta";
import BecomeSeller from "./IndividualDashboard/commp/BecomeSeller";


const IndividualDashboard = ({ percentage, profileRoute, user, setOpenComingSoon }) => {

  return (
    <>
      <MetaData title="Dashboard | eZ - The One App" />

      <IndioverviewPage user={user} />

      <ProfileBox
        setOpenComingSoon={setOpenComingSoon}
        profileRoute={profileRoute}
      />

      <IndioverviewPage2
        percentage={percentage}
        profileRoute={profileRoute}
      />

      <StartupType
        isSeller={user?.role === "seller"}
      />

      <StartupPost
        user={user}
        setOpenComingSoon={setOpenComingSoon}
      />

      <Invite user={user} />

      <PopularEzer />

      {user?.role === "buyer" && <BecomeSeller />}

      <div className="mb-20 md:mb-8" />
    </>
  );
};

export default IndividualDashboard;