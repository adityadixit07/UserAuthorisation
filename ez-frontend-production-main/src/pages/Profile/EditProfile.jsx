import { React, useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import "./ProfileNew.css";
import { useDispatch, useSelector } from "react-redux";
import { getEzCategories, getEzJobRoles, getEzJobSkills } from "../../actions/ezKaroActions";
import { toast } from "react-hot-toast";
import { updateUserDetails, uploadProfileImage } from "../../actions/userActions";
import ButtonLoading from "../../static/ButtonLoading";
import { submitHook } from "./FirstTimeProfileEdit/submitHook";
import DomainDetails from "./components/Popup/DomainDetails";
// import TitleDetails from "./components/Popup/TitleDetails";
// import DepartmentDetails from "./components/Popup/DepartmentDetails";
import JobRolesDetails from "./components/Popup/JobRolesDetails";
import SkillDetails from "./components/Popup/SkillDetails";

function EditProfile({ user, isProfileUpdating }) {
  const dispatch = useDispatch();
  const { handleUsernameAPI } = submitHook();
  const { fetchedJob, jobRoles, fetchedCategories, categories, fetchedSkills, jobSkills } = useSelector(state => state.ezKaro);
  const { isUploading, isUploaded } = useSelector(state => state.user);

  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [jobRolesData, setJobRolesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [username, setUsername] = useState(user?.username || "");
  const [bio, setBio] = useState(user?.bio || "");
  // const [role, setRole] = useState(user?.profileCategory?.jobRole || "");

  const [domains, setDomains] = useState(user?.profileCategory?.domain || []);
  const [currentDomain, setCurrentDomain] = useState("");

  // const [department, setDepartment] = useState(user?.profileCategory?.department || []);
  // const [currentDepartment, setCurrentDepartment] = useState("");

  const [jobRole, setJobRole] = useState(user?.profileCategory?.jobRoles || []);
  const [currentJobRole, setCurrentJobRole] = useState("");

  const [skills, setSkills] = useState(user?.profileCategory?.skills || []);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (skills.length < 7) {
      return toast.error("You have to add min 7 skills!");
    }

    const userData = {
      firstName,
      lastName,
      bio,
      profileCategory: {
        // jobRole: role,
        domain: domains,
        // department: department,
        jobRoles: jobRole,
        skills,
      },
      about: {
        ...user.about,
        skills
      }
    };

    dispatch(updateUserDetails(userData));
  };

  const handleUsername = (e) => {
    e.preventDefault();
    if (username === user?.username) {
      return toast.success(`"${username}" is already yours :)`);
    }
    handleUsernameAPI(username);
  };

  useEffect(() => {
    dispatch(getEzJobRoles());
    dispatch(getEzCategories());
    dispatch(getEzJobSkills());
  }, []);

  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();

    dispatch(uploadProfileImage({
      userID: user?._id,
      type: "avatar",
      imageFile
    }));
  };

  return (
    <>
      <form className="editProfilePopUp m-0 p-5 w-full md:max-w-[50vw]" onSubmit={handleUpdateProfile}>

        <div className="w-full mt-8 flex items-center justify-center">
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            accept="image/*"
            disabled={isUploading}
            onChange={handleFileChange}
          />

          <span className="flex items-center justify-center border-2 border-green-700 rounded-full p-1 relative ">
            <span className="overflow-hidden rounded-full h-40 w-40 ">
              <label
                htmlFor="image"
                className="text-green-600  text-center flex justify-center items-center h-full "
              >
                {image ? (
                  <img
                    src={image}
                    alt="User"
                    className="bg-cover"
                  />
                ) : (
                  <img
                    src={user?.avatar?.url ? user.avatar.url : "/icon.png"}
                    alt="User"
                  />
                )}
              </label>
            </span>

            <label htmlFor="image">
              <span className="bg-green-700 rounded-full p-2 absolute right-0 bottom-4 cursor-pointer text-white">
                <AiOutlineEdit size={18} />
              </span>
            </label>
          </span>
        </div>
        {imageFile && (
          <button type="button" disabled={isUploading} onClick={handleImageUpload}
            className='flex items-center justify-center my-4 bg-white text-black rounded font-bold w-[100px]'
          >
            {isUploading ? <ButtonLoading /> : <span className="p-2">Upload</span>}
          </button>
        )}

        <div className="w-full lg:w-[60%] mt-6 flex flex-col gap-3 lg:flex-row justify-between">
          <div className="md:w-[45%] flex flex-col">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
            />
          </div>
          <div className="md:w-[45%] flex flex-col">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`lg:mt-0 border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
            />
          </div>
        </div>

        <div className="mt-6 w-full lg:w-[60%]">
          <label>Username</label>
          <div className=" flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black">
            <p className="border-e border-green-800 rounded-s-md p-3 bg-gray-300">ezage.in/</p>
            <input
              type="text"
              placeholder="Create/Modify your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 w-full border-none outline-none"
            />
            <button
              type='button'
              className='border-s border-green-800 rounded-e-md bg-gray-300 w-[70px] h-full flex justify-center'
              onClick={handleUsername}>
              {isProfileUpdating ? <div className="w-[70px] h-full flex items-center justify-center"><ButtonLoading /></div> : <span className="p-3">Change</span>}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[60%] mt-6">
          <label htmlFor="bio">Bio</label>
          <textarea
            type="text"
            placeholder="Describe yourself in your own words"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            id="bio"
            className={`w-full h-32 border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md text-black`}
          ></textarea>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col justify-between">
          {/* <TitleDetails
            role={role}
            setRole={setRole}
            fetchedJob={fetchedJob}
            jobRoles={jobRoles}
          /> */}

          <DomainDetails
            fetchedCategories={fetchedCategories}
            categories={categories}
            domains={domains}
            setDomains={setDomains}
            currentDomain={currentDomain}
            setCurrentDomain={setCurrentDomain}
            setSubCategoriesData={setSubCategoriesData}
            setJobRolesData={setJobRolesData}
            setSkillsData={setSkillsData}
          />

          {/* <DepartmentDetails
            fetchedCategories={fetchedCategories}
            categories={categories}
            currentDepartment={currentDepartment}
            setCurrentDepartment={setCurrentDepartment}
            department={department}
            setDepartment={setDepartment}
            subCategoriesData={subCategoriesData}
          /> */}

          <JobRolesDetails
            currentJobRole={currentJobRole}
            setCurrentJobRole={setCurrentJobRole}
            jobRole={jobRole}
            setJobRole={setJobRole}
            jobRolesData={jobRolesData}
            fetchedJob={fetchedJob}
            jobRoles={jobRoles}
          />

          <SkillDetails
            currentSkill={currentSkill}
            setCurrentSkill={setCurrentSkill}
            skills={skills}
            setSkills={setSkills}
            skillsData={skillsData}
            fetchedSkills={fetchedSkills}
            jobSkills={jobSkills}
          />

          <button disabled={isProfileUpdating} type="submit" className='flex items-center justify-center my-4 bg-white text-black rounded font-bold'>
            {isProfileUpdating ? <ButtonLoading /> : <span className="p-2">Update</span>}
          </button>

        </div>

        <button type="button" onClick={closePopUp} className="editCloseBtn">
          X
        </button>
      </form>
    </>
  )
}

const closePopUp = () => {
  document.getElementById("editProfilePopUpParent").classList.remove("popUpOpened");
}

export default EditProfile