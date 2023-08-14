import React from 'react'

const TitleDetails = ({ role, setRole, fetchedJob, jobRoles }) => {
    return (
        <div>
            <p className="text-left">One title is possible<span className="text-green font-bold">*</span></p>
            <div className="w-[100%] flex flex-col items-center">
                <div className={`w-full lg:w-[] me-[2%] flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}>
                    <input
                        list="titles"
                        type="text"
                        placeholder="Title"
                        className="p-3 w-full rounded-md"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    />
                    <datalist id="titles">
                        {fetchedJob && jobRoles.map((role, index) => (
                            <option value={role} key={index}>{role}</option>
                        ))}
                    </datalist>
                </div>
            </div>
        </div>
    )
}

export default TitleDetails