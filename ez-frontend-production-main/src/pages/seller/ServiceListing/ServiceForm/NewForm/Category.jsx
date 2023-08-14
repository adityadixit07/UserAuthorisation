import React from 'react'

const Category = ({ category, setCategory }) => {
    return (
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="md:w-[70%] w-full  bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled defaultValue={"tags"}>Choose the category of service</option>
            {["Sole Proprietorships", "Corporations", "Partnerships", "Limited Liability Companies", "S Corporations."].map((data, i) => {
                return <option key={i} value={data}>{data}</option>
            })}
        </select>
    )
}

export default Category