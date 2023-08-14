/* eslint-disable react/prop-types */
import eZAzure from '../../../../assets/profile-img/assured-icon.png';

function ServiceProvider({ user, avatar }) {
  return (
    <>
      <section className="section1 m-0 bg-gray-50 flex justify-between px-16 py-6">
        <div className="w-full md:w-1/2 flex justify-evenly items-center">
          <div className="flex items-center justify-center">
            <img
              className="md:w-[150px] md:h-[150px] w-auto h-auto rounded-full border-2 p-2 brightness-95"
              src={avatar || "/logo.png"}
              alt="My Avatar"
            />
          </div>
          <h1 className="font-bold text-2xl md:text-5xl">
            {user ? user?.firstName + " " + user?.lastName : ""}
          </h1>
        </div>
        <div className="hidden  flex-row  md:flex w-1/2 overflow-hidden borderbt h-[150px]">
          <img src={eZAzure} className='absolute w-[5%] z-10' />
          <img
            className="relative"
            src={`https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default ServiceProvider;
