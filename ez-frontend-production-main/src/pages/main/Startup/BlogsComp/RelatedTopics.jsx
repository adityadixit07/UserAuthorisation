import React from 'react'

const trend = ["Programming", "Growth", "Programming", "Startup", "Artificial Intelligence", "marketing", "Developer Tools", "Tech", "Robotics"]
function RelatedTopics() {
    return (
        <>
            <h2 className='font-bold' >Related Topics</h2>
            <div className='flex flex-wrap gap-3'>
                {
                    trend.map((trends, index) => {
                        return <button className='p-1.5 bg-[#F2F2F2] rounded-[10px] text-[15px] font-medium' key={index}>{trends}</button>
                    })
                }

            </div>
            <button type="button" className='text-sm font-medium text-green-500' >See more topics</button>
        </>
    )
}

export default RelatedTopics
