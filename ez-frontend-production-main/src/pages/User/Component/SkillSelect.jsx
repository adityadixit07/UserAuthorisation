import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const SkillSelect = ({
  skills, setSkills,
  currentSkill, setCurrentSkill,
  skillsData,
  fetchedSkills, jobSkills,
}) => {

  // For the input
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
      toast.success(`${currentSkill} added!`);
      setCurrentSkill("");
    }
  };

  // For the button (Add/Remove skill)
  const skillButton = (skillName) => {
    let newSkillLength = skills.length;

    if (skills.includes(skillName)) {
      setSkills(skills.filter(skill => skill !== skillName));
      toast.success(`${skillName} removed!`);
      newSkillLength--;
    }
    else {
      newSkillLength++;
    }

    if (skillName && !skills.includes(skillName)) {
      setSkills(prevSkills => [...prevSkills, skillName]);
      toast.success(`${skillName} added!`);
    }
  };

  const combinedArray = fetchedSkills ? [...new Set([...skills, ...skillsData.length > 0 ? skillsData : jobSkills])] : [];
  const [skillLimit, setSkillLimit] = useState(25);

  return (
    <div className='mt-[4%]'>
      <h2 className="font-bold">
        Choose your Skills (min 7):
      </h2>

      <div className="flex justify-between mb-[2%]">
        <input
          id="search"
          type="text"
          placeholder="Search for more"
          autoComplete="on"
          className="border border-[gray] rounded-[10px] flex-1 p-[2%]"
          value={currentSkill}
          onChange={e => setCurrentSkill(e.target.value)}
          list="skills"
        />
        <datalist id="skills">
          {fetchedSkills && jobSkills.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </datalist>
        <button className="border-2 border-[green] rounded-[10px] py-[7px] px-[10px] ml-[1%]"
          onClick={addSkill}
        >
          Add
        </button>
      </div>

      <div className="w-full flex flex-wrap gap-2 overflow-y-auto max-h-[50vh]">
        {fetchedSkills && combinedArray.slice(0, skillLimit).map((skillName, i) => {
          const skillSelected = skills.includes(skillName);
          return (
            <button
              id="options"
              key={i}
              className={`${skillSelected ? "bg-green-400 text-white" : "bg-[#949494]"} border-[green] w-fit py-[1%] px-[2%] border-2 rounded-[50px] flex justify-around items-center gap-2`}
              onClick={() => skillButton(skillName)}
            >
              <p>{skillName}</p>
              {skillSelected ? <IoMdRemove color='green' /> : <IoMdAdd color='green' />}
            </button>
          )
        })}
        {combinedArray.length > skillLimit && combinedArray.length !== skillLimit && (
          <div className="flex items-center cursor-pointer text-green-700" onClick={() => setSkillLimit(prev => prev + 25)}>
            more...
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillSelect