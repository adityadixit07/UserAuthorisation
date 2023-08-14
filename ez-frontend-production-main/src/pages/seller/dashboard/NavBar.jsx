import { useState } from "react";
import {
  MdDarkMode,
  MdLightMode,
  MdNotifications,
  MdOutlineMenu,
} from "react-icons/md";
// import { BiCheckDouble } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { HiOutlineTicket } from "react-icons/hi2";

// import Style from "./Navbar/navbar.module.css";

export default function Navbar({ onHamClick, onThemeChange, theme }) {
  const [isNotification, setIsNotification] = useState(false);
  const [isNotificationBadge, setIsNotificationBadge] = useState(true);

  //temporary notification
  const notification = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur",
      unread: true,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur",
      unread: true,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur",
      unread: true,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur",
      unread: true,
    },
  ];

  const [totalNotification, setTotalNotification] = useState(
    notification.length
  );

  // Notification handler
  const notificationHandler = () => {
    setIsNotification(!isNotification);
    setIsNotificationBadge(!isNotificationBadge);
  };

  const readNotification = (index, e) => {
    e.preventDefault();

    setTotalNotification(totalNotification - 1);
  };

  return (
    <div className="sticky top-0 z-40">
      <div
        className={`w-full transition-all ${
          theme ? "bg-white" : "bg-slate-900 text-gray-300"
        } h-16 flex items-center md:px-4 pr-2 flex-row-reverse md:flex-row shadow`}
      >
        <div className="w-4/12 h-16 md:hidden flex items-center px-4 justify-end gap-6">
          <span
            className="p-2 bg-purple-600 rounded text-white cursor-pointer pt-1 h-8 w-8 flex item-center justify-center"
            onClick={() => onThemeChange()}
            title="Change Theme"
            aria-label="Change Theme"
          >
            {theme ? (
              <MdDarkMode size={20} />
            ) : (
              <MdLightMode size={20} color="yellow" />
            )}
          </span>
          <span className="px-1 border" onClick={() => onHamClick()}>
            <MdOutlineMenu size={36} color="purple" />
          </span>
        </div>
        <div className="w-8/12 md:w-full flex items-center flex-row-reverse md:flex-row justify-end gap-6 md:gap-8 px-5">
          <Link
            to={"/dashboard/notifications"}
            className="p-1 bg-purple-600 rounded text-white cursor-pointer relative h-8 w-8 flex item-center justify-center"
            onClick={notificationHandler}
            title="Notification"
            aria-label="Notification"
          >
            <MdNotifications size={20} />
            <span
              className={`text-white border absolute top-1 right-0 bg-red-500 rounded-full p-1 h-4 w-4 text-[10px] items-center translate-x-1/2 -translate-y-1/2 ${
                (isNotificationBadge && totalNotification) > 0
                  ? "flex"
                  : "hidden"
              }`}
            >
              {totalNotification > 0 ? totalNotification : ""}
            </span>
          </Link>

          <span
            className="p-1 bg-purple-600 rounded text-white cursor-pointer pt-1 h-8 w-8 hidden md:flex item-center justify-center"
            onClick={() => onThemeChange()}
            title="Change Theme"
            aria-label="Change Theme"
          >
            {theme ? (
              <MdDarkMode size={20} />
            ) : (
              <MdLightMode size={20} color="yellow" />
            )}
          </span>

          <Link className="flex items-center gap-3" to={"/dashboard/settings"}>
            <img
              src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998368/userimg_qulyen.jpg"
              alt="user Profile"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full border"
            />
            <span className="flex flex-col">
              <span className="text-base">Md Rahman</span>
              <span
                className={`text-[12px] ${
                  theme ? "text-gray-500" : "text-gray-400"
                }`}
              >
                mdrahman@gmail.com
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
