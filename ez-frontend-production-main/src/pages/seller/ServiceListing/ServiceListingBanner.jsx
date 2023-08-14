import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function ServiceListingBanner() {
  const { isAuthenticated, error, user } = useSelector((state) => state.user);

  return (
    <>
      <section className='section1 m-0 flex justify-between px-4'>
        <div className='w-full md:w-1/2 flex justify-evenly items-center'>
          <div className='md:w-[150px] md:h-[150px] w-auto h-auto flex items-center justify-center rounded-full p-1.5 border-2 relative'>
            <div className="w-24 h-24 translate-x-0.5 -translate-y-0.5 borderblob overflow-hidden">
              <img className='bg-cover brightness-95' src={user?.avatar
                ? user?.avatar?.url
                : "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="" />
            </div>
          </div>
          <h1 className='font-bold text-2xl md:text-5xl'>{`${user ? user.firstName : "Lorem"} ${user ? user.lastName : "Ipsum"}`}</h1>
        </div>
        <div className='hidden md:block w-1/2 overflow-hidden borderbt h-[150px]'>
          <img className='bg-cover -translate-y-10 bg-no-repeat bg' src={`https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`} alt="" />
        </div>
      </section>

    </>
  )
}

export default ServiceListingBanner
