import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

// assets import
import SchoolLogo from "../../../Assets/profile-img/school-logo.webp";

const EducationDetails = () => {
  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <FaGraduationCap />
        </div>
        <h1>EDUCATION</h1>
      </div>
      <div className="bio-second-header flex items-center mt-4">
        <div className="bio-second-header-icon ml-6">
          <FaSchool />
        </div>
        <div className="introduction p-1 px-2 ml-5">High School</div>
      </div>
      <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
        <div className="lg:w-2/12 w-3/12">
          <div className="school-logo">
            <img src={SchoolLogo} alt="School Logo" />
          </div>
        </div>
        <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
          <div className="school-name w-full lg:w-8/12">
            <div className="college-name">ABC Public School</div>
            <div className="university-name">ABC Public School</div>
          </div>
          <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
            <div className="qualification flex">
              <div className="course bg-white px-1 text-blue-600	">
                High School
              </div>
              <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                2016
              </div>
            </div>
            <div className="mt-2 hidden lg:flex">
              <div className="bio-second-header-icon bio-second-header-icon-inside">
                <MdSchool />
              </div>
              <div className="introduction introduction-inside px-2 ml-2">
                School
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
        <div className="lg:w-2/12 w-3/12">
          <div className="school-logo">
            <img src={SchoolLogo} alt="School Logo" />
          </div>
        </div>
        <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
          <div className="school-name w-full lg:w-8/12">
            <div className="college-name">ABC Public School</div>
            <div className="university-name">ABC Public School</div>
          </div>
          <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
            <div className="qualification flex">
              <div className="course bg-white px-1 text-blue-600	">
                Intermediate
              </div>
              <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                2018
              </div>
            </div>
            <div className="mt-2 hidden lg:flex">
              <div className="bio-second-header-icon bio-second-header-icon-inside">
                <MdSchool />
              </div>
              <div className="introduction introduction-inside px-2 ml-2">
                School
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* University Information */}
      <div className="bio-second-header flex items-center mt-4">
        <div className="bio-second-header-icon ml-6">
          <MdSchool />
        </div>
        <div className="introduction p-1 px-2 ml-5">University</div>
      </div>
      <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
        <div className="lg:w-2/12 w-3/12">
          <div className="school-logo">
            <img src={SchoolLogo} alt="School Logo" />
          </div>
        </div>
        <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
          <div className="school-name w-full lg:w-8/12">
            <div className="college-name">ABC Institute of Technology</div>
            <div className="university-name">ABC University</div>
          </div>
          <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
            <div className="qualification flex">
              <div className="course bg-white px-1 text-blue-600	">BCA</div>
              <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                2021
              </div>
            </div>
            <div className="mt-2 hidden lg:flex">
              <div className="bio-second-header-icon bio-second-header-icon-inside">
                <MdSchool />
              </div>
              <div className="introduction introduction-inside px-2 ml-2">
                College
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
        <div className="lg:w-2/12 w-3/12">
          <div className="school-logo">
            <img src={SchoolLogo} alt="School Logo" />
          </div>
        </div>
        <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
          <div className="school-name w-full lg:w-8/12">
            <div className="college-name">ABC Institute of Technology</div>
            <div className="university-name">ABC University</div>
          </div>
          <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
            <div className="qualification flex">
              <div className="course bg-white px-1 text-blue-600	">MCA</div>
              <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                2023
              </div>
            </div>
            <div className="mt-2 hidden lg:flex">
              <div className="bio-second-header-icon bio-second-header-icon-inside">
                <MdSchool />
              </div>
              <div className="introduction introduction-inside px-2 ml-2">
                College
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
