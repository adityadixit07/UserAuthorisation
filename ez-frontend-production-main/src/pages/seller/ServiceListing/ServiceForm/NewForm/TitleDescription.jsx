import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import ReactQuill from 'react-quill'

const TitleDescription = ({ itemTitle, setItemTitle, handleEditorChange, modules }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <label htmlFor="title" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center"><HiOutlinePencilSquare className='' size={35} />Title</h2></label>
                <input type="text" value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} id="title" aria-describedby="helper-text-explanation" className="w-full md:w-[40%] bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Best One Liner to describe what you are offering ! " />
            </div>

            <div className="flex flex-col gap-4">
                <label htmlFor="description" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center"><FaMailBulk className='fill-green-500' size={35} />Description</h2></label>
                <ReactQuill theme="snow" onChange={handleEditorChange} modules={modules} className="md:w-[70%] w-full  customeditor" />
                {/* <div className="md:w-[70%] w-full "><div dangerouslySetInnerHTML={{ __html: quil }} className="w-full"></ div></div> */}
            </div>
            
        </>
    )
}

export default TitleDescription