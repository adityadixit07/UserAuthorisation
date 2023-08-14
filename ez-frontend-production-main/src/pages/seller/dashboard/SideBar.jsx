import { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineAppstoreAdd,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

import SideBar from "./sidebar.module.css";

import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isSidebar, theme }) => {
  const [isClickUser, setisClickUser] = useState(false);
  //   const [isClickTicket, setisClickTicket] = useState(false);
  //   const [isClickTeams, setisClickTeams] = useState(false);

  return (
    <>
      <div
        className={`${
          !isSidebar ? "-left-[50%]" : "left-[0%] "
        } flex flex-col transition-all justify-between w-[50%] md:w-[10%] lg:w-[16%] h-[100vh] ${
          theme ? "bg-white" : "bg-slate-900"
        } py-4 px-3 md:sticky absolute z-50 top-0 md:left-0`}
      >
        <div>
          <div className="w-full flex items-center justify-center">
            {theme ? (
              <img src="/logo.png" alt="QuadB Logo" className="h-12 w-40" />
            ) : (
              <img
                src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998352/ezcircle_nmn6bt.png"
                alt="QuadB Logo"
                className="h-12 w-12"
              />
            )}
          </div>
          <div
            className={`w-full ${SideBar.dashboard_sidebar_nav} mt-7 ${
              theme ? "text-gray-800" : "text-gray-200"
            }`}
          >
            <ul>
              <li>
                <NavLink
                  to="/seller/mydashboard"
                  className={({ isActive }) =>
                    isActive ? `${SideBar.user_btn_active}` : ""
                  }
                >
                  <AiOutlineHome /> &nbsp; &nbsp;
                  <span className="md:hidden lg:block">Dashboard</span>
                </NavLink>
              </li>
              {/* User Dropdown */}
              <li>
                <div className="relative">
                  <div
                    className={`  ${SideBar.user_btn_dash} justify-between hover:text-white`}
                    onClick={() => setisClickUser(!isClickUser)}
                  >
                    <span className="flex items-center">
                      <FaThList /> &nbsp; &nbsp;
                      <span className="md:hidden lg:block">Catalogue</span>
                      &nbsp; &nbsp;
                    </span>
                    {!isClickUser ? (
                      <AiFillCaretDown size={12} />
                    ) : (
                      <AiFillCaretUp size={12} />
                    )}
                  </div>
                  <div
                    className={`${SideBar.user_btn_dash_dropdown}  ${
                      theme ? "bg-gray-200 border" : "bg-gray-800"
                    } ${
                      isClickUser ? "block" : "hidden"
                    } ease-in-out w-full md:w-[200px] lg:w-full md:absolute md:left-[100%] md:top-[0%] lg:top-[auto] lg:left-[0%] lg:relative`}
                  >
                    <NavLink
                      to={"/seller/sellerdashboard/addproduct"}
                      className={({ isActive }) =>
                        isActive ? `${SideBar.user_btn_active}` : ""
                      }
                    >
                      <AiOutlineAppstoreAdd /> &nbsp; &nbsp;
                      <span>Add Product</span>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `${SideBar.user_btn_active}` : ""
                      }
                      to={"/seller/sellerdashboard/manageproduct"}
                    >
                      <FaUsersCog /> &nbsp; &nbsp;
                      <span>Manage Product</span>
                    </NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="/seller/sellerdashboard/mydashboard"
                  className={({ isActive }) =>
                    isActive ? `${SideBar.user_btn_active}` : ""
                  }
                >
                  <MdPayment /> &nbsp; &nbsp;
                  <span className="md:hidden lg:block">Bank Details</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <ul>
            {/* <li>
                <NavLink className='flex items-center p-1 px-3 font-semibold' to="/dashboard/profile"><AiOutlineUser/> &nbsp; &nbsp;<span className="md:hidden lg:block">Account</span></NavLink>
              </li>
              */}
            <li className="mt-2">
              <NavLink
                className="flex items-center bg-red-500 text-white p-1 px-3 rounded font-semibold"
                to="/dashboard/logout"
              >
                <IoLogOutOutline /> &nbsp; &nbsp;
                <span className="md:hidden lg:block">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
