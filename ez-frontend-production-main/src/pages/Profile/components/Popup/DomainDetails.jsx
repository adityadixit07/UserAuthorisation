import React from 'react';
import { toast } from "react-hot-toast";

const DomainDetails = ({
    fetchedCategories, categories,
    domains, setDomains,
    currentDomain, setCurrentDomain,
    setSubCategoriesData, setJobRolesData, setSkillsData
}) => {

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

            const selectedCategory = categories.find(
                category => category.ez_category_name === currentDomain
            );

            if (selectedCategory) {
                setSubCategoriesData((prevSubCategories) =>
                    [...prevSubCategories, ...selectedCategory.ez_subcategory]
                );
                setJobRolesData((prevJobRoles) =>
                    [...prevJobRoles, ...selectedCategory.ez_job_roles]
                );
                setSkillsData((prevSkills) =>
                    [...prevSkills, ...selectedCategory.ez_skills]
                );
            }

            setCurrentDomain("");
        }
    };

    const removeDomain = (removeIndex) => {
        const domainToRemove = domains[removeIndex];
        const relatedCategory = categories.find(category => category.ez_category_name === domainToRemove);

        setDomains((prevDomains) =>
            prevDomains.filter((_, index) => index !== removeIndex)
        );

        if (relatedCategory) {
            setSubCategoriesData((prevSubCategories) =>
                prevSubCategories.filter(subcategory => !relatedCategory.ez_subcategory.includes(subcategory))
            );
            setJobRolesData((prevJobRoles) =>
                prevJobRoles.filter(jobRole => !relatedCategory.ez_job_roles.includes(jobRole))
            );
            setSkillsData((prevSkills) =>
                prevSkills.filter(skill => !relatedCategory.ez_skills.includes(skill))
            );
        }
    };

    return (
        <div className="mt-4">
            <p className="text-left mt-0">Domain (max 3)<span className="text-green-700 font-bold">*</span></p>
            <div className="w-[100%] my-0 flex flex-col items-center">
                <div className={`w-full lg:w-[] me-[2%] flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}>
                    <input
                        type="text"
                        placeholder="Domain"
                        value={currentDomain}
                        onChange={(e) => setCurrentDomain(e.target.value)}
                        className="p-3 w-full rounded-s-md"
                        list="domains"
                    />
                    <datalist id="domains">
                        {fetchedCategories && categories.map((category, i) => (
                            <option key={i} value={category.ez_category_name}>
                                {category.ez_category_name}
                            </option>
                        ))}
                    </datalist>
                    <button
                        type='button'
                        className='border-s border-green-800 rounded-e-md p-3 bg-gray-300'
                        onClick={addDomain}>
                        Add
                    </button>
                </div>
                <div className="w-full mt-2 lg:mt-0 flex flex-row flex-wrap gap-2">
                    {domains.map((domain, i) => (
                        <div key={i} className="flex items-center bg-white rounded-md px-3 py-1 text-black">
                            {domain}
                            <span className="font-bold text-green-500 cursor-pointer" onClick={() => removeDomain(i)}>x</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DomainDetails