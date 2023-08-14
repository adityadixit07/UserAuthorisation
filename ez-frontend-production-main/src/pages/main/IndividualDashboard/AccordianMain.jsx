import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const accordions = [
  {
    id: 1,
    question: "Complete Your Profile",
    answer: "Finish your profile to let people recognize you",
    btndata: "Edit Profile",
    routeProp: "",
  },
  {
    id: 2,
    question: "Add New Service",
    answer: "Add a service so that user can buy it.",
    btndata: "Add a new service",
    routeProp: "/seller/addservice",
  },
  {
    id: 3,
    question: "Showcase Your Profile",
    answer: "Finish your profile to let people recognize you..",
    btndata: "Finish Your Profile",
    routeProp: "/seller/addservice",
  },
  {
    id: 4,
    question: "Share Your Link",
    answer: "Share Your Link to get popular",
    btndata: "Share Your Link",
    routeProp: "/user/profileDetails",
  },
];

function AccordianMain({ profileRoute }) {
  return (
    <div className="wrapper mt-1 pb-10">
      <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-md" key={id}>
              {id === 0 ? (
                <Accordion
                  question={question}
                  answer={answer}
                  btndata={item.btndata}
                  profileRoute={"profileRoute"}
                />
              ) : (
                <Accordion
                  question={question}
                  answer={answer}
                  btndata={item.btndata}
                  profileRoute={item.routeProp}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccordianMain;

export const Accordion = ({ question, answer, btndata, profileRoute }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-xl font-semibold text-green">{question}</h1>
        <BiChevronDown
          className={`text-2xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="pt-3 text-sm md:text-base">{answer}</p>
            <Link to={profileRoute}>
              <button
                className="mt-4 font-bold p-2 rounded "
                style={{ background: "rgb(4, 223, 100)" }}
              >
                {btndata}
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
