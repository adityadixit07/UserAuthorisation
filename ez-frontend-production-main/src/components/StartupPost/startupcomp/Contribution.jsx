import React from 'react'
import { useDispatch } from 'react-redux';
import { addComment } from '../../../actions/postActions';
import { toast } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';

const Contribution = ({ user, setOpenComingSoon, contribution, setContribution, isCommenting }) => {
    const dispatch = useDispatch();

    const handleContribution = (e) => {
        e.preventDefault();
        if (!contribution) {
            return toast.error("Write a comment first!");
        }

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
        <div className="bg-gray-500 px-4 w-full h-[65px] flex items-center gap-4">
            <div className="">
                <img
                    src={user?.avatar?.url ? user.avatar.url : "/icon.png"}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                />
            </div>

            <div className="w-full flex items-center">
                <div className="flex-grow">
                    <input
                        id="contribution"
                        type="text"
                        className={`${contribution ? "rounded-l-[20px]" : !isCommenting ? "rounded-[20px]" : "rounded-l-[20px]"} w-full h-[50px] pl-4 pr-4 bg-gray-400 border-2 border-green-500 focus:border-white focus:outline-none placeholder:text-white`}
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
        </div >
    )
}

export default Contribution