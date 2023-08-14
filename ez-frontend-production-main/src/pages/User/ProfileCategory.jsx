import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DomainSelect from "./Component/DomainSelect";
import JobRoleSelect from "./Component/JobRoleSelect";
import SkillSelect from "./Component/SkillSelect";
import { useDispatch, useSelector } from "react-redux";
import { getEzCategories, getEzJobRoles, getEzJobSkills } from "../../actions/ezKaroActions";
import { Toaster, toast } from "react-hot-toast";
import { clearProfileUpdate, removeNewUser, updateUserDetails } from "../../actions/userActions";

const ProfileCategory = ({ theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fetchedCategories, categories, fetchedJob, jobRoles, fetchedSkills, jobSkills } = useSelector(state => state.ezKaro);
  const { isLoading, isAuthenticated, user, isNewUser } = useSelector(state => state.user);

  const [jobRolesData, setJobRolesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  const [selectTab, setSelectTab] = useState(0);

  const [domains, setDomains] = useState([]);
  const [currentDomain, setCurrentDomain] = useState("");

  const [jobRole, setJobRole] = useState([]);
  const [currentJobRole, setCurrentJobRole] = useState("");

  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  useEffect(() => {
    if (user?.profileCategory?.domain.length > 0) {
      setDomains(user.profileCategory.domain);
    }
    if (user?.profileCategory?.jobRoles.length > 0) {
      setJobRole(user.profileCategory.jobRoles);
    }
    if (user?.profileCategory?.skills.length > 0) {
      setSkills(user.profileCategory.skills);
    }
  }, [user?.profileCategory?.domain, user?.profileCategory?.jobRoles, user?.profileCategory?.skills]);

  const handleCategorySubmit = (e) => {
    e.preventDefault();

    if (skills.length < 7) {
      return toast.error("You have to add min 7 skills!");
    }

    const userData = {
      profileCategory: {
        domain: domains,
        jobRoles: jobRole,
        skills,
      },
      about: {
        ...isAuthenticated && user && user.about,
        skills
      }
    }

    if (domains.length > 0 || jobRole.length > 0 || skills.length > 0) {
      dispatch(updateUserDetails(userData));
    }

    setTimeout(() => {
      if (isNewUser) {
        navigate("/user/birthday");
      }
      else if (!isNewUser) {
        navigate("/main");
      }
    }, 1000);
  }

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/user/login");
    }
  }, [isLoading, isAuthenticated]);

  useEffect(() => {
    dispatch(clearProfileUpdate());
    dispatch(getEzCategories());
    dispatch(getEzJobRoles());
    dispatch(getEzJobSkills());
  }, [dispatch]);

  return (
    isAuthenticated && (
      <>
        <Toaster toastOptions={{ duration: 5000 }} />
        <div className={`w-full h-full flex flex-col justify-between m-[0%] p-[0%] pt-[5%] ${!theme ? "text-[#252424]" : "text-[#ffffff]"}`}>
          <div>
            <h2 className={`${!theme ? "text-[#252424]" : "text-[#ffffff]"} text-3xl font-bold`}>
              Please help us understand you better:
            </h2>
            <p className={`font-light ${!theme ? "text-[#252424]" : "text-gray-400"}`}>
              This will help us suggest communities and topics aligned to your
              interests.
            </p>
          </div>

          {selectTab === 0 && (
            <DomainSelect
              fetchedCategories={fetchedCategories}
              categories={categories}
              domains={domains}
              setDomains={setDomains}
              currentDomain={currentDomain}
              setCurrentDomain={setCurrentDomain}
              setJobRolesData={setJobRolesData}
              setSkillsData={setSkillsData}
            />
          )}

          {selectTab === 1 && (
            <JobRoleSelect
              jobRole={jobRole}
              setJobRole={setJobRole}
              currentJobRole={currentJobRole}
              setCurrentJobRole={setCurrentJobRole}
              jobRolesData={jobRolesData}
              fetchedJob={fetchedJob}
              jobRoles={jobRoles}
            />
          )}

          {selectTab === 2 && (
            <SkillSelect
              skills={skills}
              setSkills={setSkills}
              currentSkill={currentSkill}
              setCurrentSkill={setCurrentSkill}
              skillsData={skillsData}
              fetchedSkills={fetchedSkills}
              jobSkills={jobSkills}
            />
          )}

          {/* -------------------------- Previous & Next buttons -------------------------- */}
          <div className="w-full flex justify-center gap-4 mt-5">
            <button className={`w-[100px] px-2 py-2 border-2 ${selectTab === 0 ? "border-gray-400 text-gray-400" : "border-green-700"} rounded-md`}
              onClick={() => {
                if (selectTab > 0) return setSelectTab(prev => prev - 1)
              }}
            >
              Prev
            </button>
            {selectTab === 2 ? (
              <button className="w-[100px] px-4 py-2 border-2 border-green-500 text-green-500 rounded-md"
                onClick={handleCategorySubmit}
              >
                Continue
              </button>
            ) : (
              <button className="w-[100px] px-4 py-2 border-2 border-green-700 rounded-md"
                onClick={() => {
                  if (selectTab < 2) setSelectTab(prev => prev + 1)
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default ProfileCategory;
