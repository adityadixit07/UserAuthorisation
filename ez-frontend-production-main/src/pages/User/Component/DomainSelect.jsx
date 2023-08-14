import React from 'react';
import { toast } from 'react-hot-toast';
import { IoMdAdd, IoMdRemove } from "react-icons/io"

const DomainSelect = ({
  fetchedCategories, categories,
  domains, setDomains,
  currentDomain, setCurrentDomain,
  setJobRolesData, setSkillsData
}) => {

  // For the input
  const addDomain = () => {
    if (currentDomain === "") {
      return toast.error("Field shouldn't be empty!");
    }

    if (domains.includes(currentDomain)) {
      setCurrentDomain("");
      return toast.error("This domain already added!");
    }

    if (domains.length >= 3) {
      return toast.error("You can add upto 3 domains max!");
    }

    if (currentDomain && !domains.includes(currentDomain)) {
      setDomains(prevDomains => [...prevDomains, currentDomain]);
      toast.success(`${currentDomain} added!`);
      setCurrentDomain("");
    }
  };

  // For the button (Add/Remove domain)
  const domainButton = (domainName) => {
    let newDomainsLength = domains.length;

    if (domains.includes(domainName)) {
      setDomains(domains.filter(domain => domain !== domainName));
      toast.success(`${domainName} removed!`);

      const selectedCategory = categories.find(category => category.ez_category_name === domainName);

      if (selectedCategory) {
        setJobRolesData((prevJobRoles) => prevJobRoles.filter(role => !selectedCategory.ez_job_roles.includes(role)));
        setSkillsData((prevSkills) => prevSkills.filter(skill => !selectedCategory.ez_skills.includes(skill)));
      }

      newDomainsLength--;
    }
    else {
      newDomainsLength++;
    }

    if (newDomainsLength <= 3 && domainName && !domains.includes(domainName)) {
      setDomains(prevDomains => [...prevDomains, domainName]);
      toast.success(`${domainName} added!`);

      const selectedCategory = categories.find(category => category.ez_category_name === domainName);

      if (selectedCategory) {
        setJobRolesData((prevJobRoles) => [...prevJobRoles, ...selectedCategory.ez_job_roles]);
        setSkillsData((prevSkills) => [...prevSkills, ...selectedCategory.ez_skills]);
      }
    }
    else if (newDomainsLength > 3) {
      return toast.error("You can add upto 3 domains max!");
    }
  };

  const combinedArray = fetchedCategories ? [...new Set([...domains, ...categories.map(item => item.ez_category_name)])] : [];

  return (
    <div className='mt-[4%]'>
      <h2 className="font-bold">
        Choose your Domain (max 3):
      </h2>

      <div className="flex justify-between mb-[2%]">
        <input
          id="search"
          type="text"
          placeholder="Search for more"
          autoComplete="on"
          className="border border-[gray] rounded-[10px] flex-1 p-[2%]"
          value={currentDomain}
          onChange={e => setCurrentDomain(e.target.value)}
          list="domains"
        />
        <datalist id="domains">
          {fetchedCategories && combinedArray.map((domainOptions, i) => (
            <option key={i} value={domainOptions}>
              {domainOptions}
            </option>
          ))}
        </datalist>
        <button className="border-2 border-[green] rounded-[10px] py-[7px] px-[10px] ml-[1%]"
          onClick={addDomain}
        >
          Add
        </button>
      </div>

      <div className="w-full flex flex-wrap gap-2 overflow-y-auto max-h-[50vh]">
        {fetchedCategories && combinedArray.map((domainName, i) => {
          const domainSelected = domains.includes(domainName);
          return (
            <button
              id="options"
              key={i}
              className={`${domainSelected ? "bg-green-400 text-white" : "bg-[#949494]"} border-[green] w-fit py-[1%] px-[2%] border-2 rounded-[50px] flex justify-around items-center gap-2`}
              onClick={() => domainButton(domainName)}
            >
              <p>{domainName}</p>
              {domainSelected ? <IoMdRemove color='green' /> : <IoMdAdd color='green' />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DomainSelect