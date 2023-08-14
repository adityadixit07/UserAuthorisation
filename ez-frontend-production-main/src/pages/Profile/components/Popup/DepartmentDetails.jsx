import React from 'react'

const DepartmentDetails = ({
    fetchedCategories, categories,
    currentDepartment, setCurrentDepartment,
    department, setDepartment,
    subCategoriesData
}) => {
    const addDepartment = () => {
        if (currentDepartment && !department.includes(currentDepartment)) {
            setDepartment(prevDepartments => [...prevDepartments, currentDepartment]);
            setCurrentDepartment("");
        }
    };
    const removeDepartment = (removeIndex) => {
        setDepartment(prevDepartments => prevDepartments.filter((department, index) => index !== removeIndex));
    };

    return (
        <div className="mt-4">
            <p className="text-left mt-0">Department</p>
            <div className="w-[100%] my-0 flex flex-col items-center">
                <div className={`w-full lg:w-[] me-[2%] flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}>
                    <input
                        type="text"
                        placeholder="Department"
                        value={currentDepartment}
                        onChange={(e) => setCurrentDepartment(e.target.value)}
                        className="p-3 w-full rounded-s-md"
                        list="department"
                    />
                    <datalist id="department" className="datalist-white">
                        {subCategoriesData.length > 0
                            ? subCategoriesData.map((department, i) => (
                                <option className="bg-white" key={i} value={department}>
                                    {department}
                                </option>
                            ))
                            : fetchedCategories && categories.flatMap(category => category.ez_subcategory).map((department, i) => (
                                <option className="bg-white" key={i} value={department}>
                                    {department}
                                </option>
                            ))
                        }
                    </datalist>
                    <button
                        type='button'
                        className='border-s border-green-800 rounded-e-md p-3 bg-gray-300'
                        onClick={addDepartment}>
                        Add
                    </button>
                </div>
                <div className="w-full mt-2 lg:mt-0 flex flex-row flex-wrap gap-2">
                    {department.map((item, i) => (
                        <div className="flex items-center bg-white rounded-md px-3 py-1 text-black" key={i}>
                            {item}
                            <span className="font-bold text-green-500 cursor-pointer" onClick={() => removeDepartment(i)}>x</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DepartmentDetails