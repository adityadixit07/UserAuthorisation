import React from "react"
export default function GlassCard(props) {
    return (
        <>
            <div className="w-full md:w-1/2 grid grid-col-2 rounded-2xl bg-emerald-300 backdrop-blur-lg shadow-xl shadow-green-700 bg-opacity-20  border-4 border-green-300"> 
                <h1 className="font-bold text-xl p-4 font-700 text-emerald-800 md:text-3xl">{props.text}
                    {" "}<span className="bg-green-400 text-white font-bold rounded-lg hover:bg-green-800">{props.main}</span>{" "}
                    {props.endText}</h1>
                <div className="flex flex-row justify-between">
                    <div className='flex flex-col px-4'>
                        <a href="/" className="underline py-6 cursor underline-offset-4 text-xl font-bold text-emerald-800 hover:text-green-300 md:text-2xl">{props.name} {" "}</a>
                        <p className='text-emerald-800 font-bold text-2xl hover:text-green-500'>{props.position}</p>
                        <p className="text-green-800 font-bold text-2xl hover:text-green-500">{props.brand}</p>
                    </div>
                    <img src={props.image} alt='pic' className='w-[5rem] md:w-[15rem] flex justify-end' />
                </div>
            </div>
        </>
    )
}