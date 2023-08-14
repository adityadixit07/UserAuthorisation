import React from 'react'

function EditLanguages() {
    const editSectionLanguage = () => {
        // console.log(document.getElementById('editSectionLanguage').style.display);
        document.getElementById('editSectionLanguage').style.display == "flex" ?
            document.getElementById('editSectionLanguage').style.display = "none" :
            document.getElementById('editSectionLanguage').style.display = "flex";
    }
    return (
        <div id="editSectionLanguage" style={{ "display": "none" }} className='h-[90vh] w-[100vw] fixed flex-col items-center justify-center top-[10vh] left-0 bg-[rgba(255,255,255,0.5)]'>
            <div className='w-[50vw] flex flex-col items-center'>
                <button onClick={editSectionLanguage} className="bg-white text-[#003902] font-bold w-[50px] h[50px] border-4 border-[#003902] rounded-full absolute top-[0vh]">
                    X
                </button>
                <div className='rounded w-full bg-[#302D2D] flex flex-col items-center p-5'>
                    <h3 className='text-2xl text-center text-white font-bold'>Edit Languages</h3>
                    <div className="text-white">
                        <input list="languages" className=" my-4 w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black" />
                        <datalist id="languages">
                            <option value="English"></option>
                            <option value="Hindi"></option>
                            <option value="Bengali"></option>
                            <option value="Telugu"></option>
                            <option value="Marathi"></option>
                            <option value="Tamil"></option>
                        </datalist>
                        <button className='my-4 p-3 bg-white text-black rounded font-bold'>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditLanguages