import React from 'react';

function ServiceListingBanner({ profile }) {
  return (
    <>
      <section className='section1 m-0 flex justify-between px-4'>
        <div className='w-full md:w-1/2 flex justify-evenly items-center'>
          <div className="flex items-center justify-center">
            <img
              className='md:w-[150px] md:h-[150px] w-auto h-auto rounded-full border-2 p-2 brightness-95'
              src={profile?.avatar?.url || "/icon.png"}
              alt=""
            />
          </div>
          <h1 className='font-bold text-2xl md:text-5xl'>
            {profile?.firstName} {profile?.lastName}
          </h1>
        </div>
        <div className='hidden md:block w-1/2 overflow-hidden borderbt h-[150px]'>
          <img className='bg-cover -translate-y-10 bg-no-repeat bg' src={`https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`} alt="" />
        </div>
      </section>

    </>
  )
}

export default ServiceListingBanner
