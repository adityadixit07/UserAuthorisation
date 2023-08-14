import React, { useRef } from 'react'
import { useOutsideClick } from '../../../hooks/clickOutside';
import { ColorRing } from 'react-loader-spinner';
import { addComment } from '../../../actions/postActions';
import { useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

const Comments = ({ user, openComments, setOpenComments, contribution, setContribution, isCommenting, commentsData }) => {
  const dispatch = useDispatch();

  const commentRef = useRef(null);
  useOutsideClick(() => {
    if (openComments) {
      setOpenComments(false);
    }
  }, commentRef);

  const handleContribution = (e) => {
    e.preventDefault();

    const commentData = {
      _id: user?._id,
      comment: contribution,
      name: `${user?.firstName && user.firstName} ${user?.lastName && user.lastName}`,
      ...user?.username && { username: user.username },
      ...user?.profileCategory?.jobRoles[0] && { jobRole: user.profileCategory.jobRoles[0] },
      ...user?.avatar?.url && { avatar: user.avatar.url },
      createdAt: new Date()
    };

    dispatch(addComment(commentData));
    setContribution("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="flex items-center justify-center fixed inset-0 z-40 w-full h-screen bg-gray-100 opacity-70"></div>

      <div className="payment-form w-[95%] md:w-full md:max-w-3xl h-[70vh] p-4 bg-white z-50 rounded-md shadow-green-100 shadow-xl" ref={commentRef}>

        <h1 className="text-xl font-bold mb-4 text-center">Add/Reply to Comments</h1>

        <div className="w-full flex items-center ">
          <div className="flex-grow">
            <input
              id="contribution"
              type="text"
              className={`${contribution ? "rounded-l-[20px]" : !isCommenting ? "rounded-[20px]" : "rounded-l-[20px]"} w-full h-[50px] pl-4 pr-4 bg-gray-400 border-2 border-green-500 focus:border-black focus:outline-none placeholder:text-white`}
              placeholder="Add your contribution"
              value={contribution}
              onChange={e => setContribution(e.target.value)}
            />
          </div>
          <div className="flex-none">
            {isCommenting ? (
              <div className="w-[70px] h-[50px] flex items-center justify-center bg-black rounded-r-[20px] py-1">
                <ColorRing
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={["white", "white", "white", "white", "white"]}
                />
              </div>
            ) : (
              contribution && (
                <button disabled={isCommenting} onClick={handleContribution} className="w-[70px] h-[50px] flex items-center justify-center gap-1 bg-black hover:bg-opacity-70 text-white rounded-r-[20px] py-1">
                  <span className="text-[18px]">Add</span>
                </button>
              )
            )}
          </div>
        </div>

        <hr className="mt-3" />

        <p className="font-[600] text-[22px] pb-[10px]">Most recent</p>

        <div className="w-full flex flex-col gap-5 h-[calc(100%-144px)] overflow-y-auto">
          {commentsData.length === 0 ? (
            <p className="text-xl flex items-center h-full justify-center">
              No comments yet!
            </p>
          ) : (
            commentsData.slice().reverse().map((item, i) => (
              <div className="flex gap-3 h-fit" key={i}>
                <Link to={item.username ? `/${item.username}` : "/"} className='w-[50px] h-[50px]'>
                  <img
                    src={item?.avatar ? item.avatar : "/icon.png"}
                    className="w-full h-full object-contain"
                    alt="User"
                  />
                </Link>
                <div className="w-full bg-gray-300 rounded-[10px] py-2 px-4">
                  <Link to={item.username ? `/${item.username}` : "/"} className="w-full flex justify-between items-center">
                    <p className="font-bold text-[18px]">
                      {item?.name}
                    </p>
                    {item?.createdAt && (
                      <p className="text-[15px] font-light text-gray-800">
                        {formatDistanceToNow(new Date(item?.createdAt), { addSuffix: true })}
                      </p>
                    )}
                  </Link>

                  <Link to={item.username ? `/${item.username}` : "/"} className="flex items-center gap-2">
                    <img
                      src="/placeholder-img.png"
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <p>
                      {item?.jobRole && item.jobRole}
                    </p>
                  </Link>

                  <div className="w-full pt-[10px]">
                    {item.comment}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Comments