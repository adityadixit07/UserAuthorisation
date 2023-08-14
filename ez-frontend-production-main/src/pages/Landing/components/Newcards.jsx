// import React from "react";
import image from "../../../assets/card.jpeg";

function Newcards() {
  return (
    <>
      <div className="pl-[15%] pr-[15%] mt-[5%]">
        <h1 className="text-center justify-center font-bold text-2xl mb-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          suscipit earum repellendus.
        </h1>
        <p className="flex text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iste
          fugiat deleniti cupiditate, quia magni rerum similique atque possimus
          id consequatur quidem. Natus quam, reiciendis dolores eligendi fugiat
          maiores quae dolorum aut ratione sunt possimus reprehenderit excepturi
          similique aperiam hic!
        </p>
      </div>
      <div className="cardContainer flex  justify-center  gap-10 flex-col md:flex-row">
        <div className="card1 w-full p-5 flex flex-col justify-center items-center md:w-1/4">
          <img src={image} alt="" />
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectet!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt
              eveniet ipsa quis deleniti aspernatur magni?
            </p>
          </div>
        </div>
        <div className="card1  w-full p-5 flex flex-col justify-center items-center  md:w-1/4">
          <img src={image} alt="" />
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectet!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt
              eveniet ipsa quis deleniti aspernatur magni?
            </p>
          </div>
        </div>
        <div className="card1 w-full p-5 flex flex-col justify-center items-center  md:w-1/4">
          <img src={image} alt="" />
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectet!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt
              eveniet ipsa quis deleniti aspernatur magni?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newcards;
