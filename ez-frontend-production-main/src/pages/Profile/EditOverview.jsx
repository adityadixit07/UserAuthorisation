import React from 'react'

function EditOverview() {
    const editSectionOverview = () => {
        // console.log(document.getElementById('editSectionOverview').style.display);
        document.getElementById('editSectionOverview').style.display == "flex" ?
            document.getElementById('editSectionOverview').style.display = "none" :
            document.getElementById('editSectionOverview').style.display = "flex";
    }
    return (
        <div id="editSectionOverview" style={{ "display": "none" }} className='h-[90vh] w-[100vw] fixed flex-col items-center justify-center top-[10vh] left-0 bg-[rgba(255,255,255,0.5)]'>
            <div className='w-[50vw] flex flex-col items-center'>
                <button onClick={editSectionOverview} className="bg-white text-[#003902] font-bold w-[50px] h[50px] border-4 border-[#003902] rounded-full absolute top-[10vh]">
                    X
                </button>
                <div className='rounded w-full bg-[#302D2D] flex flex-col items-center p-5'>
                    <h3 className='text-2xl text-center text-white font-bold'>Edit Bio</h3>
                    <textarea name="editSectionOverviewInput" className='w-full h-32 border p-3 border-green-800 mt-2 focus:outline-none focus:border-green-600 rounded-md text-black'>
                    </textarea>
                    <button className='my-4 p-3 bg-white text-black rounded font-bold'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditOverview