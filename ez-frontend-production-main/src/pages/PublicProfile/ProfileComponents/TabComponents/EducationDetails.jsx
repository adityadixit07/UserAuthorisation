import React, { useState } from 'react';

import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

// assets import
import SchoolLogo from "../../../../assets/profile-img/school-logo.webp";
import { submitHook } from '../../../Profile/FirstTimeProfileEdit/submitHook';
import { useSelector } from 'react-redux';
import { SchoolCollege } from '../../../../static/Degree';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import ButtonLoading from '../../../../static/ButtonLoading';

const EducationDetails = ({ education }) => {
  const { isAuthenticated, user, profile, isProfileUpdating } = useSelector(state => state.user);

  const primaryEducation = education.filter(data => data.educationType === "School");
  const secondaryEducation = education.filter(data => data.educationType === "College");
  const universityEducation = education.filter(data => data.educationType === "University");

  const [inputList, setInputList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  function addInputField() {
    setInputList([...inputList, { id: idCounter }]);
    setIdCounter(idCounter + 1);
  };
  function removeInputField(id) {
    setInputList(inputList.filter(input => input.id !== id));
  };

  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <FaGraduationCap />
        </div>
        <h1>EDUCATION</h1>
      </div>

      {education.length === 0 && (
        <>
          {user?._id !== profile?._id && (
            <div className="w-full bg-[#d9d9d91a] rounded-[10px] text-white mt-8 py-3 px-4">
              <p className='text-justify px-2 py-2'>
                No education added yet!
              </p>
            </div>
          )}
          {isAuthenticated && user?._id === profile?._id && (
            <FirstTimeInput
              isProfileUpdating={isProfileUpdating}
            />
          )}
        </>
      )}

      {/* School Information */}
      {primaryEducation.length > 0 && (
        <>
          <div className="bio-second-header flex items-center mt-4">
            <div className="bio-second-header-icon ml-6">
              <FaSchool />
            </div>
            <div className='introduction p-2 px-2 ml-5'>SCHOOL</div>
          </div>
          {primaryEducation.map((item, i) => (
            <EducationComponent
              key={i}
              item={item}
              isAuthenticated={isAuthenticated}
              userId={user?._id}
              profileId={profile?._id}
              isProfileUpdating={isProfileUpdating}
            />
          ))}
        </>
      )}


      {/* College Information */}
      {secondaryEducation.length > 0 && (
        <>
          <div className="bio-second-header flex items-center mt-8">
            <div className="bio-second-header-icon ml-6">
              <FaSchool />
            </div>
            <div className='introduction p-2 px-2 ml-5'>COLLEGE</div>
          </div>
          {secondaryEducation.map((item, i) => (
            <EducationComponent
              key={i}
              item={item}
              isAuthenticated={isAuthenticated}
              userId={user?._id}
              profileId={profile?._id}
              isProfileUpdating={isProfileUpdating}
            />
          ))}
        </>
      )}


      {/* University Information */}
      {universityEducation.length > 0 && (
        <>
          <div className="bio-second-header flex items-center mt-8">
            <div className="bio-second-header-icon ml-6">
              <MdSchool />
            </div>
            <div className='introduction p-2 px-2 ml-5'>UNIVERSITY</div>
          </div>
          {universityEducation.map((item, i) => (
            <EducationComponent
              key={i}
              item={item}
              isAuthenticated={isAuthenticated}
              userId={user?._id}
              profileId={profile?._id}
              isProfileUpdating={isProfileUpdating}
            />
          ))}
        </>
      )}

      <div className="flex flex-col gap-3">
        {inputList.map((input, i) => (
          <EducationInput
            key={input.id}
            id={input.id}
            isProfileUpdating={isProfileUpdating}
            length={inputList.length}
            removeInputField={removeInputField}
          />
        ))}
      </div>

      {isAuthenticated && user?._id === profile?._id && (
        <button type='button' className='text-blue-300 flex items-center gap-3 my-3' onClick={addInputField}>
          <CiCirclePlus size={20} />
          Add Education
        </button>
      )}
    </>
  )
}

