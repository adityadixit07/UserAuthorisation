import React from 'react'
// import {article} from "./TrendingNews"
import TrendingData from "./trendingData.json";


function LeftTrendingNews() {
  return (
   <>
   <section className='w-full flex flex-col gap-4 mt-5'>
              <h2 className='font-semibold'>MORE FROM MEDIUM</h2>

              {

              TrendingData.map((data) => {

                  return <div className='flex flex-col' key={data.id}>
                    <div className="flex gap-3 md:gap-4 items-center">
                      <div className="w-8 h-8 overflow-hidden rounded-[9999px]  relative">
                        <img
                          src={
                            "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          }
                          className=""
                          alt=""
                        />
                      </div>
                      <h4 className="font-medium text-sm text-slate-600">{data.name}</h4>
                    </div>
                    <div className='flex md:justify-around w-full'>
                      <h2 className=' font-bold text-base md:w-[70%]'>{data.heading}</h2>
                      <div className='w-[20%] hidden md:block h-20 overflow-hidden rounded-[10px] relative'>
                        <img src={'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} className='w-20' alt="" />
                      </div>
                    </div>

                  </div>
                })
              }
            </section>
            </>
  )
}

export default LeftTrendingNews
