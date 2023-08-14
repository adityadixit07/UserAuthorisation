import React from 'react'

function EditCertificates() {
    const editSectionCertificate = () => {
        // console.log(document.getElementById('editSectionCertificate').style.display);
        document.getElementById('editSectionCertificate').style.display == "flex" ?
            document.getElementById('editSectionCertificate').style.display = "none" :
            document.getElementById('editSectionCertificate').style.display = "flex";
    }
    return (
        <div id="editSectionCertificate" style={{ "display": "none" }} className='h-[90vh] w-[100vw] fixed flex-col items-center justify-center top-[10vh] left-0 bg-[rgba(255,255,255,0.5)]'>
            <div className='w-[50vw] flex flex-col items-center'>
                <button onClick={editSectionCertificate} className="bg-white text-[#003902] font-bold w-[50px] h[50px] border-4 border-[#003902] rounded-full absolute top-[0vh]">
                    X
                </button>
                <div className='rounded w-full bg-[#302D2D] flex flex-col items-center p-5'>
                    <h3 className='text-2xl text-center text-white font-bold'>Edit Certificate</h3>
                    <div className="text-white">
                        <div className="my-4">
                            <label htmlFor="" className="me-2">Title</label><input className="w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black" type="text" placeholder="" />
                        </div>
                        <div className="my-4">
                            <label htmlFor="" className="me-2">Year obtained</label><input className="w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black" type="number" min="1900" max="2099" step="1" placeholder="" />
                        </div>
                        <button className='my-4 p-3 bg-white text-black rounded font-bold'>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCertificates