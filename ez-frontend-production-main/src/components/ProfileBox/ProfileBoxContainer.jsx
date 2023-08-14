
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProfileBox.css";


const ProfileBoxContainer = ({linkUrl,dataName,imageUrl}) => {
  return (
    <Link
    to={linkUrl}
    className="profileboxcont rounded-[10px] bg-[#f9f0f6] relative flex flex-col justify-end p-3 text-[12px] font-normal items-center "
  >
    <FaPlusCircle
      className="absolute right-5 top-2 fill-[#47474b]"
      size={25}
    />
    { }
    <img src={imageUrl} className=" max-h-[70px]  mx-auto " />
    <p ><b>{dataName}</b></p>
  </Link>
  )
}

export default ProfileBoxContainer