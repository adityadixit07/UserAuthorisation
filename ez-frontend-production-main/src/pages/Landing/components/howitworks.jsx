// import howitworksback from "../../../Assets/howitworksback.jpg";
import { useState } from "react";

function Howitworks() {
  const [isHovering, setIsHovering] = useState(false);

  const cards = [
    {
      title: "Get Started",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. maximus.",
    },
    {
      title: "Learn More",
      description: "Lorem ipsum dolor sit amet, cn elit pellentesque maximus.",
    },
    {
      title: "Get Hired",
      description:
        "Lorem ipsum dolor sit amet, consectetur m elit in elit pellentesque maximus.",
    },
  ];

  return (
    <section className="relative bg-center bg-cover bg-no-repeat w-full  bg-[url(https://res.cloudinary.com/ds6spmr71/image/upload/v1684213795/Untitled_design_beufvg.png)]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[90vh] lg:items-center lg:px-8">
        <div className="w-full text-left ltr:sm:text-left text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Find talent
            <strong className="block font-extrabold text-white">
              your way.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="cursor-pointer flex-grow w-1/2 sm:w-1/6 max-w-sm rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundColor: isHovering === index ? "white" : "green",
                  color: isHovering === index ? "green" : "white",
                }}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howitworks;
