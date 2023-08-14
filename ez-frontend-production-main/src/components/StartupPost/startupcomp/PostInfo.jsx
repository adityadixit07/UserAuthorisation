import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import thoughticon from "../../../Assets/Gender img/Vector.png";
import { ImArrowUp } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { removeUpvotePost, upvotePost } from '../../../actions/postActions';
import { ColorRing } from 'react-loader-spinner';

const PostInfo = ({ user, postLoaded, post, isCommented, comment, isUpvoting, isUpvoted, isUpvotedRemoved, setOpenComments }) => {
    const dispatch = useDispatch();

    let initialComments;
    if (postLoaded && isCommented) {
        const currentUserHasCommented = post.comments.some(commentItem => commentItem.username === comment.username);

        if (currentUserHasCommented) {
            initialComments = post.comments;
        } else {
            initialComments = [comment].concat(post.comments);
        }
    } else if (postLoaded) {
        initialComments = post.comments;
    }
    let uniqueUserComments = postLoaded && initialComments.reduce((acc, current) => {
        const x = acc.find(item => item.username === current.username);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    const [commentsLength, setCommentsLength] = useState(0);
    const [userComments, setUserComments] = useState(0);
    const duplicateComment = () => {
        const uniqueUsernames = post?.comments.reduce((acc, current) => {
            const x = acc.find(item => item.username === current.username);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
        setUserComments(uniqueUsernames?.length);
    }

    const [upvoted, setUpvoted] = useState(false);
    const handleUpvote = (e) => {
        e.preventDefault();

        const upvoteData = {
            userId: user?._id
        };

        if (upvoted) {
            dispatch(removeUpvotePost(upvoteData));
        }
        else {
            dispatch(upvotePost(upvoteData));
        }
    };
    useEffect(() => {
        if (user?._id && postLoaded) {
            setUpvoted(post?.userUpvotes?.includes(user?._id) ?? false);
        }
    }, [user?._id, postLoaded, post]);
    useEffect(() => {
        if (isUpvoted) {
            setUpvoted(true);
        }
        if (isUpvotedRemoved) {
            setUpvoted(false);
        }
    }, [isUpvoted, isUpvotedRemoved]);

    const [upvoteLength, setUpvoteLength] = useState(0);

    useEffect(() => {
        setCommentsLength(post?.comments?.length);
        setUpvoteLength(post?.upvotes);
        duplicateComment();
    }, [postLoaded]);
    useEffect(() => {
        if (isCommented) {
            setCommentsLength(prev => prev + 1);
            duplicateComment();
        }
        if (isUpvoted) {
            setUpvoteLength(prev => prev + 1);
        }
        if (isUpvotedRemoved) {
            setUpvoteLength(prev => prev - 1);
        }
    }, [isCommented, isUpvoted, isUpvotedRemoved]);

    return (
        <div className="w-full flex-wrap flex justify-between  px-2 ">
            <div className="flex gap-8 items-center">
                {uniqueUserComments.length > 0 && (
                    <div className="flex items-center">
                        <div className="relative flex ">
                            {uniqueUserComments.length > 0 && (
                                uniqueUserComments.slice(0, 3).map((item, i) => (
                                    <Link key={i} to={item?.username ? `/${item.username}` : "/"} className="w-9 h-9 rounded-full overflow-hidden -ml-2 border-2 border-slate-500">
                                        <img
                                            src={item?.avatar ? item.avatar : "/icon.png"}
                                            alt="User Icon"
                                            className="bg-cover w-full h-full aspect-square"
                                        />
                                    </Link>
                                ))
                            )}
                        </div>
                        <div className="flex gap-1 px-2 text-xs ">
                            {userComments > 3 && (
                                <span>+ {userComments - 3} Others</span>
                            )}
                            {uniqueUserComments.length > 0 && (
                                <span>answered</span>
                            )}
                        </div>
                    </div>
                )}
                <label htmlFor="contribution" className="cursor-pointer">
                    <h3 className="text-sm font-bold">Participate Now !!! </h3>
                </label>
            </div>
            <div className="flex gap-5">
                {/* <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 flex justify-center items-center rounded-xl bg-green-500">
                    <FaEye className="fill-white" size={25} />
                  </div>
                  <p className="text-[10px] text-green-700">6754</p>
                </div> */}
                <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setOpenComments(true)}>
                    <div className="w-8 h-8 flex justify-center items-center rounded-xl bg-[#FF9F45]">
                        <img src={thoughticon} className="" alt="" />
                    </div>
                    <p className="text-[10px] text-green-700">{commentsLength}</p>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={handleUpvote}>
                    <div className="w-8 h-8 flex justify-center items-center rounded-xl bg-green-500">
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
                            <ImArrowUp className="fill-white" size={20} />
                        )}
                    </div>
                    <p className="text-[10px] text-green-700">{upvoteLength}</p>
                </div>
            </div>
        </div>
    )
}

export default PostInfo