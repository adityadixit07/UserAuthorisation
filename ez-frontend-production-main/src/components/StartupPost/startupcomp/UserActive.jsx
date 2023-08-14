import React, { useEffect, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaChalkboardTeacher, FaUserCheck } from "react-icons/fa";
import { ImArrowUp } from "react-icons/im";
import userpic from "../../../Assets/sandipkundu.jpg";
import { formatDistanceToNow } from 'date-fns';
import { useDispatch } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { removeUpvotePost, upvotePost } from "../../../actions/postActions";

function UserActive({ userId, postLoaded, post, setOpenComingSoon, isUpvoting, isUpvoted, isUpvotedRemoved }) {
  const dispatch = useDispatch();

  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = (e) => {
    e.preventDefault();

    const upvoteData = {
      userId: userId
    };

    if (upvoted) {
      dispatch(removeUpvotePost(upvoteData));
    }
    else {
      dispatch(upvotePost(upvoteData));
    }
  };

  useEffect(() => {
    if (userId && postLoaded) {
      setUpvoted(post?.userUpvotes?.includes(userId) ?? false);
    }
  }, [userId, postLoaded, post]);

  useEffect(() => {
    if (isUpvoted) {
      setUpvoted(true);
    }
    if (isUpvotedRemoved) {
      setUpvoted(false);
    }
  }, [isUpvoted, isUpvotedRemoved]);

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center gap-3">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={userpic} alt="" className="w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <h2 className="text-[18px] font-bold">Sandip Kundu </h2>
              <BsFillPatchCheckFill className="fill-green-400" size={25} />
              <div className="flex flex-col items-center justify-start gap-0.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <FaChalkboardTeacher className="fill-sky-400" />
                <h5 className="text-[13px] font-normal">
                  Startup India Mentor
                </h5>
              </div>
              <div className="flex gap-3 text-[9px]">
                <span classsname=" ">#Venture Capital </span>
                <span classsname="">#PE Funding </span>
                <span classsname="">#Investments</span>
              </div>
            </div>
            <h4 className="text-sm text-slate-500 font-normal">
              {formatDistanceToNow(new Date(post?.createdAt), { addSuffix: true })}
            </h4>
          </div>
        </div>
        <div className="w-full justify-end flex gap-5 text-xs font-bold">
          <div className="flex flex-col gap-3">
            <div className="w-full flex justify-center" onClick={() => setOpenComingSoon(true)}>
              <div className="w-9 h-9 flex justify-center items-center rounded-full bg-green-500 cursor-pointer">
                <FaUserCheck className="fill-white translate-x-0.5" size={25} />
              </div>
            </div>
            <p className="text-center">Follow</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full flex justify-center" onClick={handleUpvote}>
              <div className={`w-9 h-9 flex justify-center items-center rounded-full ${!isUpvoting && upvoted ? "bg-white" : "bg-green-500"} cursor-pointer`}>
                {isUpvoting ? (
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={["white", "white", "white", "white", "white"]}
                  />
                ) : (
                  <ImArrowUp
                    className={`${!isUpvoting && upvoted ? "fill-green-500" : "fill-white"}`}
                    size={25}
                  />
                )}
              </div>
            </div>
            <p className={`text-center ${!isUpvoting && upvoted && "text-green-600"}`}>{!isUpvoting && upvoted ? "Upvoted" : "Upvote"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserActive;
