import up from "../../assets/up-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Newnav/NewNav";
import UserNavbar from "../../components/Navbar/UserNavbar";
import { useEffect } from "react";

function SellerLanding({ isAuthenticated, fetchCode, user }) {
  const navigate = useNavigate();
  const profileRoute = `/main/profile/${user?.username || user?.firstName}`;

  useEffect(() => {
    if (isAuthenticated && user?.role === "seller") {
      navigate("/seller");
    }
  }, [isAuthenticated, user?.role]);

  return (
    <>
      <div className="w-full sticky top-0 z-50 shadow h-[10vh] bg-white">
        {!isAuthenticated ? <Navbar /> : (
          <UserNavbar
            fetchCode={fetchCode}
            profileRoute={profileRoute}
            isAuthenticated={isAuthenticated}
            user={user}
          />
        )}
      </div>
      <div className="container px-6 pt-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                Join the eZ revolution, and start monetizing <br /> your{" "}
                <span className="text-green-500 ">solutions !</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                As a seller on eZ, you'll be able to showcase your skills,
                monetize your knowledge and expertise to a wider audience and
                earn money doing what you love.
              </p>

              <div className="w-fit mt-6 px-5 py-2 bg-green-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <Link
                  to={"/welcomeezer"}
                  className="w-full text-sm tracking-wider text-white transition-colors duration-300 transform"
                >
                  Become an eZer!
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://s3-alpha-sig.figma.com/img/9f13/716c/4c0832e23b2698f6d4ccac23aee2fca6?Expires=1686528000&Signature=EwV94hzSM7tVwYg4qbJMHNqcNsZjDyHTAEMWitO9q1MbJW0D~bM50bxdgT0fYSD90jVlRqOFuyzK~pkP7R5621XxQMV-o1KSZy2mbJFa5p8m5e6NhyRv7~cMjYSkPVbBV2ogqLgkX7Cm659Ax0Pbj~yXHSbQ7l7VMv9acrcvNbwOO~oBUNohcNi~dAGNg6vsJ6BEOmrKJvwZzfrd8O4CzwCyKC9HaZtG0z6IbI28xa7xN3SA8zeaT~79FHhKA7kKKeSCmXsXaW0hGWcaRCzK0Wa~FcwMTBxZD-A4VH-0dRT8N1W997jUEhpVMUN~4c-LutQM3qOxvP8T4BS4kps8tQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Catalogue-pana.svg"
            />
          </div> */}
        </div>

        <div className="flex flex-col">
          <div className="text-center mt-10 mb-10">
            <h5 className="font-bold" style={{ fontSize: "32px" }}>
              See how it Works :
            </h5>
          </div>
          <div className="flex flex-wrap justify-between flex-col sm:flex-row">
            <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
              <img
                alt="Living Room"
                src="https://images.unsplash.com/photo-1684023010438-1108c12e2c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                className="h-56 w-full object-cover"
              />
              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-11-20"
                  className="block text-xs text-gray-500"
                >
                  {/* 20th Nov 2022 */}
                </time>
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-green-900 font-bold">
                    Sign up:
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Create your account by filling out some basic information
                  about yourself, such as your name, email address, and
                  location.
                </p>
              </div>
            </article>

            <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
              <img
                alt="Bedroom"
                src="https://images.unsplash.com/photo-1683735825231-d1c3d47f4a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                className="h-56 w-full object-cover"
              />
              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-12-15"
                  className="block text-xs text-gray-500"
                >
                  {/* 15th Dec 2022 */}
                </time>
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-green-900 font-bold">
                    Set up your profile:
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  This is where you showcase your skills, experience, education,
                  and achievements. Make your profile more attractive and
                  professional.
                </p>
              </div>
            </article>
            <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
              <img
                alt="Bedroom"
                src="https://images.unsplash.com/photo-1683958467836-6940e0e0691b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                className="h-56 w-full object-cover"
              />
              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-12-15"
                  className="block text-xs text-gray-500"
                >
                  {/* 15th Dec 2022 */}
                </time>
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-green-900 font-bold">
                    List your services:
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Sell your have that people might need, and create listings
                  that describe your services in detail. You can set your own
                  prices, and offer different packages or add-ons to make your
                  services more attractive.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="text-center mt-10">
          <h5 className="font-bold" style={{ fontSize: "32px" }}>
            Why Sell on eZ ?
          </h5>
        </div>
        <section>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
              <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                    <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative">
                      <img
                        className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1683780777629-7b75e7016acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                  {" "}
                  No Commission{" "}
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  Sell at 0 % Commission
                </h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                  You can sell and host a variety of offering on your
                  website.Ranging from courses, workshops, appointments to
                  communities and affiliate products - you can sell it all!
                  All this at 0% cut
                </p>
                <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button className="flex items-center px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <img
                        src={up}
                        alt="Arrow Icon"
                        className="mr-2 h-5 w-5 text-white"
                      />
                      Become an eZer!
                    </button>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12">
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100 gap-x-60">
                    <div className="flex flex-col px-4 py-8 text-center">
                      <dt className="order-last text-lg font-medium text-gray-500">
                        Average Savings Per Customer
                      </dt>
                      <dd className="text-4xl text-black-600 md:text-5xl">
                        $1200
                      </dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                      <dt className="order-last text-lg font-medium text-gray-500">
                        Currencies Supported
                      </dt>
                      <dd className="text-4xl text-black-600 md:text-5xl">
                        135
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pb-16" style={{ fontFamily: "Lato, sans-serif" }}>
          <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div>
              <div
                role="contentinfo"
                className="flex items-center flex-col px-4"
              >
                <p
                  tabIndex="0"
                  className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4"
                >
                  in few easy steps
                </p>
                <h1
                  tabIndex="0"
                  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
                >
                  Create Beautiful Landing Pages &amp; Web Apps in a Jiffy
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-10 px-4">
                <div
                  tabIndex="0"
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                          alt="drawer"
                        />
                      </div>
                    </div>
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                    >
                      Ready to use components
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      It provides a very simple start, no need to write a lot
                      of code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  aria-label="card 2"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                          alt="check"
                        />
                      </div>
                    </div>
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      High-Quality UI you can rely on
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Modify the visual appearance of your site – including
                      colors, fonts, margins, and other style-related
                      properties – with a sophisticated style.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  aria-label="card 3"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                          alt="html tag"
                        />
                      </div>
                    </div>
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Coded by Developers for Developers
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Instead of just giving you the tools to create your own
                      site, they offer you a list of themes you can choose
                      from. Thus a handy product.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {/* <img src={Mobile} alt="wjkdkj" className="w-60 h-auto" /> */}
                </div>
                <div
                  tabIndex="0"
                  aria-label="card 4"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                          alt="monitor"
                        />
                      </div>
                    </div>
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      The Last UI kit you’ll ever need
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      We have chosen the bright color palettes that arouse the
                      only positive emotions. The kit that simply assures to
                      be loved by everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default SellerLanding;
