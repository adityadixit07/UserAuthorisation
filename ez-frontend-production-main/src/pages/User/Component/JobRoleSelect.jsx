import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const JobRoleSelect = ({
  jobRole, setJobRole,
  currentJobRole, setCurrentJobRole,
  jobRolesData,
  fetchedJob, jobRoles
}) => {

  // For the input
  const addRole = () => {
    if (currentJobRole === "") {
      return toast.error("Field shouldn't be empty!");
    }

    if (jobRole.includes(currentJobRole)) {
      setCurrentJobRole("");
      return toast.error("This role already added!");
    }

    if (jobRole.length >= 1) {
      return toast.error("You can add upto 1 job role max!");
    }

    if (currentJobRole && !jobRole.includes(currentJobRole)) {
      setJobRole(prevRoles => [...prevRoles, currentJobRole]);
      toast.success(`${currentJobRole} added!`);
      setCurrentJobRole("");
    }
  };

  // For the button (Add/Remove role)
  const roleButton = (roleName) => {
    let newRoleLength = jobRole.length;

    if (jobRole.includes(roleName)) {
      setJobRole(jobRole.filter(role => role !== roleName));
      toast.success(`${roleName} removed!`);
      newRoleLength--;
    }
    else {
      newRoleLength++;
    }

    if (newRoleLength <= 1 && roleName && !jobRole.includes(roleName)) {
      setJobRole(prevRoles => [...prevRoles, roleName]);
      toast.success(`${roleName} added!`);
    }
    else if (newRoleLength > 1) {
      return toast.error("You can add upto 1 job role max!");
    }
  };

  const combinedArray = fetchedJob ? [...new Set([...jobRole, ...jobRolesData.length > 0 ? jobRolesData : jobRoles])] : [];
  const [roleLimit, setRoleLimit] = useState(25);

  return (
    <div className='mt-[4%]'>
      <h2 className="font-bold">
        Choose your Job Role (max 1):
      </h2>

      <div className="flex justify-between mb-[2%]">
        <input
          id="search"
          type="text"
          placeholder="Search for more"
          autoComplete="on"
          className="border border-[gray] rounded-[10px] flex-1 p-[2%]"
          value={currentJobRole}
          onChange={e => setCurrentJobRole(e.target.value)}
          list="roles"
        />
        <datalist id="roles">
          {fetchedJob && jobRoles.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </datalist>
        <button className="border-2 border-[green] rounded-[10px] py-[1%] px-[10px] ml-[1%]"
          onClick={addRole}
        >
          Add
        </button>
      </div>

      <div className="w-full flex flex-wrap gap-2 overflow-y-auto max-h-[50vh]">
        {fetchedJob && combinedArray.slice(0, roleLimit).map((roleName, i) => {
          const roleSelected = jobRole.includes(roleName);
          return (
            <button
              id="options"
              key={i}
              className={`${roleSelected ? "bg-green-400 text-white" : "bg-[#949494]"} border-[green] w-fit py-[7px] px-[2%] border-2 rounded-[50px] flex justify-around items-center gap-2`}
              onClick={() => roleButton(roleName)}
            >
              <p>{roleName}</p>
              {roleSelected ? <IoMdRemove color='green' /> : <IoMdAdd color='green' />}
            </button>
          )
        })}
        {combinedArray.length > roleLimit && combinedArray.length !== roleLimit && (
          <div className="flex items-center cursor-pointer text-green-700" onClick={() => setRoleLimit(prev => prev + 25)}>
            more...
          </div>
        )}
      </div>
    </div>
  )
}

export default JobRoleSelect