import { FaCircleNotch } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getEzCompanies, getEzJobRoles, getEzJobSkills } from "../../../../actions/ezKaroActions";
import { submitHook } from "../../../Profile/FirstTimeProfileEdit/submitHook";
import { Country, State, City } from 'country-state-city';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ButtonLoading from "../../../../static/ButtonLoading";
import SchoolLogo from "../../../../assets/profile-img/school-logo.webp";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const ExperienceDetails = ({ experiences }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, profile, isProfileUpdating } = useSelector(state => state.user);

  const { fetchedCompanies, companies, fetchedJob, jobRoles, fetchedSkills, jobSkills } = useSelector(state => state.ezKaro);
  useEffect(() => {
    if (isAuthenticated && user?._id === profile?._id) {
      dispatch(getEzCompanies());
      dispatch(getEzJobRoles());
      dispatch(getEzJobSkills());
    }
  }, [isAuthenticated, user?._id, profile?._id]);

  const [inputList, setInputList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  function addInputField() {
    if (isAuthenticated && user?._id === profile?._id) {
      setInputList([...inputList, { id: idCounter }]);
      setIdCounter(idCounter + 1);
    }
  };
  function removeInputField(id) {
    if (isAuthenticated && user?._id === profile?._id) {
      setInputList(inputList.filter(input => input.id !== id));
    }
  };

  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <IoBriefcase size={22} />
        </div>
        <h1>EXPERIENCE</h1>
      </div>

      {experiences.length === 0 && (
        <>
          {user?._id !== profile?._id && (
            <div className="w-full bg-[#d9d9d91a] rounded-[10px] text-white mt-8 py-3 px-4">
              <p className='text-justify px-2 py-2'>
                No experience added yet!
              </p>
            </div>
          )}
          {isAuthenticated && user?._id === profile?._id && (
            <FirstTimeInput
              isProfileUpdating={isProfileUpdating}
              fetchedCompanies={fetchedCompanies}
              companies={companies}
              fetchedJob={fetchedJob}
              jobRoles={jobRoles}
              fetchedSkills={fetchedSkills}
              jobSkills={jobSkills}
            />
          )}
        </>
      )}

      <div className="w-full mt-4">
        {experiences.length > 0 && (
          experiences.map((item, i) => (
            <ExperienceComponent
              key={i}
              item={item}
              isAuthenticated={isAuthenticated}
              userId={user?._id}
              profileId={profile?._id}
              isProfileUpdating={isProfileUpdating}
            />
          ))
        )}
      </div>

      <div className="flex flex-col gap-3">
        {inputList.map((input, i) => (
          <ExperienceInput
            key={input.id}
            id={input.id}
            isProfileUpdating={isProfileUpdating}
            length={inputList.length}
            removeInputField={removeInputField}
            fetchedCompanies={fetchedCompanies}
            companies={companies}
            fetchedJob={fetchedJob}
            jobRoles={jobRoles}
            fetchedSkills={fetchedSkills}
            jobSkills={jobSkills}
          />
        ))}
      </div>

      {isAuthenticated && user?._id === profile?._id && (
        <button type='button' className='text-blue-300 flex items-center gap-3 my-3' onClick={addInputField}>
          <CiCirclePlus size={20} />
          Add Experience
        </button>
      )}
    </>
  );
};

