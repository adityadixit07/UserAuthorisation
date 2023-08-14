// import { useState } from "react";

// const ServicesBox = () => {
//   const [activeIndex, setActiveIndex] = useState(-1);

//   const services = [
//     {
//       title: "Grow your audience",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.",
//       image:
//         "https://images.unsplash.com/photo-1534140863706-1f0d586168f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1786&q=80",
//     },
//     {
//       title: "Grow your audience even more",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit vel lorem pulvinar, vel ultrices leo dictum. Donec id massa vel purus laoreet scelerisque vel eu lorem.",
//       image:
//         "https://images.unsplash.com/photo-1536850371245-97c1f6ad5c49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//     },
//     {
//       title: "Take your audience to the next level",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit vel lorem pulvinar, vel ultrices leo dictum. Donec id massa vel purus laoreet scelerisque vel eu lorem.",
//       image:
//         "https://images.unsplash.com/photo-1548092805-9370c64b1599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
//     },
//   ];

//   const handleClick = (index) => {
//     setActiveIndex(activeIndex === index ? -1 : index);
//   };

//   return (
//     <div className="bg-white">
//       <section>
//         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
//           < div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
//             <div className="relative h-96 lg:flex-1 overflow-hidden rounded-lg">
//               <img
//                 alt={services[activeIndex]?.title || "Party"}
//                 src={services[activeIndex]?.image || services[0].image}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             </div>

//             <div className="flex flex-col lg:flex-1">
//               {services.map((service, index) => (
//                 <div key={service.title} className="mb-16">
//                   <h2
//                     className="text-3xl font-bold sm:text-4xl cursor-pointer"
//                     onClick={() => handleClick(index)}
//                   >
//                     {service.title}
//                   </h2>

//                   {activeIndex === index && (
//                     <>
//                       <p className="mt-4 text-gray-600">
//                         {service.description}
//                       </p>
//                       <hr className="border-gray-300 my-4" />
//                     </>
//                   )}
//                 </div>
//               ))}
//         </div>
//           </div>
//         </div>
import { useState } from "react";

const ServicesBox = () => {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeImgUrl, setActiveImgUrl] = useState("");

  const handleClick = (title, imgUrl) => {
    if (title === activeTitle) {
      setActiveTitle("");
      setActiveImgUrl("");
    } else {
      setActiveTitle(title);
      setActiveImgUrl(imgUrl);
    }
  };

  return (
    <div className="bg-white w-full">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            <div className="relative h-96 lg:flex-1 overflow-hidden rounded-lg">
              <img
                alt="Party"
                src={
                  activeImgUrl ||
                  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col lg:flex-1">
              <div className="mb-8">
                <h2
                  className={`text-3xl font-bold sm:text-4xl cursor-pointer ${
                    activeTitle === "Grow your audience" && "text-green-600"
                  }`}
                  onClick={() =>
                    handleClick(
                      "Grow your audience",
                      "https://images.unsplash.com/photo-1683797465484-109681506e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    )
                  }
                >
                  Grow your audience
                  
                </h2>
                <hr className="border-gray-300 my-4" style={{ borderWidth: '1px' }} />


                {activeTitle === "Grow your audience" && (
                  <>
                    <p className="mt-4 text-gray-600">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aut qui hic atque tenetur quis eius quos ea neque sunt,
                      accusantium soluta minus veniam tempora deserunt?
                      Molestiae eius quidem quam repellat.
                    </p>
                    
                  </>
                )}
              </div>
              <div className="mb-8">
                <h2
                  className={`text-3xl font-bold sm:text-4xl cursor-pointer ${
                    activeTitle === "Grow your audience more" && "text-green-600"
                  }`}
                  onClick={() =>
                    handleClick(
                      "Grow your audience more",
                      "https://plus.unsplash.com/premium_photo-1666264200751-8a013663a89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    )
                  }
                >
                  Grow your audience more
                </h2>
                <hr className="border-gray-300 my-4" style={{ borderWidth: '1px' }} />
                {activeTitle === "Grow your audience more" && (
                  <>
                    <p className="mt-4 text-gray-600">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aut qui hic atque tenetur quis eius quos ea neque sunt,
                      accusantium soluta minus veniam tempora deserunt?
                      Molestiae eius quidem quam repellat.
                    </p>
                    {/* <hr className="border-gray-300 my-4" /> */}
                  </>
                )}
              </div>
              <div className="mb-8">
                <h2
                  className={`text-3xl font-bold sm:text-4xl cursor-pointer ${
                    activeTitle === "Grow your audience even more" && "text-green-600"
                  }`}
                  onClick={() =>
                    handleClick(
                      "Grow your audience even more",
                      "https://plus.unsplash.com/premium_photo-1666264200754-1a2d5f2f6695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    )
                  }
                >
                  Grow your audience even more
                </h2>
                <hr className="border-gray-300 my-4" style={{ borderWidth: '1px' }} />
                {activeTitle === "Grow your audience even more" && (
                  <>
                    <p className="mt-4 text-gray-600">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aut qui hic atque tenetur quis eius quos ea neque sunt,
                      accusantium soluta minus veniam tempora deserunt?
                      Molestiae eius quidem quam repellat.
                    </p>
                    {/* <hr className="border-gray-300 my-4" /> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesBox;
