import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import up from "../../Assets/up-arrow.png";
import Mobile from "../../Assets/ezmobile.png";
function SellerRegister2() {
  // const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <Navbar />
        {/* <sellerlandpart /> */}
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Welcome to eZ!
                  {/* <span class="text-green-500 ">solutions !</span> */}
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Unleash your potential, showcase your talents, skills,
                  knowledge and offer your services to clients worldwide and
                  start earning on eZ.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Become an eZer !
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://s3-alpha-sig.figma.com/img/362f/8875/3164a8ed2857846475d7f993eefb2bc5?Expires=1686528000&Signature=nY8FVBQRZUTWjleT2HUl885Xcn-fY57z1ouMEakI8U2En3BkI0Be9fi4TysTa8r4ZvxRmvEI0LMyZtjygW26Mc4PTh0Ji63~ht6OxaaP-KjYr6lJsX5Wide~Y0KVlB5Z2ststillO~K3F8yMy1APXKkBPtjsNTIdQJoTCx-TRdRoyO18L8NP~dbh9mXBlz3HY6h9jjVZICawOnI69bSJKJY1sL6a0fKOlrY2axBGrRcE7gTfTBcjpHVome3UQVNYGGUVrbgdwSltqKuLjHfeMA6wtsYfwoK76bCNQruEkx~cm1rwcwacc4T-bPWOb9Pp-0qz~gWaiRr9HxAx8OCo1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Catalogue-pana.svg"
              />
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
          <div className="text-center mt-10 mb-10">
            <h5 className="font-bold" style={{ fontSize: "32px" }}>
              To get started, please select the option that best describes you:
            </h5>
          </div>

          {/* <div className="flex flex-wrap justify-between sm:flex-col"> */}
          <div className="flex flex-wrap justify-between flex-col sm:flex-row">
            <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
              <img
                alt="Living Room"
                src="https://s3-alpha-sig.figma.com/img/d156/bb67/805ab83b61e86cd8dc96b5fdb9bd57a7?Expires=1686528000&Signature=GPiV~5wg9spaNnbtx9fo9jj09JcV-Nccx23G1F6C4TDdwWWuAP0T3gBYH3hAnS~99kEQjhSDg5NowtKxL1h2lDV-sc05Uygamu~tnmXVOSIIR-w6b4ekbjWlEY1pSXKGhi8cIyDd3C9UrTu~U-IBqBEM5acryamFb9fz-iYBOYCCberSzDC3LUGNKBTw8UH1pjJUBZ~fBnsQ0SfID0VaEz8qYT-Z4nzmMggakRCNkQAUegoK8yNPFo2PINRoD6d1jRiUPIU74aCAaFXZ4EkMzkB0zymcC40r0VH9cpfrPamnYA-xYInkGNXRzpvU2uipEBL25ZQ1~Hfzu52zv-yrPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
                    Professional
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Working in Corporate and wants to consult on exciting
                  projects, expand your network, and unlock new opportunities
                  for monetizing knowledge.
                </p>
              </div>
            </article>

            <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
              <img
                alt="Bedroom"
                src="https://s3-alpha-sig.figma.com/img/9baa/5790/804a9461ba8690f415bb3e982f7d3eea?Expires=1686528000&Signature=MDqvamoytkKlCf4f-r01WivN28lSK1iP6~xTaNNrQ42LJfRbG8b0t0lZfIBTyDcJEC6byO99NORucDeXMinx3QYxiF~KUkTPxfKC2ob~bYKaFcURJxIf78qFlqJNoqMXW2LximZApO7GVXKdkZwi3AWwRTnkIU7fVBjbCrJ8318BzmCWAXKfwkgFWL~z6s5EoYc-dIAUxLgRhgAnWXzm7S~MKgzdiaZ-BdfLmqBm~1lESLd2y27~VD4Qg9D2SbmZfe1i0VFQ3deOr1jD6hMkGUMvz3l-OKaucoo0fN9OW3cy0ZLT2f-JVgXgeoyUX0PGY27MN~wMpnBNQNTgzRdQ5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
                    Freelancer
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Showcase your portfolios, build a reputation, and find
                  rewarding projects that align with your skills, interests and
                  experience, Offer your specialized services.
                </p>
              </div>
            </article>
            <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
              <img
                alt="Bedroom"
                src="https://s3-alpha-sig.figma.com/img/d4dc/4a6e/81a0224bd6043b53012b1f379a4641e5?Expires=1686528000&Signature=RahAiFLcpg~D2Up8o-95Scxi41AiAqiIF2O97NrmSzm8~Nme2L3f6OIbwzby-BRtF72LPiDM4Dd36kQZTD~JZXh6aPx1oOG2tk9YGfnKv6yhXtBWKFvS1J076WnefvgIZ0izAooBPfQ6aHOo4h9kj4zzcokdmrmWlSY8IAmtn7cy2R2i3yEr~~AkFBkfJxEcElDosZLzllSq9dD9nm6fPFiu0XXnNOrk2CuKH7ZzsLCCuaf1y3esgr-xs4cqHPraiWA1ZAOG5SwPGuaEmdhmmPtoZqwQXJHvRn4Ua7PluUQphoEe7uUYzpOUSpNPLIuBfdrRx~ycEJ-FA462Urezzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
                    Content Creator
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Connect with brands, advertisers, fellow creators and gain
                  access to valuable wider audience and generate income from
                  influencing your audience.
                </p>
              </div>
            </article>
            <article className="flex-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-4 my-4">
              <img
                alt="Bedroom"
                src="https://s3-alpha-sig.figma.com/img/d608/ac20/e2f68d759fb084b2a75f2a5cf82fdf20?Expires=1686528000&Signature=JjfBoMNUY8W8nWyeBxjUy6sXfgluKhAEnsXuszuXIo8tuglvmGTYx1IKbRIghdrp6u0NYD7J2bzKuHDXpnTN3d6CJG8qJl2eNustKvSBfsk8j9Ze3h6AiYHYQJH4mXycOUXTPsyo4SYCXG9V4APSiga56DplQ~JAIHDo1rqoTLuVI92uKYrupRi1fiBjT6hzyk0OKw-ZvID4Rkx~1D8MWMn27WvrXLIooBk-O6D8UREeMTdG7XKH4e-lr~kqjJjz3mc32lgpHsvUYVVw2gE8y8Ltj4dCHGasGYR5tEWUG3dZ9vqgyM~DE9MfveF5lzKFzrMWUpWLTa2ahZLZbk-3QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
                    Business
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Whether you're a startup, small business, or established
                  company, eZ connects you with a diverse community to gain
                  exposure to potential clients.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-0 lg:mt-6 max-w-7xl sm:flex justify-end">
            <div className="mt-3 rounded-lg sm:mt-0">
              <button className="flex items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <img
                  src={up}
                  alt="Arrow Icon"
                  className="mr-2 h-5 w-5 text-white"
                />
                Become an eZer!
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default SellerRegister2;
