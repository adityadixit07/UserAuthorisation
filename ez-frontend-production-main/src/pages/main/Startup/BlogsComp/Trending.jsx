import React from 'react'


const trending = ["Should there be Universal Basic Income ? ", "Apple’s first-ever retail store in India to open this month", "‘Biggest startup scandal’:", "‘Biggest startup scandal’:"]

function Trending() {
    return (
        <>
            <section className='section3 p-2 grid grid-cols-2 gap-5 md:flex md:gap-10'>
                {
                    trending.map((data, index) => {
                        return <div className=" w-auto h-auto overflow-hidden rounded-[10px] relative" key={index}>
                            <img src={'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} className='bg-cover z-0 brightness-50' alt="" />
                            <p className=' text-slate-100 absolute bottom-0 left-6 text-base text-center md:text-lg font-semibold'>{data}</p>
                        </div>
                    })
                }
            </section>
        </>
    )
}

export default Trending;