const FirstTimeInput = ({ isProfileUpdating, fetchedCompanies, companies, fetchedJob, jobRoles, fetchedSkills, jobSkills }) => {
  const { handleExperienceAPI } = submitHook();

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [website, setWebsite] = useState("");
  const [startDate, setStartDate] = useState("");
  const [working, setWorking] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [workType, setWorkType] = useState("");
  const [remote, setRemote] = useState(false);
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const addSkill = () => {
    if (skills.length >= 5) {
      return toast.error("You can add upto 5 skills max!");
    }
    if (skills.length < 5 && currentSkill && !skills.includes(currentSkill)) {
      setSkills(prevSkills => [...prevSkills, currentSkill]);
      setCurrentSkill("");
    }
  };
  const removeSkill = (removeIndex) => {
    setSkills(prevSkills => prevSkills.filter((skill, index) => index !== removeIndex));
  };
  const [role, setRole] = useState("");
  const [aboutRole, setAboutRole] = useState("");
  function htmlToPlainText(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  function handleEditorChange(htmlContent) {
    const plainText = htmlToPlainText(htmlContent);
    setAboutRole(plainText);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();

    handleExperienceAPI(
      jobTitle,
      companyName,
      companyLogo,
      website,
      startDate,
      working,
      endDate,
      workType,
      remote,
      countryName,
      stateName,
      cityName,
      skills,
      role,
      aboutRole
    );
  };

  return (
    <form className='border border-gray-200 text-white px-4 py-2 rounded mt-6 w-full' onSubmit={handleExperienceSubmit}>
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Job title<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder='Mention your Job Title'
          value={jobTitle}
          onChange={e => setJobTitle(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Company name<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          placeholder="Mention your Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Company website</label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder='Mention your Company Website'
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Start Date<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="date" placeholder=''
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
      </div>
      <hr />
      <div className="mt-6 mb-6">
        <div>
          <input type="checkbox" className='me-4'
            value={working}
            checked={working}
            onChange={() => {
              setWorking(prev => !prev)
              if (!working) {
                setEndDate("");
              }
            }}
          />
          <span>I currently work here</span>
        </div>
        {!working && (
          <div className='flex justify-between items-center pt-2'>
            <label className='w-[45%]' htmlFor="">End Date<span className='text-green-600'> *</span></label>
            <input
              className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
              type="date" placeholder=''
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </div>
        )}
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Work type</label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder="Mention your Work Type"
          value={workType}
          onChange={e => setWorkType(e.target.value)}
        />
      </div>
      <hr />
      <div className="mt-6 mb-6">
        <div>
          <input type="checkbox" className='me-4'
            value={remote}
            checked={remote}
            onChange={() => {
              setRemote(prev => !prev);
              if (!remote) {
                setStates([]);
                setCities([]);
                setCountryName("");
                setStateName("");
                setCityName("");
              }
            }}
          />
          <span>Remote</span>
        </div>
        {!remote && (
          <div className='flex flex-col md:flex-row md:gap-4 justify-between items-center'>
            <label className='w-full lg:w-[45%]' htmlFor="">Location</label>
            <div className='w-full lg:w-[50%] flex flex-row gap-2 justify-between me-0'>
              <select
                className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                onChange={e => {
                  let countryData = JSON.parse(e.target.value);
                  setStates(State.getStatesOfCountry(countryData.isoCode));
                  setCountryName(countryData.name);
                }}
              >
                {countryName && <option selected disabled>{countryName}</option>}
                {countries.map((country, i) => (
                  <option value={JSON.stringify(country)} key={i}>{country.name}</option>
                ))}
              </select>
              {countryName && (
                <select
                  className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                  onChange={e => {
                    let stateData = JSON.parse(e.target.value);
                    setCities(City.getCitiesOfState(stateData.countryCode, stateData.isoCode));
                    setStateName(stateData.name);
                  }}
                >
                  {stateName && <option selected disabled>{stateName}</option>}
                  {states.map((state, i) => (
                    <option value={JSON.stringify(state)} key={i}>{state.name}</option>
                  ))}
                </select>
              )}
              {/* {countryName && stateName && (
                <select
                  className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                  onChange={e => {
                    let cityData = JSON.parse(e.target.value);
                    setCityName(cityData.name);
                  }}
                >
                  {cityName && <option selected disabled>{cityName}</option>}
                  {cities.map((city, i) => (
                    <option value={JSON.stringify(city)} key={i}>{city.name}</option>
                  ))}
                </select>
              )} */}
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="flex flex-col my-6">
        <div className='flex flex-col gap-y-2 lg:flex-row justify-between items-start px-0'>
          <label className='w-full lg:w-full' htmlFor="">Skills, roles, tools, etc. <br />
            <span className='text-[12px] text-gray'>Mentions the skills you utilized and acquired, and the tools you used.</span>
          </label>
          <div className='w-full lg:w-[50%] flex flex-col items-end justify-start gap-y-3'>
            <input
              list="skills"
              className={`w-full border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
              type="text"
              placeholder='Select Skills...'
              value={currentSkill}
              onChange={(event) => setCurrentSkill(event.target.value)}
            />
            <datalist id="skills">
              {fetchedSkills && jobSkills.map((skill, i) => (
                <option key={i} value={skill}>{skill}</option>
              ))}
            </datalist>
            <button
              type='button'
              className='text-white bg-black rounded px-4 py-1'
              onClick={addSkill}>
              Add
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-2 pt-2">
          {skills.map((skill, i) => (
            <div key={i} className="p-2 rounded border border-gray-300">
              {skill}
              <span className="ml-2 text-red-400 cursor-pointer" onClick={() => removeSkill(i)}>x</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-y-2 lg:flex-row justify-between items-center my-6 px-0'>
        <label className='w-full lg:w-[45%]' htmlFor="">Your primary role</label>
        <input list="roles"
          className={`w-full lg:w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
          type="text" placeholder='Select Role...'
          value={role}
          onChange={e => setRole(e.target.value)}
        />
        <datalist id="roles">
          {fetchedJob && jobRoles.map((job, i) => (
            <option key={i} value={job}>{job}</option>
          ))}
        </datalist>
      </div>
      {/* <hr />
      <div className='py-2.5 px-0 flex flex-col justify-between gap-2 '>
        <label className='w-[45%]' htmlFor="">About your role</label>
        <ReactQuill
          value={aboutRole}
          onChange={handleEditorChange}
          theme="snow"
          modules={modules} className="md:w-[70%] w-full customeditor"
        />
      </div> */}

      <div className="w-full flex items-center justify-end">
        <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
          {isProfileUpdating ? <ButtonLoading /> : "Save"}
        </button>
      </div>
    </form>
  )
};

const ExperienceComponent = ({ item, isAuthenticated, userId, profileId, isProfileUpdating }) => {
  const [editOpen, setEditOpen] = useState(false);

  function formatDate(dateStr) {
    let date = new Date(dateStr);
    let formattedDate = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    return formattedDate;
  }

  function calculateDateDifference(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0 || (months === 0 && end.getDate() < start.getDate())) {
      years--;
      months += 12;
    }
    let result = '';
    if (years > 0) {
      result += years + (years > 1 ? ' years ' : ' year ');
    }
    if (months > 0) {
      result += months + (months > 1 ? ' months' : ' month');
    }

    return result;
  };

  return (
    <div className="w-full block mt-8">
      <div className="school-box-wrapper flex items-center p-2 px-3 flex-wrap">
        <div className="lg:w-2/12 sm:w-3/12 w-full">
          <div className="school-logo company-logo">
            <img src={item?.company?.logo ? item?.company?.logo : SchoolLogo} className="bg-white object-contain" alt="School Logo" />
          </div>
        </div>
        <div className="lg:w-10/12 sm:w-9/12 w-full px-2 lg:px-0">
          <div className="w-full flex lg:justify-between flex-wrap text-white">
            <span className="w-full lg:w-max">
              {item?.jobTitle}{" "}
            </span>
            <span className="w-full lg:w-max hidden md:block">
              {item?.isWorking ? "Working" : (
                calculateDateDifference(item?.startDate, item?.endDate)
              )}
            </span>
          </div>
          <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
            <span className="flex items-center w-full lg:w-max">
              <FaCircleNotch /> &nbsp; {item?.company?.name}
            </span>
            <span className="flex items-center exp-duration-box w-full lg:w-max">
              <span className="mr-2">{item?.workType}</span>
              <BiTimeFive />
              <span className="bg-white exp-duration-txt ml-1 p-1 px-2 text-xs rounded-md">
                {item?.isWorking ? (
                  `${formatDate(item?.startDate)} - Present`
                ) : `${formatDate(item?.startDate)} - ${formatDate(item?.endDate)}`}
              </span>
            </span>
          </div>
          <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
            <span className="flex items-center w-full lg:w-max">
              {item?.isRemote
                ? <><MdLocationPin /> &nbsp; Remote</>
                : <><MdLocationPin /> &nbsp; {item?.location?.state && `${item?.location?.state},`} {item?.location?.country}</>
              }
            </span>
            {item?.skills?.length > 0 && (
              <span className="gap-1 flex w-full lg:w-max overflow-x-auto">
                {item.skills.map((skill, i) => (
                  <span className="bg-green-600 p-1 px-2 rounded-md text-xs" key={i}>
                    {skill}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
      {isAuthenticated && userId === profileId && (
        <>
          <div className='w-full flex justify-end my-1'>
            <button className="w-[80px] flex justify-center bg-green-500 text-white py-1 px-3 rounded-[10px]" onClick={() => setEditOpen(prev => !prev)}>
              Edit
            </button>
          </div>
          {editOpen && (
            <EditData
              item={item}
              isProfileUpdating={isProfileUpdating}
            />
          )}
        </>
      )}

    </div>
  )
};

const EditData = ({ item, isProfileUpdating }) => {
  const { handleExperienceAPI, handleRemoveExperienceAPI } = submitHook();
  const { fetchedCompanies, companies, fetchedJob, jobRoles, fetchedSkills, jobSkills } = useSelector(state => state.ezKaro);

  const [jobTitle, setJobTitle] = useState(item?.jobTitle || "");
  const [companyName, setCompanyName] = useState(item?.company?.name || "");
  const [companyLogo, setCompanyLogo] = useState(item?.company?.logo || "");
  const [website, setWebsite] = useState(item?.company?.website || "");
  const [startDate, setStartDate] = useState(item?.startDate || "");
  const [working, setWorking] = useState(item?.isWorking || false);
  const [endDate, setEndDate] = useState(item?.endDate || "");
  const [workType, setWorkType] = useState(item?.workType || "");
  const [remote, setRemote] = useState(item?.isRemote || false);
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryName, setCountryName] = useState(item?.location?.country || "");
  const [stateName, setStateName] = useState(item?.location?.state || "");
  const [cityName, setCityName] = useState(item?.location?.city || "");
  const [skills, setSkills] = useState(item?.skills || []);
  const [currentSkill, setCurrentSkill] = useState("");
  const addSkill = () => {
    if (skills.length >= 5) {
      return toast.error("You can add upto 5 skills max!");
    }
    if (skills.length < 5 && currentSkill && !skills.includes(currentSkill)) {
      setSkills(prevSkills => [...prevSkills, currentSkill]);
      setCurrentSkill("");
    }
  };
  const removeSkill = (removeIndex) => {
    setSkills(prevSkills => prevSkills.filter((skill, index) => index !== removeIndex));
  };
  const [role, setRole] = useState(item?.primary_role || "");
  const [aboutRole, setAboutRole] = useState(item?.description || "");
  function htmlToPlainText(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  function handleEditorChange(htmlContent) {
    const plainText = htmlToPlainText(htmlContent);
    setAboutRole(plainText);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();

    handleExperienceAPI(
      jobTitle,
      companyName,
      companyLogo,
      website,
      startDate,
      working,
      endDate,
      workType,
      remote,
      countryName,
      stateName,
      cityName,
      skills,
      role,
      aboutRole,
      item
    );
  };

  return (
    <form className='border border-gray-200 text-white px-4 py-2 rounded w-full' onSubmit={handleExperienceSubmit}>
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Job title<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder='Mention your Job Title'
          value={jobTitle}
          onChange={e => setJobTitle(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Company name<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          placeholder="Mention your Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Company website</label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder='Mention your Company Website'
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Start Date<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="date" placeholder=''
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
      </div>
      <hr />
      <div className="mt-6 mb-6">
        <div>
          <input type="checkbox" className='me-4'
            value={working}
            checked={working}
            onChange={() => {
              setWorking(prev => !prev)
              if (!working) {
                setEndDate("");
              }
            }}
          />
          <span>I currently work here</span>
        </div>
        {!working && (
          <div className='flex justify-between items-center pt-2'>
            <label className='w-[45%]' htmlFor="">End Date<span className='text-green-600'> *</span></label>
            <input
              className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
              type="date" placeholder=''
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </div>
        )}
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Work type</label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder="Mention your Work Type"
          value={workType}
          onChange={e => setWorkType(e.target.value)}
        />
      </div>
      <hr />
      <div className="mt-6 mb-6">
        <div>
          <input type="checkbox" className='me-4'
            value={remote}
            checked={remote}
            onChange={() => {
              setRemote(prev => !prev);
              if (!remote) {
                setStates([]);
                setCities([]);
                setCountryName("");
                setStateName("");
                setCityName("");
              }
            }}
          />
          <span>Remote</span>
        </div>
        {!remote && (
          <div className='flex flex-col md:flex-row md:gap-4 justify-between items-center'>
            <label className='w-full lg:w-[45%]' htmlFor="">Location</label>
            <div className='w-full lg:w-[50%] flex flex-row gap-2 justify-between me-0'>
              <select
                className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                onChange={e => {
                  let countryData = JSON.parse(e.target.value);
                  setStates(State.getStatesOfCountry(countryData.isoCode));
                  setCountryName(countryData.name);
                }}
              >
                {countryName && <option selected disabled>{countryName}</option>}
                {countries.map((country, i) => (
                  <option value={JSON.stringify(country)} key={i}>{country.name}</option>
                ))}
              </select>
              {countryName && (
                <select
                  className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                  onChange={e => {
                    let stateData = JSON.parse(e.target.value);
                    setCities(City.getCitiesOfState(stateData.countryCode, stateData.isoCode));
                    setStateName(stateData.name);
                  }}
                >
                  {stateName && <option selected disabled>{stateName}</option>}
                  {states.map((state, i) => (
                    <option value={JSON.stringify(state)} key={i}>{state.name}</option>
                  ))}
                </select>
              )}
              {/* {countryName && stateName && (
                <select
                  className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                  onChange={e => {
                    let cityData = JSON.parse(e.target.value);
                    setCityName(cityData.name);
                  }}
                >
                  {cityName && <option selected disabled>{cityName}</option>}
                  {cities.map((city, i) => (
                    <option value={JSON.stringify(city)} key={i}>{city.name}</option>
                  ))}
                </select>
              )} */}
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="flex flex-col my-6">
        <div className='flex flex-col gap-y-2 lg:flex-row justify-between items-start px-0'>
          <label className='w-full lg:w-full' htmlFor="">Skills, roles, tools, etc. <br />
            <span className='text-[12px] text-gray'>Mentions the skills you utilized and acquired, and the tools you used.</span>
          </label>
          <div className='w-full lg:w-[50%] flex flex-col items-end justify-start gap-y-3'>
            <input
              list="skills"
              className={`w-full border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
              type="text"
              placeholder='Select Skills...'
              value={currentSkill}
              onChange={(event) => setCurrentSkill(event.target.value)}
            />
            <datalist id="skills">
              {fetchedSkills && jobSkills.map((skill, i) => (
                <option key={i} value={skill}>{skill}</option>
              ))}
            </datalist>
            <button
              type='button'
              className='text-white bg-black rounded px-4 py-1'
              onClick={addSkill}>
              Add
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-2 pt-2">
          {skills.map((skill, i) => (
            <div key={i} className="p-2 rounded border border-gray-300">
              {skill}
              <span className="ml-2 text-red-400 cursor-pointer" onClick={() => removeSkill(i)}>x</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-y-2 lg:flex-row justify-between items-center my-6 px-0'>
        <label className='w-full lg:w-[45%]' htmlFor="">Your primary role</label>
        <input list="roles"
          className={`w-full lg:w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
          type="text" placeholder='Select Role...'
          value={role}
          onChange={e => setRole(e.target.value)}
        />
        <datalist id="roles">
          {fetchedJob && jobRoles.map((job, i) => (
            <option key={i} value={job}>{job}</option>
          ))}
        </datalist>
      </div>
      {/* <hr />
      <div className='py-2.5 px-0 flex flex-col justify-between gap-2 '>
        <label className='w-[45%]' htmlFor="">About your role</label>
        <ReactQuill
          value={aboutRole}
          onChange={handleEditorChange}
          theme="snow"
          modules={modules} className="md:w-[70%] w-full customeditor"
        />
      </div> */}

      <div className="w-full flex items-center justify-between">
        <button
          type='button'
          className='text-blue-300  flex items-center gap-3'
          onClick={() => handleRemoveExperienceAPI(item._id)}
        >
          <CiCircleMinus size={20} />
          Remove
        </button>
        <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
          {isProfileUpdating ? <ButtonLoading /> : "Save"}
        </button>
      </div>
    </form>
  )
}

const ExperienceInput = ({ id, isProfileUpdating, length, removeInputField, fetchedCompanies, companies, fetchedJob, jobRoles, fetchedSkills, jobSkills }) => {
  const { handleExperienceAPI } = submitHook();

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [website, setWebsite] = useState("");
  const [startDate, setStartDate] = useState("");
  const [working, setWorking] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [workType, setWorkType] = useState("");
  const [remote, setRemote] = useState(false);
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const addSkill = () => {
    if (skills.length >= 5) {
      return toast.error("You can add upto 5 skills max!");
    }
    if (skills.length < 5 && currentSkill && !skills.includes(currentSkill)) {
      setSkills(prevSkills => [...prevSkills, currentSkill]);
      setCurrentSkill("");
    }
  };
  const removeSkill = (removeIndex) => {
    setSkills(prevSkills => prevSkills.filter((skill, index) => index !== removeIndex));
  };
  const [role, setRole] = useState("");
  const [aboutRole, setAboutRole] = useState("");
  function htmlToPlainText(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  function handleEditorChange(htmlContent) {
    const plainText = htmlToPlainText(htmlContent);
    setAboutRole(plainText);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();

    handleExperienceAPI(
      jobTitle,
      companyName,
      companyLogo,
      website,
      startDate,
      working,
      endDate,
      workType,
      remote,
      countryName,
      stateName,
      cityName,
      skills,
      role,
      aboutRole
    );
  };

  return (
    <form className='border border-gray-200 text-white px-4 py-2 rounded mt-6 w-full' onSubmit={handleExperienceSubmit}>
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Job title<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder='Mention your Job Title'
          value={jobTitle}
          onChange={e => setJobTitle(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Company name<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          placeholder="Mention your Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Company website</label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder='Mention your Company Website'
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Start Date<span className='text-green-600'> *</span></label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="date" placeholder=''
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
      </div>
      <hr />
      <div className="mt-6 mb-6">
        <div>
          <input type="checkbox" className='me-4'
            value={working}
            checked={working}
            onChange={() => {
              setWorking(prev => !prev)
              if (!working) {
                setEndDate("");
              }
            }}
          />
          <span>I currently work here</span>
        </div>
        {!working && (
          <div className='flex justify-between items-center pt-2'>
            <label className='w-[45%]' htmlFor="">End Date<span className='text-green-600'> *</span></label>
            <input
              className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
              type="date" placeholder=''
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </div>
        )}
      </div>
      <hr />
      <div className='flex justify-between items-center my-6 px-0'>
        <label className='w-[45%]' htmlFor="">Work type</label>
        <input
          className={`w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
          type="text" placeholder="Mention your Work Type"
          value={workType}
          onChange={e => setWorkType(e.target.value)}
        />
      </div>
      <hr />
      <div className="mt-6 mb-6">
        <div>
          <input type="checkbox" className='me-4'
            value={remote}
            checked={remote}
            onChange={() => {
              setRemote(prev => !prev);
              if (!remote) {
                setStates([]);
                setCities([]);
                setCountryName("");
                setStateName("");
                setCityName("");
              }
            }}
          />
          <span>Remote</span>
        </div>
        {!remote && (
          <div className='flex flex-col md:flex-row md:gap-4 justify-between items-center'>
            <label className='w-full lg:w-[45%]' htmlFor="">Location</label>
            <div className='w-full lg:w-[50%] flex flex-row gap-2 justify-between me-0'>
              <select
                className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                onChange={e => {
                  let countryData = JSON.parse(e.target.value);
                  setStates(State.getStatesOfCountry(countryData.isoCode));
                  setCountryName(countryData.name);
                }}
              >
                {countryName && <option selected disabled>{countryName}</option>}
                {countries.map((country, i) => (
                  <option value={JSON.stringify(country)} key={i}>{country.name}</option>
                ))}
              </select>
              {countryName && (
                <select
                  className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                  onChange={e => {
                    let stateData = JSON.parse(e.target.value);
                    setCities(City.getCitiesOfState(stateData.countryCode, stateData.isoCode));
                    setStateName(stateData.name);
                  }}
                >
                  {stateName && <option selected disabled>{stateName}</option>}
                  {states.map((state, i) => (
                    <option value={JSON.stringify(state)} key={i}>{state.name}</option>
                  ))}
                </select>
              )}
              {/* {countryName && stateName && (
                <select
                  className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                  onChange={e => {
                    let cityData = JSON.parse(e.target.value);
                    setCityName(cityData.name);
                  }}
                >
                  {cityName && <option selected disabled>{cityName}</option>}
                  {cities.map((city, i) => (
                    <option value={JSON.stringify(city)} key={i}>{city.name}</option>
                  ))}
                </select>
              )} */}
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="flex flex-col my-6">
        <div className='flex flex-col gap-y-2 lg:flex-row justify-between items-start px-0'>
          <label className='w-full lg:w-full' htmlFor="">Skills, roles, tools, etc. <br />
            <span className='text-[12px] text-gray'>Mentions the skills you utilized and acquired, and the tools you used.</span>
          </label>
          <div className='w-full lg:w-[50%] flex flex-col items-end justify-start gap-y-3'>
            <input
              list="skills"
              className={`w-full border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
              type="text"
              placeholder='Select Skills...'
              value={currentSkill}
              onChange={(event) => setCurrentSkill(event.target.value)}
            />
            <datalist id="skills">
              {fetchedSkills && jobSkills.map((skill, i) => (
                <option key={i} value={skill}>{skill}</option>
              ))}
            </datalist>
            <button
              type='button'
              className='text-white bg-black rounded px-4 py-1'
              onClick={addSkill}>
              Add
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-2 pt-2">
          {skills.map((skill, i) => (
            <div key={i} className="p-2 rounded border border-gray-300">
              {skill}
              <span className="ml-2 text-red-400 cursor-pointer" onClick={() => removeSkill(i)}>x</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-y-2 lg:flex-row justify-between items-center my-6 px-0'>
        <label className='w-full lg:w-[45%]' htmlFor="">Your primary role</label>
        <input list="roles"
          className={`w-full lg:w-[50%] border p-3 me-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
          type="text" placeholder='Select Role...'
          value={role}
          onChange={e => setRole(e.target.value)}
        />
        <datalist id="roles">
          {fetchedJob && jobRoles.map((job, i) => (
            <option key={i} value={job}>{job}</option>
          ))}
        </datalist>
      </div>
      {/* <hr />
      <div className='py-2.5 px-0 flex flex-col justify-between gap-2 '>
        <label className='w-[45%]' htmlFor="">About your role</label>
        <ReactQuill
          value={aboutRole}
          onChange={handleEditorChange}
          theme="snow"
          modules={modules} className="md:w-[70%] w-full customeditor"
        />
      </div> */}

      <div className="w-full flex items-center justify-between">
        <button
          type='button'
          className='text-blue-300  flex items-center gap-3'
          onClick={() => {
            if (length > 0) {
              setJobTitle("");
              setCompanyName("");
              setWebsite("");
              setStartDate("");
              setWorking(false);
              setEndDate("");
              setWorkType("");
              setRemote(false);
              setCountryName("");
              setStateName("");
              setCityName("");
              setSkills([]);
              setRole("");
              setAboutRole("");
              removeInputField(id);
            }
          }}
        >
          <CiCircleMinus size={20} />
          Remove
        </button>
        <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
          {isProfileUpdating ? <ButtonLoading /> : "Save"}
        </button>
      </div>
    </form>
  )
};

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: "-1" }, { indent: "+1" }],
    [{ color: [] }], [{ align: [] }],
    // ['link', 'image', "video"],
  ],
};

export default ExperienceDetails;