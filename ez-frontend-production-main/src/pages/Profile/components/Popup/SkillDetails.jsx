import React from 'react'
import { toast } from 'react-hot-toast';

const SkillDetails = ({
    currentSkill, setCurrentSkill,
    skills, setSkills,
    skillsData,
    fetchedSkills, jobSkills,
}) => {
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

    return (
        <div className="mt-4">
            <p className="text-left mt-0">Skills (min 7)<span className="text-green-700 font-bold">*</span></p>
            <div className="w-[100%] mb-3 flex flex-col items-center">
                <div className={`w-full lg:w-[] me-[2%] flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}>
                    <input
                        list="skills"
                        type="text"
                        placeholder="Skills"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        className="p-3 w-full rounded-s-md"
                    />
                    <datalist id="skills" className="datalist-white">
                        {skillsData.length > 0
                            ? skillsData.map((skill, i) => (
                                <option className="bg-white" key={i} value={skill}>
                                    {skill}
                                </option>
                            ))
                            : fetchedSkills && jobSkills.map((skill, i) => (
                                <option className="bg-white" key={i} value={skill}>
                                    {skill}
                                </option>
                            ))}
                    </datalist>
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
    )
}

export default SkillDetails