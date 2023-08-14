import React from 'react';

function ProductCard({ filteredCatalogs }) {
  return (
    <div>
      <h2 className="font-bold text-3xl mt-4 md:mt-0 mb-4 text-gray-700">Frequently bought together</h2>
      <div className="w-full flex flex-wrap justify-center gap-4">
        <div className="w-full flex overflow-x-auto md:flex-wrap gap-4 pb-10 md:justify-evenly">
        {/* <div className="w-full flex overflow-x-auto gap-4 pb-10 justify-center"> */}

          {filteredCatalogs.map((catalog, index) => (
            <a href={`/${catalog.username}/service/${catalog?.serviceType === "Consultation" ? `availability/${catalog._id}`
              : catalog?.serviceType === "Service Package" ? `buymyservice/${catalog._id}`
                : catalog?.serviceType === "Digital Product" ? `checkout/${catalog._id}`
                  : catalog?.serviceType === "Workshop & Training" && `checkout/${catalog._id}`
              }`}
              className="w-full md:w-[320px] rounded-xl border border-t-[12px] border-t-green-400" key={index}
            >
              <img
                className={`w-full md:w-full h-[250px] ${catalog?.thumbnail[0]?.url ? "object-cover" : "object-contain"}`}
                src={catalog?.thumbnail[0]?.url ? catalog?.thumbnail[0]?.url : "/NavLogo.png"}
                // src={catalog?.thumbnail[0]?.url ? catalog?.thumbnail[0]?.url : "https://picsum.photos/200"}
                alt="Card"
              />
              <div className="px-6 py-4 w-[300px]">
                <div className="font-bold text-xl mb-2">
                  {catalog.itemTitle}
                </div>
                <p className="text-gray-700 text-base">
                  {catalog?.description.slice(0, 50)}...
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 w-[300px]">
                {catalog?.tags?.map((tag, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {tag.tag}
                  </span>
                ))}
              </div>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ProductCard;