import profile from "../../../../assets/ez-logo/profile.svg";
import addservice from "../../../../assets/ez-logo/addservice.svg";
import link from "../../../../assets/ez-logo/link.svg";
import invitefriend from "../../../../assets/ez-logo/invitefriend.svg";
import "../UpdateDetails.css";

import EditRoutesMain from "./EditRoutesMain";
import { Container } from "@mui/material";

const EditRoutes = ({ profileRoute }) => {
  return (
    <div className="flex justify-evenly items-center pt-9 gap-2 edit-route-main-box"
    >
      <EditRoutesMain
        linkRoute={profileRoute}
        profileName={"Complete Profile"}
        imgSrc={profile}
      />
      <EditRoutesMain
        linkRoute={"/seller/addservice"}
        profileName={"Add a service"}
        imgSrc={addservice}
      />
      <EditRoutesMain
        linkRoute={"/seller/sharelink"}
        profileName={"Share Your Link"}
        imgSrc={link}
      />
      <EditRoutesMain
        linkRoute={"/seller/invitefriends"}
        profileName={"Invite Friends"}
        imgSrc={invitefriend}
      />
    </div>
  );
};

export default EditRoutes;