const FirstTimeInput = ({ isProfileUpdating }) => {
  const { handleEducationAPI } = submitHook();

  const [instituteName, setInstituteName] = useState("");
  const [educationType, setEducationType] = useState("");
  const [field, setField] = useState("");
  const [degree, setDegree] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleEducationSubmit = (e) => {
    e.preventDefault();

    handleEducationAPI(
      instituteName,
      educationType,
      field,
      degree,
      startYear,
      endYear,
    );
  };

  return (
    <form className='border border-gray-200 text-white my-3 px-4 py-2 rounded w-full' onSubmit={handleEducationSubmit}>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>School name *</h3>
        <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          placeholder="Your Scholl/College name"
          value={instituteName} onChange={(e) => setInstituteName(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
        <h3 className='text-base font-semibold'>Education Type *</h3>
        <select className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          placeholder="Your major/field of study"
          value={educationType} onChange={(e) => setEducationType(e.target.value)}
        >
          <option value="" disabled defaultValue="degree">
            Select education type
          </option>
          <option value="School">School</option>
          <option value="College">College</option>
          <option value="University">University</option>
        </select>
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
        <h3 className='text-base font-semibold'>Major/Field of Study *</h3>
        <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          placeholder="Your major/field of study"
          value={field} onChange={(e) => setField(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
        <h3 className='text-base font-semibold'>Degree Type *</h3>
        <select className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' name=""
          value={degree} onChange={(e) => setDegree(e.target.value)}
        >
          <option value="" disabled defaultValue="degree">
            Select your degree
          </option>
          {SchoolCollege.map((data, i) => {
            return <option value={data} key={i}>
              {data}
            </option>
          })}
        </select>
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Start & End Year *</h3>
        <div className='w-full md:w-96 flex justify-between gap-5 items-center'>
          <input className='p-2.5 rounded-[10px] md:w-1/2 w-full border border-slate-400 text-slate-800'
            placeholder='Start year'
            type='number'
            value={startYear}
            onChange={event => {
              if (event.target.value.length <= 4) {
                setStartYear(event.target.value);
              }
            }}
          />
          <input className='p-2.5 rounded-[10px] md:w-1/2 w-full border border-slate-400 text-slate-800'
            placeholder='End year'
            type='number'
            value={endYear}
            onChange={event => {
              if (event.target.value.length <= 4) {
                setEndYear(event.target.value)
              }
            }}
          />
        </div>
      </div>
      <div className='w-full mt-6'></div>
      <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0'>
        {(instituteName || educationType || field || degree || startYear || endYear || length > 1) ? (
          <div className="w-full flex items-center justify-start">
            <button
              type='button'
              className='text-blue-300  flex items-center gap-3'
              onClick={() => {
                setInstituteName("");
                setEducationType("");
                setField("");
                setDegree("");
                setStartYear("");
                setEndYear("");
              }}
            >
              <CiCircleMinus size={20} />
              Remove
            </button>
          </div>
        ) : null}
        <div className="w-full flex items-center justify-end">
          <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
            {isProfileUpdating ? <ButtonLoading /> : "Save"}
          </button>
        </div>
      </div>
    </form>
  )
};

const EducationComponent = ({ item, isAuthenticated, userId, profileId, isProfileUpdating }) => {
  const { handleEducationAPI, handleRemoveEducationAPI } = submitHook();

  const [editOpen, setEditOpen] = useState(false);

  const [instituteName, setInstituteName] = useState(item.institute);
  const [educationType, setEducationType] = useState(item.educationType);
  const [field, setField] = useState(item.major);
  const [degree, setDegree] = useState(item.degree_type);
  const [startYear, setStartYear] = useState(item.Startyear);
  const [endYear, setEndYear] = useState(item.Endyear);

  const handleEducationSubmit = (e) => {
    e.preventDefault();

    handleEducationAPI(
      instituteName,
      educationType,
      field,
      degree,
      startYear,
      endYear,
      item
    );
  };

  return (
    <>
      <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
        <div className="lg:w-2/12 w-3/12">
          <div className="school-logo">
            <img src={SchoolLogo} alt="School Logo" />
          </div>
        </div>
        <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
          <div className="school-name w-full lg:w-8/12">
            <div className="college-name">{item.institute}</div>
            <div className="university-name capitalize hidden md:block">{item.major}</div>
            <div className="university-name md:hidden">{item.degree_type}</div>
          </div>
          <div className="w-full lg:w-4/12 mt-2 lg:mt-0">
            <div className='hidden lg:flex justify-center items-center'>
              <div className="bio-second-header-icon bio-second-header-icon-inside">
                <MdSchool />
              </div>
              <div className='introduction introduction-inside px-2 ml-2'>
                {item.degree_type}
              </div>
            </div>
            <div className="qualification md:mt-1 flex md:justify-center">
              <div className="course bg-white px-1">{item.Startyear} - {item.Endyear}</div>
            </div>
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
            <form className='border border-gray-200 px-4 py-2 rounded w-full text-white' onSubmit={handleEducationSubmit}>
              <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
                <h3 className='text-base font-semibold'>School name *</h3>
                <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                  placeholder="Your Scholl/College name"
                  value={instituteName} onChange={(e) => setInstituteName(e.target.value)}
                />
              </div>
              <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
                <h3 className='text-base font-semibold'>Education Type *</h3>
                <select className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                  placeholder="Your major/field of study"
                  value={educationType} onChange={(e) => setEducationType(e.target.value)}
                >
                  <option value="" disabled defaultValue="degree">
                    Select education type
                  </option>
                  <option value="School">School</option>
                  <option value="College">College</option>
                  <option value="University">University</option>
                </select>
              </div>
              <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
                <h3 className='text-base font-semibold'>Major/Field of Study *</h3>
                <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                  placeholder="Your major/field of study"
                  value={field} onChange={(e) => setField(e.target.value)}
                />
              </div>
              <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
                <h3 className='text-base font-semibold'>Degree Type *</h3>
                <select className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' name=""
                  value={degree} onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="" disabled defaultValue="degree">
                    Select your degree
                  </option>
                  {SchoolCollege.map((data, i) => {
                    return <option value={data} key={i}>
                      {data}
                    </option>
                  })}
                </select>
              </div>
              <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
                <h3 className='text-base font-semibold'>Start & End Year *</h3>
                <div className='w-full md:w-96 flex justify-between gap-5 items-center'>
                  <input className='p-2.5 rounded-[10px] md:w-1/2 w-full border border-slate-400 text-slate-800'
                    placeholder='Start year'
                    type='number'
                    value={startYear}
                    onChange={event => {
                      if (event.target.value.length <= 4 && (event.target.value !== "e" || event.target.value !== "E")) {
                        setStartYear(event.target.value);
                      }
                    }}
                  />
                  <input className='p-2.5 rounded-[10px] md:w-1/2 w-full border border-slate-400 text-slate-800'
                    placeholder='End year'
                    type='number'
                    value={endYear}
                    onChange={event => {
                      if (event.target.value.length <= 4) {
                        setEndYear(event.target.value)
                      }
                    }}
                  />
                </div>
              </div>
              <div className='w-full mt-6'></div>
              <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0'>
                <div className="w-full flex items-center justify-start">
                  <button
                    type='button'
                    className='text-blue-300  flex items-center gap-3'
                    onClick={() => handleRemoveEducationAPI(item._id)}
                  >
                    <CiCircleMinus size={20} />
                    Remove
                  </button>
                </div>
                <div className="w-full flex items-center justify-end">
                  <button type='submit' disabled={isProfileUpdating} className='text-white bg-black rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                    {isProfileUpdating ? <ButtonLoading /> : "Save"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </>
      )}
    </>
  )
};

const EducationInput = ({ id, isProfileUpdating, length, removeInputField }) => {
  const { handleEducationAPI } = submitHook();

  const [instituteName, setInstituteName] = useState("");
  const [educationType, setEducationType] = useState("");
  const [field, setField] = useState("");
  const [degree, setDegree] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleEducationSubmit = (e) => {
    e.preventDefault();

    handleEducationAPI(
      instituteName,
      educationType,
      field,
      degree,
      startYear,
      endYear,
    );
  };

  return (
    <form className='border border-gray-200 text-white mt-3 px-4 py-2 rounded w-full' onSubmit={handleEducationSubmit}>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>School name *</h3>
        <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          placeholder="Your Scholl/College name"
          value={instituteName} onChange={(e) => setInstituteName(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
        <h3 className='text-base font-semibold'>Education Type *</h3>
        <select className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          placeholder="Your major/field of study"
          value={educationType} onChange={(e) => setEducationType(e.target.value)}
        >
          <option value="" disabled defaultValue="degree">
            Select education type
          </option>
          <option value="School">School</option>
          <option value="College">College</option>
          <option value="University">University</option>
        </select>
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
        <h3 className='text-base font-semibold'>Major/Field of Study *</h3>
        <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          placeholder="Your major/field of study"
          value={field} onChange={(e) => setField(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center'>
        <h3 className='text-base font-semibold'>Degree Type *</h3>
        <select className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' name=""
          value={degree} onChange={(e) => setDegree(e.target.value)}
        >
          <option value="" disabled defaultValue="degree">
            Select your degree
          </option>
          {SchoolCollege.map((data, i) => {
            return <option value={data} key={i}>
              {data}
            </option>
          })}
        </select>
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Start & End Year *</h3>
        <div className='w-full md:w-96 flex justify-between gap-5 items-center'>
          <input className='p-2.5 rounded-[10px] md:w-1/2 w-full border border-slate-400 text-slate-800'
            placeholder='Start year'
            type='number'
            value={startYear}
            onChange={event => {
              if (event.target.value.length <= 4) {
                setStartYear(event.target.value);
              }
            }}
          />
          <input className='p-2.5 rounded-[10px] md:w-1/2 w-full border border-slate-400 text-slate-800'
            placeholder='End year'
            type='number'
            value={endYear}
            onChange={event => {
              if (event.target.value.length <= 4) {
                setEndYear(event.target.value)
              }
            }}
          />
        </div>
      </div>
      <div className='w-full mt-6'></div>
      <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0'>
        {(instituteName || educationType || field || degree || startYear || endYear || length > 0) ? (
          <div className="w-full flex items-center justify-start">
            <button
              type='button'
              className='text-blue-300  flex items-center gap-3'
              onClick={() => {
                setInstituteName("");
                setEducationType("");
                setField("");
                setDegree("");
                setStartYear("");
                setEndYear("");
                removeInputField(id);
              }}
            >
              <CiCircleMinus size={20} />
              Remove
            </button>
          </div>
        ) : null}
        <div className="w-full flex items-center justify-end">
          <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
            {isProfileUpdating ? <ButtonLoading /> : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EducationDetails