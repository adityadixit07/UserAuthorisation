import React from 'react'
import { toast } from 'react-hot-toast';

const JobRolesDetails = ({
    currentJobRole, setCurrentJobRole,
    jobRole, setJobRole,
    jobRolesData,
    fetchedJob, jobRoles
}) => {
    const addJobRole = () => {
        if (currentJobRole === "") {
            return toast.error("Field shouldn't be empty!");
        }

        if (jobRole.includes(currentJobRole)) {
            setCurrentJobRole("");
            return toast.error("This job role already added!");
        }

        if (jobRole.length < 1 && currentJobRole && !jobRole.includes(currentJobRole)) {
            setJobRole(prevJobRoles => [...prevJobRoles, currentJobRole]);
            setCurrentJobRole("");
        }
        else {
            return toast.error("You can add upto 1 job role max!");
        }
    };
    const removeJobRole = (removeIndex) => {
        setJobRole(prevJobRoles => prevJobRoles.filter((jobRole, index) => index !== removeIndex));
    };

    return (
        <div className="mt-4">
            <p className="text-left mt-0">Job Role (max 1)</p>
            <div className="w-[100%] my-0 flex flex-col items-center">
                <div className={`w-full lg:w-[] me-[2%] flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}>
                    <input
                        type="text"
                        placeholder="Job Roles"
                        value={currentJobRole}
                        onChange={(e) => setCurrentJobRole(e.target.value)}
                        className="p-3 w-full rounded-s-md"
                        list="jobRoles"
                    />
                    <datalist id="jobRoles" className="datalist-white">
                        {jobRolesData.length > 0
                            ? jobRolesData.map((role, i) => (
                                <option className="bg-white" key={i} value={role}>
                                    {role}
                                </option>
                            ))
                            : fetchedJob && jobRoles.map((role, i) => (
                                <option className="bg-white" key={i} value={role}>
                                    {role}
                                </option>
                            ))
                        }
                    </datalist>
                    <button
                        type='button'
                        className='border-s border-green-800 rounded-e-md p-3 bg-gray-300'
                        onClick={addJobRole}>
                        Add
                    </button>
                </div>
                <div className="w-full mt-2 lg:mt-0 flex flex-row flex-wrap gap-2">
                    {jobRole.map((item, i) => (
                        <div className="flex items-center bg-white rounded-md px-3 py-1 text-black" key={i}>
                            {item}
                            <span className="font-bold text-green-500 cursor-pointer" onClick={() => removeJobRole(i)}>x</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobRolesDetails