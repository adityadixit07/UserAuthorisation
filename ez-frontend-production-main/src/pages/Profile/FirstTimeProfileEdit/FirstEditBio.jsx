import React, { useState } from 'react'
import ButtonLoading from '../../../static/ButtonLoading';
import { submitHook } from './submitHook';

const FirstEditBio = ({ user, isProfileUpdating }) => {
    const { handleBioAPI } = submitHook();

    const [bio, setBio] = useState(user?.bio || "");

    const handleBioSubmit = (e) => {
        e.preventDefault();

        handleBioAPI(bio);
    };

    return (
        <div>
            <h2 className='text-3xl p-4 w-full bg-gray-200 text-black font-bold rounded'>Overview</h2>
            <div className='w-full flex flex-col items-center'>
                <form className='border border-gray-200 px-4 py-2 rounded mt-6 w-full' onSubmit={handleBioSubmit}>
                    <div className="w-full">
                        <textarea
                            disabled={isProfileUpdating}
                            type="text"
                            placeholder={"Describe yourself in your own words"}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            id="bio"
                            className={`w-full h-32 border p-3 border-green-800 mt-2 focus:outline-none focus:border-green-600 rounded-md text-black`}
                        ></textarea>
                        <label htmlFor="headline" className="text-gray-100 text-[12px]">This is your bio. Be a little more descriptive.</label>
                    </div>
                    <div className='w-full mt-6'></div>
                    <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                        {isProfileUpdating ? <ButtonLoading /> : "Save"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FirstEditBio