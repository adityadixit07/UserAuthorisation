import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { useSelector } from "react-redux";
import { submitHook } from '../../../Profile/FirstTimeProfileEdit/submitHook';
import ButtonLoading from "../../../../static/ButtonLoading";

const BioDetails = ({ bio }) => {
  const { isAuthenticated, user, profile, isProfileUpdating } = useSelector(state => state.user);

  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <FaGraduationCap />
        </div>
        <h1>OVERVIEW</h1>
      </div>
      <div className="bio-second-header flex items-center mt-4">
        <div className="bio-second-header-icon ml-6">
          <ImProfile />
        </div>
        <div className='introduction p-2 ml-5'>INTRODUCTION</div>
      </div>

      {!bio && (
        <>
          {user?._id !== profile?._id && (
            <div className="w-full bg-[#d9d9d91a] rounded-[10px] text-white mt-8 py-3 px-4">
              <p className='text-justify px-2 py-2'>
                No bio added yet!
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
      <BioComponent
        bio={bio}
        isAuthenticated={isAuthenticated}
        userId={user?._id}
        profileId={profile?._id}
        isProfileUpdating={isProfileUpdating}
      />
    </>
  )
};

export const FirstTimeInput = ({ isProfileUpdating }) => {
  const { handleBioAPI } = submitHook();

  const [bioData, setBioData] = useState("");

  const handleBioSubmit = (e) => {
    e.preventDefault();

    handleBioAPI(bioData);
  };

  return (
    <form className=' px-4 py-2 rounded w-full' onSubmit={handleBioSubmit}>
      <div className="w-full">
        <textarea
          disabled={isProfileUpdating}
          type="text"
          placeholder={"Describe yourself in your own words"}
          value={bioData}
          onChange={(e) => setBioData(e.target.value)}
          id="bio"
          className={`w-full h-32 border p-3 border-green-800 mt-2 focus:outline-none focus:border-green-600 rounded-md text-black`}
        ></textarea>
        <label htmlFor="headline" className="text-gray-100 text-[12px]">This is your bio. Be a little more descriptive.</label>
      </div>
      <div className='w-full mt-6'></div>
      <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
        {isProfileUpdating ? <ButtonLoading /> : "Save"}
      </button>
    </form>
  )
};

export const BioComponent = ({ bio, isAuthenticated, userId, profileId, isProfileUpdating }) => {
  const { handleBioAPI } = submitHook();

  const [bioData, setBioData] = useState(bio || "");
  const [editOpen, setEditOpen] = useState(false);

  const handleBioSubmit = (e) => {
    e.preventDefault();

    handleBioAPI(bioData);
  };

  return (
    <>
      {bio && (
        <>
          <div className='profile-description mt-4 py-3 px-4'>
            <p className='text-justify mx-2 my-2'>
              {bio}
            </p>
          </div>
          {isAuthenticated && userId === profileId && (
            <>
              <div className='w-full flex justify-end my-1'>
                <button className="w-[80px] flex justify-center bg-green-500 text-white py-1 px-3 rounded-[10px]" onClick={() => setEditOpen(prev => !prev)}>
                  Edit
                </button>
              </div>
              {editOpen && (
                <form className='border border-gray-200 px-4 py-2 rounded w-full' onSubmit={handleBioSubmit}>
                  <div className="w-full">
                    <textarea
                      disabled={isProfileUpdating}
                      type="text"
                      placeholder={"Describe yourself in your own words"}
                      value={bioData}
                      onChange={(e) => setBioData(e.target.value)}
                      id="bio"
                      className={`w-full h-32 border p-3 border-green-800 mt-2 focus:outline-none focus:border-green-600 rounded-md text-black`}
                    ></textarea>
                    <label htmlFor="headline" className="text-gray-100 text-[12px]">This is your bio. Be a little more descriptive.</label>
                  </div>
                  <div className='w-full mt-6'></div>
                  <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                    {isProfileUpdating ? <ButtonLoading /> : "Save"}
                  </button>
                </form>
              )}
            </>
          )}
        </>
      )}
    </>
  )
};

export default BioDetails