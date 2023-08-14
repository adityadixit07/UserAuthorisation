import up from "../../Assets/up-arrow.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Navbar from "../../components/Navbar/Newnav/NewNav";

function SellerRegister2({ isAuthenticated, fetchCode, user }) {
  const navigate = useNavigate();
  const profileRoute = `/main/profile/${user?.username || user?.firstName}`;

  const [selectedOptions, setSelectedOptions] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSellerRegistration = () => {
    localStorage.setItem(
      "sellerType",
      JSON.stringify({ serviceType: selectedOptions })
    );
    navigate("/sellerdetails1");
  };

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
      {/* <div className="pt-8 mx-2 md:container md:mx-auto md:px-6 pb-16"> */}
      <div className="container px-6 pt-8 mx-auto pb-20">
        <div className="items-center md:flex">
          <div className="lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                Welcome to eZ!
                {/* <span class="text-green-500 ">solutions !</span> */}
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Unleash your potential, showcase your talents, skills,
                knowledge and offer your services to clients worldwide and
                start earning on eZ.
              </p>

              <div className="mt-6" onClick={() => setClicked(true)}>
                <a href="#continue" className={`${clicked ? "bg-blue-500" : "bg-green-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"} w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-lg lg:w-auto`}>
                  Become an eZer !
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            {/* <img
              className="w-full h-full lg:w-4/12"
              src="https://s3-alpha-sig.figma.com/img/362f/8875/3164a8ed2857846475d7f993eefb2bc5?Expires=1686528000&Signature=nY8FVBQRZUTWjleT2HUl885Xcn-fY57z1ouMEakI8U2En3BkI0Be9fi4TysTa8r4ZvxRmvEI0LMyZtjygW26Mc4PTh0Ji63~ht6OxaaP-KjYr6lJsX5Wide~Y0KVlB5Z2ststillO~K3F8yMy1APXKkBPtjsNTIdQJoTCx-TRdRoyO18L8NP~dbh9mXBlz3HY6h9jjVZICawOnI69bSJKJY1sL6a0fKOlrY2axBGrRcE7gTfTBcjpHVome3UQVNYGGUVrbgdwSltqKuLjHfeMA6wtsYfwoK76bCNQruEkx~cm1rwcwacc4T-bPWOb9Pp-0qz~gWaiRr9HxAx8OCo1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Catalogue-pana.svg"
            /> */}
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
        <div className="text-center mt-10 mb-10" id="continue">
          <h5 className="font-bold" style={{ fontSize: "32px" }}>
            To get started, please select the option that best describes you:
          </h5>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex overflow-x-auto md:flex-wrap justify-between gap-4 sm:gap-10">
            {sellerTypeDetails.map((data, index) => {
              return (
                <article
                  key={index}
                  className={`flex-1 min-w-fit md:min-w-0 md:overflow-hidden hover:shadow-green-200 rounded-lg shadow-lg transition my-4 cursor-pointer ${selectedOptions === data.label
                    ? "border border-green-500"
                    : ""
                    }`}
                  onClick={() => setSelectedOptions(data.label)}
                >
                  <img
                    alt="Living Room"
                    src={data.image}
                    className="h-56 w-full object-cover"
                  />
                  <div className="bg-white p-4 sm:p-6">
                    <time
                      dateTime="2022-11-20"
                      className="block text-xs text-gray-500"
                    >
                      {/* 20th Nov 2022 */}
                    </time>

                    <h3 className="mt-0.5 text-lg text-green-900 font-bold">
                      {data.label}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {data.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-0 lg:mt-6 sm:flex justify-end">
            <div className="mt-3 rounded-lg sm:mt-0">
              <button
                className="flex items-center px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleSellerRegistration}
              >
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
      </div>
    </>
  );
}

const sellerTypeDetails = [
  {
    id: 1,
    image:
      "https://careerlinklehighvalley.org/wp-content/uploads/2023/02/prof-image.jpg",
    // "https://s3-alpha-sig.figma.com/img/d156/bb67/805ab83b61e86cd8dc96b5fdb9bd57a7?Expires=1686528000&Signature=GPiV~5wg9spaNnbtx9fo9jj09JcV-Nccx23G1F6C4TDdwWWuAP0T3gBYH3hAnS~99kEQjhSDg5NowtKxL1h2lDV-sc05Uygamu~tnmXVOSIIR-w6b4ekbjWlEY1pSXKGhi8cIyDd3C9UrTu~U-IBqBEM5acryamFb9fz-iYBOYCCberSzDC3LUGNKBTw8UH1pjJUBZ~fBnsQ0SfID0VaEz8qYT-Z4nzmMggakRCNkQAUegoK8yNPFo2PINRoD6d1jRiUPIU74aCAaFXZ4EkMzkB0zymcC40r0VH9cpfrPamnYA-xYInkGNXRzpvU2uipEBL25ZQ1~Hfzu52zv-yrPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Professional",
    description:
      "Working in Corporate and wants to consult on exciting projects, expand your network, and unlock new opportunities fo...",
  },
  {
    id: 2,
    image:
      "https://desktime.com/blog/wp-content/uploads/2021/06/freelance-boost-1024x708.png",
    // "https://s3-alpha-sig.figma.com/img/9baa/5790/804a9461ba8690f415bb3e982f7d3eea?Expires=1686528000&Signature=MDqvamoytkKlCf4f-r01WivN28lSK1iP6~xTaNNrQ42LJfRbG8b0t0lZfIBTyDcJEC6byO99NORucDeXMinx3QYxiF~KUkTPxfKC2ob~bYKaFcURJxIf78qFlqJNoqMXW2LximZApO7GVXKdkZwi3AWwRTnkIU7fVBjbCrJ8318BzmCWAXKfwkgFWL~z6s5EoYc-dIAUxLgRhgAnWXzm7S~MKgzdiaZ-BdfLmqBm~1lESLd2y27~VD4Qg9D2SbmZfe1i0VFQ3deOr1jD6hMkGUMvz3l-OKaucoo0fN9OW3cy0ZLT2f-JVgXgeoyUX0PGY27MN~wMpnBNQNTgzRdQ5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Freelancer",
    description:
      "Showcase your portfolios, build a reputation, and find rewarding projects that align with your skills, interests and...",
  },
  {
    id: 3,
    image:
      "https://www.asynclabs.co/wp-content/uploads/2020/07/6_reasons_why_you_need_a_social_media_content_creator_illustration-01.jpg",
    // "https://s3-alpha-sig.figma.com/img/d4dc/4a6e/81a0224bd6043b53012b1f379a4641e5?Expires=1686528000&Signature=RahAiFLcpg~D2Up8o-95Scxi41AiAqiIF2O97NrmSzm8~Nme2L3f6OIbwzby-BRtF72LPiDM4Dd36kQZTD~JZXh6aPx1oOG2tk9YGfnKv6yhXtBWKFvS1J076WnefvgIZ0izAooBPfQ6aHOo4h9kj4zzcokdmrmWlSY8IAmtn7cy2R2i3yEr~~AkFBkfJxEcElDosZLzllSq9dD9nm6fPFiu0XXnNOrk2CuKH7ZzsLCCuaf1y3esgr-xs4cqHPraiWA1ZAOG5SwPGuaEmdhmmPtoZqwQXJHvRn4Ua7PluUQphoEe7uUYzpOUSpNPLIuBfdrRx~ycEJ-FA462Urezzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Content Creator",
    description:
      "Connect with brands, advertisers, fellow creators and gain access to valuable wider audience and generate income...",
  },
  {
    id: 4,
    image:
      "https://www.howardyu.org/wp-content/uploads/2022/03/future-ready1.jpg",
    // "https://s3-alpha-sig.figma.com/img/d608/ac20/e2f68d759fb084b2a75f2a5cf82fdf20?Expires=1686528000&Signature=JjfBoMNUY8W8nWyeBxjUy6sXfgluKhAEnsXuszuXIo8tuglvmGTYx1IKbRIghdrp6u0NYD7J2bzKuHDXpnTN3d6CJG8qJl2eNustKvSBfsk8j9Ze3h6AiYHYQJH4mXycOUXTPsyo4SYCXG9V4APSiga56DplQ~JAIHDo1rqoTLuVI92uKYrupRi1fiBjT6hzyk0OKw-ZvID4Rkx~1D8MWMn27WvrXLIooBk-O6D8UREeMTdG7XKH4e-lr~kqjJjz3mc32lgpHsvUYVVw2gE8y8Ltj4dCHGasGYR5tEWUG3dZ9vqgyM~DE9MfveF5lzKFzrMWUpWLTa2ahZLZbk-3QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Business",
    description:
      "Whether you're a startup, small business, or established company, eZ connects you with a diverse community to gain...",
  },
];

export default SellerRegister2;
