import React, { useState } from 'react'

const Questions = ({ name, setName, email, setEmail, question, setQuestion, savedQuestions, handleSaveQuestion, tab }) => {
    const [questionCheck, setQuestionCheck] = useState(false);
    const [addGuest, setAddGuest] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <div className={tab === 3 ? "pt-5" : "py-5"}>
            <div className={`bg-slate-200 px-3 py-4 flex flex-col gap-4 ${!addGuest ? "rounded-lg w-[250px] flex items-center justify-center" : "md:w-[40%]"}`}>
                <h3 className={`text-slate-500 ${!addGuest && "cursor-pointer"}`} onClick={() => setAddGuest(true)}>
                    {addGuest ? "Guest Details" : "Add Guest"}
                </h3>
                {addGuest && (
                    <>
                        <div className='pb-5 flex flex-col gap-4'>
                            <label htmlFor="name" className='text-slate-500'>Name*</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2.5  text-sm rounded-[5px]" placeholder='Name' />
                        </div>
                        <div className='pb-5 flex flex-col gap-4'>

                            <label htmlFor="email" className='text-slate-500'>Email*</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2.5  text-sm rounded-[5px]" placeholder="Email " />
                        </div>
                        <h3 className='text-slate-500 cursor-pointer' onClick={() => {
                            setAddGuest(false);
                            setName("");
                            setEmail("");
                        }}>
                            Remove Guest
                        </h3>
                    </>
                )}
            </div>

            <div className="pt-8">
                {tab !== 3 && <h1 className='font-bold'>Questions for Attendee</h1>}
                <div className='md:w-[40%]'>
                    <label htmlFor="ourself" className='text-slate-700'>Please share anything that will help prepare for our meeting</label>
                    {/* <textarea
                        id="textarea"
                        cols="30"
                        rows="5"
                        className=' w-full p-2.5 border rounded-xl'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    /> */}
                    <div className='relative'>
                        <h3 className='text-blue-600 cursor-pointer' onClick={() => {
                            setClicked(true);
                            setQuestionCheck(!questionCheck);
                        }}>
                            {!clicked ? "+ Add" : "+ Add new question"}
                        </h3>
                        {/* <input type="text" className={`${questionCheck ? " " : "hidden"} border w-full p-2.5  text-sm rounded-[5px] `} placeholder='Write your question here!' value={question} onChange={(e) => setQuestion(e.target.value)} /> */}
                        <textarea
                            placeholder='Write your question here!'
                            id="textarea"
                            cols="30"
                            rows="5"
                            className={`${questionCheck ? " " : "hidden"} w-full p-2.5 border rounded-xl`}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <button className={`px-3 my-1 mx-4 py-1  bg-blue-400 text-center rounded-[10px] ${questionCheck ? "" : "hidden"}`} type='button' onClick={handleSaveQuestion}>Add</button>
                        <ul className='flex flex-col  gap-1'>
                            {savedQuestions.map((savedQuestion, index) => (
                                <li className='px-3 list-none text-sm font-semibold text-blue-900' key={index}>{index + 1}) {savedQuestion}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Questions