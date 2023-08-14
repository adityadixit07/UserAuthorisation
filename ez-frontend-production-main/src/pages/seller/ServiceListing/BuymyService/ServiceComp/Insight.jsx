import React from 'react'

function Insight() {
    return (
        <>
            <div className='w-full flex flex-col py-10 px-6 bg-slate-50 border-b-[8px]'>
                <h1 className='text-lg font-medium text-slate-800 py-2'>Insights</h1>
                <h2 className='text-lg font-medium text-slate-400 py-1'><span className='text-lg inline-block relative text-orange-500 animatesli after:h-[1px] after:bg-orange-500'>Freelancer</span>&nbsp; Buyer</h2>
                <div className='w-full flex flex-col gap-1 pb-4 text-slate-600'>
                    <div className='w-full flex justify-between'>
                        <h3>Projects worked on</h3> <span>1778</span>
                    </div>
                    <div className='w-full flex justify-between'>
                        <h3>Buyers worked with</h3> <span>1199</span>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-1 text-slate-600'>
                    <div className='w-full flex justify-between'>
                        <h3>last active</h3> <span>Apr 19 2023</span>
                    </div>
                    <div className='w-full flex justify-between'>
                        <h3>Response time</h3> <span>Within a few days</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Insight
