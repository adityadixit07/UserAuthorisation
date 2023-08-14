/* eslint-disable react/prop-types */
// import Popups from "./components/popUps.jsx";
import ProfileBox from "../../components/ProfileBox/ProfileBox";
// import CommunityMapping from "../../components/CommunityMapping/CommunityMapping";
import DashboardBar from "../../components/DashboardBar/DashboardBar";
// import ExploreCommunities from "../../components/ExploreCommunities/ExploreCommunities";
// import StartupPost from "../../components/StartupPost/StartupPost";
// import CommentBox from "../../components/CommentBox/CommentBox"
// import PollPost from "../../components/PollPost/PollPost.jsx";
import StartupType from "./components/StartupType.jsx";
// import { FaAndroid } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
// import { Link } from "react-router-dom";
const IndividualDashboard = ({ user, showDashboard }) => {
  return (
    <>
      <div className="w-full flex gap-4 mt-8 lg:px-12 xl:px-16">
        <DashboardBar user={user} isDashboard={showDashboard} />
        <div className="w-full flex flex-col gap-4 px-4 md:px-2">
          <ProfileBox user={user} />
          {/* <div className="px-8 py-4 bg-[#D9D9D9] my-4 rounded-[10px]">
            <Popups />
          </div>
          {/* <CommunityMapping user={user} />
          <ExploreCommunities user={user} />
          <StartupPost user={user} />
          <StartupPost user={user} />
          <StartupPost user={user} />
          <StartupPost user={user} /> */}
          {/* <CommentBox /> */}
          {/* <PollPost user={user} /> */}
          <StartupType user={user} />
        </div>
        <div className="md:hidden w-14 h-14 bg-green-800 rounded-full fixed bottom-16 right-4 flex items-center justify-center text-white">
          <AiOutlineAppstoreAdd size={26} />
        </div>
      </div>
    </>
  );
};

export default IndividualDashboard;
