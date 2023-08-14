import Navbar from "../../components/Navbar/Navbar";
import welcome from "../../Assets/explore-icons/Welcome-amico.svg";
function WelcomeEz() {
  return (
    <>
      <Navbar />
      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl text-center md:text-start font-semibold text-gray-800  lg:text-5xl">
                Welcome to eZ!
              </h1>

              <p className="mt-10 text-center md:text-start text-slate-600 font-semibold text-base md:text-xl ">
                Unleash your potential, showcase your talents, skills, knowledge
                and offer your services to clients worldwide and start earning
                on eZ.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={welcome}
              alt="Welcome"
            />
          </div>
        </div>
        <div className="py-5 px-1">
          <h1 className=" md:text-start font-semibold text-3xl text-gray-800  lg:text-5xl">
            To get started, please select the option that best describes you:
          </h1>
        </div>
        <div className="flex flex-wrap justify-between gap-10 flex-col sm:flex-row">
          {[0, 1, 2].map(() => {
            return (
              <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
                <img
                  alt="Living Room"
                  src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  className="h-56 w-full object-cover"
                />
                <div className="bg-white p-4 sm:p-6">
                  <h3 className="mt-0.5 text-lg text-green-700 font-semibold">
                    Professional
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="lg:flex lg:items-end lg:justify-end">
          <button className="w-full text-end px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Become an eZer !
          </button>
        </div>
      </div>
    </>
  );
}

export default WelcomeEz;
