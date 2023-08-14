// import Popups from "../components/popUps.jsx";
// import ProfileBox from "../../components/ProfileBox/ProfileBox";
// import CommunityMapping from "../../components/CommunityMapping/CommunityMapping";
// import ExploreCommunities from "../../components/ExploreCommunities/ExploreCommunities";
// import StartupPost from "../../components/StartupPost/StartupPost";
// import CommentBox from "../../components/CommentBox/CommentBox"

import IndioverviewPage from "./commp/IndioverviewPage";
import IndioverviewPage2 from "./commp/IndioverviewPage2";
import Invite from "./commp/Invite";
import PopularEzer from "./commp/PopularEzer";
import DashboardBar from "../../../components/DashboardBar/DashboardBar";
import ProfileBox from "../../../components/ProfileBox/ProfileBox";
import StartupPost from "./IndiCommp/StartupPost/StartupPost";
import PollPost from "./IndiCommp/PollPost/PollPost";


const IndividualDashboard = () => {
  return (
    <>
       <div className="flex md:flex-row flex-col my-2  md:mx-40 ">
        <DashboardBar/>
        <div className="mx-3">
          <IndioverviewPage/>
          <ProfileBox/>
          <IndioverviewPage2/>
          <div className="px-8 py-4 bg-[#D9D9D9] my-4 rounded-[10px]">
          </div>
          <StartupPost/>
          <PollPost/>
          <StartupType />
          <Invite/>
          <PopularEzer/>
        </div>
      </div>
    </>
  );
};

export default IndividualDashboard;
