// React Icons
import {
  BsFillBellFill,
  BsCalendar2CheckFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { FaRocketchat, FaBook } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

//CSS Module
import "./Navbar.css";

const LowerNavbar = () => {
  // Nav Items List
  const LowerNavbarItems = [
    {
      id: 1,
      icon: <FaRocketchat />,
      text: "Overview",
      link: "http://localhost:3000",
    },
    {
      id: 2,
      icon: <IoChatbubblesSharp />,
      text: "Discussions",
      link: "http://localhost:3000",
    },
    {
      id: 3,
      icon: <BsFillBellFill />,
      text: "Updates",
      link: "http://localhost:3000",
    },
    {
      id: 4,
      icon: <BsCalendar2CheckFill />,
      text: "Events",
      link: "/qa",
    },
    {
      id: 5,
      icon: <BsFillQuestionCircleFill />,
      text: "Q&A Forum",
      link: "http://localhost:3000/qa",
    },
    {
      id: 6,
      icon: <FaBook />,
      text: "Resources",
      link: "http://localhost:3000",
    },
  ];

  return (
    <div
      className={`lower_navbar w-full flex py-3 justify-between md:px-8 lg:px-20 xl:px-44 overflow-auto md:gap-2 gap-3`}
    >
      {LowerNavbarItems.map((item) => (
        <Link to={item.link} key={item.id}>
          <span>{item.icon}</span> &nbsp;
          <span>{item.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default LowerNavbar;
