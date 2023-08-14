import "./ProfileBox.css";
import bio from "../../assets/explore-icons/Blue_folder_with_information_about_employee_3D_illustration-removebg-preview (1) (1) (1).png";
import skills from "../../assets/explore-icons/8990534 2.png";
import education from "../../assets/explore-icons/5143432-removebg-preview_1-removebg-preview (1).png";
import exprience from "../../assets/explore-icons/WhatsApp_Image_2023-07-29_at_13.12.40-removebg-preview (1) (1).png";
import portfolio from "../../assets/explore-icons/20546705_6306484__1_-removebg-preview 1.png";
import ProfileBoxContainer from "./ProfileBoxContainer";

const ProfileBox = ({ setOpenComingSoon, profileRoute }) => {
  return (
    <>
      <div className=" profile-box1 mt-10 pt-4 overflow-auto " style={{width:"95%"}}>
        {/* <div className="profile-header"></div> */}
        <div className="flex items-center justify-between gap-10 ml-2 rounded-[15px]">
          <ProfileBoxContainer
            linkUrl={"/user/profileDetails"}
            dataName={"Update Bio"}
            imageUrl={bio}
          />
          <ProfileBoxContainer
            linkUrl={profileRoute}
            dataName={"Update Education"}
            imageUrl={exprience}
          />
          <ProfileBoxContainer
            linkUrl={profileRoute}
            dataName={"Update Experience"}
            imageUrl={education}
          />
          <ProfileBoxContainer
            linkUrl={profileRoute}
            dataName={"Update Portfolio"}
            imageUrl={portfolio}
          />
          <ProfileBoxContainer
            linkUrl={"/user/profilecategory"}
            dataName={"Update Category"}
            imageUrl={bio}
          />
          <ProfileBoxContainer
            linkUrl={"/user/whyhere"}
            dataName={"Update WhyHere"}
            imageUrl={skills}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
