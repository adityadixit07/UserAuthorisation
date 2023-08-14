import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { updateUserDetails } from '../../../actions/userActions';
import { useDispatch } from 'react-redux';
import ButtonLoading from '../../../static/ButtonLoading';

const FirstEditSkill = ({ user, isProfileUpdating }) => {
  const dispatch = useDispatch();

  const [skills, setSkills] = useState(user?.profileCategory?.skills || []);
  const [currentSkill, setCurrentSkill] = useState("");

  const addSkill = () => {
    if (currentSkill === "") {
      return toast.error("Field shouldn't be empty!");
    }

    if (skills.includes(currentSkill)) {
      setCurrentSkill("");
      return toast.error("This skill already added!");
    }

    if (currentSkill && !skills.includes(currentSkill)) {
      setSkills(prevSkills => [...prevSkills, currentSkill]);
      setCurrentSkill("");
    }
  };
  const removeSkill = (removeIndex) => {
    setSkills(prevSkills => prevSkills.filter((skill, index) => index !== removeIndex));
  };

  const handleSkillsSubmit = (e) => {
    e.preventDefault();

    if (skills.length < 7) {
      return toast.error("You have to add min 7 skills!");
    }

    const userData = {
      profileCategory: {
        ...user.profileCategory,
        skills,
      },
      about: {
        ...user.about,
        skills
      }
    };

    dispatch(updateUserDetails(userData));
  }

  return (
    <>
      <div>
        <div className='flex gap-2 items-center text-base font-semibold'>
          <h2 className='text-3xl p-4 w-full bg-gray-200 text-black font-bold rounded'>Add Skills/TopTools</h2>
        </div>

        {user?.profileCategory?.skills.length > 0 && (
          <div className={`w-full mt-8 flex flex-wrap gap-3`}>
            {user?.profileCategory?.skills.map((item, i) => (
              <div className="skill-box py-3 px-6 cursor-default" key={i}>
                <span className="block text-sm text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        <form className='border border-gray-200 px-4 py-2 rounded mt-6 w-full' onSubmit={handleSkillsSubmit}>
          <div className='flex flex-col md:flex-row justify-between items-center mt-6 px-0'>
            <label className='w-full md:w-[50%]' htmlFor="">Skills/TopTools (max 7)<span className='text-green-600'> *</span></label>
            <div className="w-full">
              <div className={`w-full me-[2%] flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}>
                <input
                  list="skills"
                  type="text"
                  placeholder="Skills"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  className="p-3 w-full rounded-s-md"
                />

                <button
                  type='button'
                  className='border-s border-green-800 rounded-e-md p-3 bg-gray-300'
                  onClick={addSkill}>
                  Add
                </button>
              </div>
              <div className="w-full mt-2 lg:mt-0 flex flex-row flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center bg-white rounded-md px-3 py-1 text-black">
                    {skill}
                    <span
                      className="font-bold text-green-500 cursor-pointer ml-2"
                      onClick={() => removeSkill(i)}
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center mt-2'>
              {isProfileUpdating ? <ButtonLoading /> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
};

export default FirstEditSkill























