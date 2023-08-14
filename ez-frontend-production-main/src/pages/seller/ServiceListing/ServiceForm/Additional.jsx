import React, { useState } from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs"

function Additional() {
    const [name, setname] = useState("")
    const [Email, SetEmail] = useState("")
    const [text, settext] = useState("")
    const [check, setcheck] = useState(null)
    const [question, setquestion] = useState("")
    const [SavedQuestions, setSavedQuestions] = useState([])
    const [questioncheck, setquestioncheck] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setcheck('');
        SetEmail("");
        settext("");
    };

    const handleSaveQuestion = () => {
        if (question.trim() !== '') {
            setSavedQuestions([...SavedQuestions, question]);
            setquestion('');
            setquestioncheck(false)
        }
    };

    return (
        <>
            <div className='my-5'>
                <div className='pb-5'>
                    <h3 className='my-5 text-xl font-bold text-slate-700'>Additional Questions</h3>
                    <h3 className='my-2 text-xl font-bold'>How would you like to list your Service ?</h3>
                    <p className='font-semibold text-slate-600'>We have three selling styles that you can choose from. Decide which one suits your goals and preferences.</p>
                </div>
                <div className='flex gap-3 additinal items-center overflow-x-auto flex-col md:flex-row justify-between'>
                    {["Self-Marketer", "eZ-Advertise", "eZ-Assured", "Advertise"].map((data, i) => {
                        return <div className='relative h-[250px] w-[200px] rounded-xl bg-slate-100' onClick={() => setcheck(i)}>
                            <div className='w-full h-[180px] bg-slate-200 rounded-lg flex flex-col justify-end items-center text-base font-bold '>
                                <h3 className='text-base items-baseline'>{data}</h3>
                            </div>
                            <BsFillCheckCircleFill className={`absolute ${check === i ? " " : "hidden"} z-20 -top-1 -right-1 fill-green-600`} size={35} />

                        </div>
                    })}
                </div>

                {/* <div className="flex flex-col gap-4 py-10">
                    <h4 className="text-base font-bold">Purchasing Power Parity </h4>
                    <p className="md:w-[40%] w-full text-xs">Charge customers different amounts  depending on the cost of living in their country. <span className="border-b font-semibold text-black border-black">Learn more</span></p>
                    <div className="flex gap-3 items-center">
                        <div className="box">
                            <input id="checkbox" className="hidden" type="checkbox" />
                            <label htmlFor="checkbox" className="checking block w-4 h-4 rounded-full cursor-pointer transition-all absolute top-0 left-0 bg-[#333333]"></label>
                        </div>
                        <h3 className="text-xs font-semibold">Enable location wise dynamic pricing</h3>
                    </div>
                </div> */}

                <div className='py-5'>
                    <h1 className='font-bold'> Questions for Attendee</h1>
                    <form onSubmit={handleSubmit} className=" py-4">
                        <div className='md:w-[40%] bg-slate-200 p-3 flex flex-col gap-4'>
                            <div className='pb-5 flex flex-col gap-4'>

                                <label htmlFor="name" className='text-slate-500'>Name*</label>
                                <input type="text" name={name} value={name} onChange={(e) => setname(e.target.value)} className="w-full p-2.5  text-sm rounded-[5px]" placeholder='Name' />
                            </div>
                            <div className='pb-5 flex flex-col gap-4'>

                                <label htmlFor="email" className='text-slate-500'>Email*</label>
                                <input type="text" name={Email} value={Email} onChange={(e) => SetEmail(e.target.value)} className="w-full p-2.5  text-sm rounded-[5px]" placeholder="Email " />
                            </div>
                            <h3 className='text-slate-500'>Add Guests</h3>
                        </div>
                        <div className='md:w-[40%]'>

                            <label htmlFor="ourself" className='text-slate-700'> Please share anything that will help prepare for our meeting</label>
                            <textarea
                                id="textarea"
                                cols="30"
                                rows="5"
                                className=' w-full p-2.5 border rounded-xl'
                                value={text}
                                onChange={(e) => settext(e.target.value)}
                            />
                            <div className='relative'>
                                <h3 className='text-blue-600 cursor-pointer' onClick={() => setquestioncheck(!questioncheck)}>+ Add New Question</h3>
                                <input type="text" className={`${questioncheck ? " " : "hidden"} border w-full p-2.5  text-sm rounded-[5px] `} placeholder='please Write your question!' name="" value={question} onChange={(e) => setquestion(e.target.value)} />
                                <button className={`px-3 my-1 mx-4 py-1  bg-blue-400 text-center rounded-[10px] ${questioncheck ? "" : "hidden"}`} onClick={handleSaveQuestion}>Save</button>
                                <ul className='flex flex-col  gap-1'>

                                    {SavedQuestions.map((savedQuestion, index) => (
                                        <li className='px-3 list-none text-sm font-semibold text-blue-900' key={index}>{index + 1}. {savedQuestion} ?</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Additional
