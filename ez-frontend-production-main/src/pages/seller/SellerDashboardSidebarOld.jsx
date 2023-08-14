// import sellerpic from "../../../src/Assets/profile-img/usericon.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MdWatchLater,
  MdPayments,
  MdOutlineMiscellaneousServices,
  MdEventAvailable,
  MdRocketLaunch,
  MdOutlineHomeRepairService,
} from "react-icons/md";
import { FaDatabase, FaBuysellads } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiQuestionnaireLine } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { GoMegaphone, GoMailRead } from "react-icons/go";
import { TfiList } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import { useSelector } from "react-redux";

const SellerDashboardSidebarOld = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {user && (
        <div className="flex flex-col gap-8">
          <div className="flex gap-5 px-10 rounded-[10px] items-center justify-between  bg-slate-100 shadow-lg p-1">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={user?.avatar?.url} alt="" className="w-full bg-cover" />
            </div>
            <h2 className="text-base font-bold text-slate-600">{`${user?.firstName} ${user?.lastName}`}</h2>
            <IoMdArrowDropdown size={30} />
          </div>

          <div className="flex gap-5 px-11 rounded-[10px] items-center justify-between  bg-slate-100 shadow-lg p-1">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <MdWatchLater size={30} />
            </div>
            <h2 className="text-base font-bold text-slate-600">Available</h2>
            <IoMdArrowDropdown size={30} />
          </div>

          <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
            <FaDatabase size={30} />
            <h2 className="text-base font-bold text-slate-600">Overview</h2>
          </div>

          <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
            <IoMdNotificationsOutline size={30} />
            <h2 className="text-base font-bold text-slate-600">Overview</h2>
          </div>

          <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
            <RiQuestionnaireLine size={30} />
            <h2 className="text-base font-bold text-slate-600">Queries</h2>
          </div>

          <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
            <SiGoogleanalytics size={30} />
            <h2 className="text-base font-bold text-slate-600">Analytics</h2>
          </div>

          <div className="flex gap-5  px-10 rounded-[10px] items-center justify-between  bg-green-300 p-1">
            <MdOutlineHomeRepairService className="fill-white" size={30} />
            <h2 className="text-base font-bold text-white">Seller Dashboard</h2>
            <IoMdArrowDropdown className="fill-white" size={30} />
          </div>

          <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
            <MdOutlineMiscellaneousServices
              className="fill-green-600"
              size={30}
            />
            <h2 className="text-base font-bold ">Add a Service </h2>
          </div>
          <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
            <TfiList size={30} />
            <h2 className="text-base font-bold ">Manage Listings</h2>
          </div>
          <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
            <MdRocketLaunch size={30} />
            <h2 className="text-base font-bold">Boosted Listings </h2>
          </div>
          <div className="flex gap-5 px-16 text-green-700 items-center justify-between p-1 pb-8 border-b">
            <MdEventAvailable size={30} />
            <h2 className="text-base font-bold ">Availability </h2>
          </div>

          <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
            <TbPhoneCall size={30} />
            <h2 className="text-base font-bold">Bookings</h2>
          </div>
          <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
            <MdPayments size={30} />
            <h2 className="text-base font-bold">Payments</h2>
          </div>

          <div className="flex gap-5  px-10 rounded-[10px] items-center bg-slate-100 shadow-lg justify-between  p-1">
            <FaBuysellads className="" size={30} />
            <h2 className="text-base font-bold">Grow Audience</h2>
            <IoMdArrowDropdown className="" size={30} />
          </div>
          <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
            <GoMegaphone size={30} />
            <h2 className="text-base font-bold">Advertise</h2>
          </div>
          <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
            <GoMailRead size={30} />
            <h2 className="text-base font-bold">Invite your Friends </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerDashboardSidebarOld;
