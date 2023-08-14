import { useEffect, useState } from "react";
import "./StartupPost.css";
import { BsFillTagsFill } from "react-icons/bs";
import UserActive from "./startupcomp/UserActive";
import Contribution from "./startupcomp/Contribution";
import { useDispatch, useSelector } from "react-redux";
import { clearComment, getPost } from "../../actions/postActions";
import { Toaster } from "react-hot-toast";
import PostInfo from "./startupcomp/PostInfo";
import Comments from "./startupcomp/Comments";

const StartupPost = ({ user, setOpenComingSoon }) => {
  const dispatch = useDispatch();
  const { postLoaded, post, isCommenting, comment, isCommented, isUpvoting, isUpvoted, isUpvotedRemoved } = useSelector(state => state.post);

  const [contribution, setContribution] = useState("");

  const [openComments, setOpenComments] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    if (postLoaded) {
      setCommentsData(post?.comments);
    }
  }, [postLoaded]);
  useEffect(() => {
    if (isCommented) {
      setCommentsData(prevComments => [...prevComments, comment]);
    }
  }, [isCommented, comment]);

  useEffect(() => {
    dispatch(getPost());
    dispatch(clearComment());
  }, []);

  return (
    postLoaded && (
      <>
        <Toaster toastOptions={{ duration: 5000 }} />

        {openComments && (
          <Comments
            user={user}
            openComments={openComments}
            setOpenComments={setOpenComments}
            contribution={contribution}
            setContribution={setContribution}
            isCommenting={isCommenting}
            commentsData={commentsData}
          />
        )}

        <div className="hidden md:block my-5 bg-[#F5F5F5] rounded-[10px] overflow-hidden">
          <div className="p-8 pb-4 flex flex-col gap-8">

            <UserActive
              userId={user?._id}
              postLoaded={postLoaded}
              post={post}
              setOpenComingSoon={setOpenComingSoon}
              isUpvoting={isUpvoting}
              isUpvoted={isUpvoted}
              isUpvotedRemoved={isUpvotedRemoved}
            />

            <p className="tracking-wide leading-loose text-base font-normal text-[#06501A]">
              {post?.post}{" "}
            </p>
            <div className="flex md:gap-9 text-sm font-normal items-center text-green-700">
              <BsFillTagsFill className="fill-green-400" size={30} />
              <span className="py-1 px-2 border border-slate-400 rounded-full">
                #economy
              </span>
              <span className="py-1 px-2 border border-slate-400 rounded-full">
                #recession
              </span>
              <span className="py-1 px-2 border border-slate-400 rounded-full">
                #funding{" "}
              </span>
            </div>

            <PostInfo
              user={user}
              postLoaded={postLoaded}
              post={post}
              isCommented={isCommented}
              comment={comment}
              isUpvoting={isUpvoting}
              isUpvoted={isUpvoted}
              isUpvotedRemoved={isUpvotedRemoved}
              setOpenComments={setOpenComments}
            />
          </div>

          <Contribution
            user={user}
            setOpenComingSoon={setOpenComingSoon}
            contribution={contribution}
            setContribution={setContribution}
            isCommenting={isCommenting}
          />

        </div >
      </>
    )
  );
};

export default StartupPost;

{/* <>
  <div className="w-9 h-9 rounded-full overflow-hidden -ml-2 border-2 border-slate-500">
    <img
      src={
        "https://res.cloudinary.com/ds6spmr71/image/upload/v1682998363/sandipkundu_uvet0f.jpg"
      }
      alt="User Icon"
      className="bg-cover w-full h-full aspect-square "
    />
  </div>
  <div className="w-9 h-9 rounded-full overflow-hidden -ml-2 border-2 border-slate-500">
    <img
      src={
        "https://res.cloudinary.com/ds6spmr71/image/upload/v1682998363/sandipkundu_uvet0f.jpg"
      }
      alt="User Icon"
      className="bg-cover w-full h-full"
    />
  </div>
</> */}