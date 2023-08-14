import { useState, useEffect, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearProfileUpdate, removeNewUser, uploadProfileImage, updateDetails } from "../../actions/userActions";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loader/Loader";
import ButtonLoading from "../../static/ButtonLoading";
import { ColorRing } from "react-loader-spinner";

const ProfileDetails = ({ theme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, isNewUser, user, error, isProfileUpdated, isUploading } = useSelector((state) => state.user);

  const fileRef = useRef();
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const [updateState, setUpdateState] = useState(false);
  const [detailState, setDetailState] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageFile) {
      return toast.error("Upload your image before!");
    }

    const userData = {
      ...username && { username: username },
      ...bio && { bio: bio }
    }

    dispatch(updateDetails(userData, setUpdateState, setDetailState));

    if (isNewUser && isProfileUpdated) {
      dispatch(removeNewUser());
    }
  };

  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
    e.target.value = "";
  };

  const handleImageUpload = (e) => {
    e.preventDefault();

    dispatch(uploadProfileImage({
      userID: user?._id,
      type: "avatar",
      imageFile
    }));
    setImageFile(null);
  };

  useEffect(() => {
    if (detailState) {
      navigate("/main");
    }
  }, [detailState]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/user/login");
    }
  }, [isLoading, isAuthenticated]);

  useEffect(() => {
    dispatch(clearProfileUpdate());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    localStorage.removeItem("userTempData");
    localStorage.removeItem("UserProfileDetails");
    localStorage.removeItem("_grecaptcha");
  }, [error, dispatch]);

  return (
    isLoading ? <Loading /> :
      isAuthenticated && (
        <div className="w-full flex text-white items-center justify-center h-screen ">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="w-full"
          >
            <div className="w-full mt-0 mb-4 flex flex-col items-center justify-center">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                disabled={isUploading}
                onChange={handleFileChange}
                ref={fileRef}
              />
              <span className="flex items-center justify-center border-2 border-green-700 rounded-full p-1 relative ">
                <span className="overflow-hidden rounded-full h-40 w-40 ">
                  <label onClick={() => fileRef.current.click()}
                    className="text-green-600 cursor-pointer text-center flex justify-center items-center h-full "
                  >
                    {image ? (
                      <img
                        src={image}
                        alt="User"
                        className="bg-cover"
                      />
                    ) : (
                      <img
                        src={user?.avatar?.url ? user.avatar.url : "/icon.png"}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </label>
                </span>

                <label onClick={() => fileRef.current.click()}>
                  <span className="bg-green-700 rounded-full p-2 absolute right-0 bottom-4 cursor-pointer text-white">
                    <AiOutlineEdit size={18} />
                  </span>
                </label>
              </span>
              {image && (
                <button type='button' disabled={isUploading} onClick={handleImageUpload}
                  className='text-white bg-green-600 hover:bg-green-700 rounded mt-2 px-4 py-1 h-[40px] flex items-center justify-center'
                >
                  {isUploading ? <ButtonLoading /> : "Upload"}
                </button>
              )}
            </div>

            <label
              htmlFor="username"
              className={`${theme ? "text-white" : "text-black"} text-2xl font-bold`}
            >
              Create Your "One" Link
            </label>
            <div className="mt-2 flex items-center w-full border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black">
              <p className="border-e border-green-800 rounded-s-md p-3 bg-gray-300">
                ezage.in/
              </p>
              <input
                type="text"
                placeholder={user?.username || "Create your unique username"}
                value={username}
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                // className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                className="p-3 w-full rounded-e-md"
              />
            </div>
            {/* <div className="w-full my-6">
            <input
              type="text"
              placeholder="@Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md ${!theme ? "bg-white text-black" : "bg-gray-700 text-white"
                }`}
            />
          </div> */}
            <div className="w-full mt-10">
              <label
                htmlFor="bio"
                className={`${theme ? "text-white" : "text-black"} font-bold`}
              >
                Add a little one liner to the world about you

              </label>
              <textarea
                type="text"
                placeholder={user?.bio || "Its the first thing that people will notice about you"}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                id="bio"
                className={`w-full h-32 border p-3 border-green-800 mt-2 focus:outline-none focus:border-green-600  rounded-md ${!theme ? "bg-white text-black" : "bg-gray-700 text-white"
                  }`}
              ></textarea>
            </div>
            {/* <div className="w-full">
            <label htmlFor="email" className="text-green-900">
              <input
                type="checkbox"
                name="email"
                id="email"
                checked={isEmailChecked}
                onChange={(e) => {
                  setIsEmailChecked(e.target.checked);
                }}
              />
              &nbsp; Want to provide your email to receive updates and best
              offers ?
            </label>
          </div> */}

            <div className={`w-full flex items-center justify-center flex-col gap-3 mt-5`}>
              <button
                type="submit"
                className="w-full flex justify-center bg-green-600 rounded-md hover:bg-green-700 cursor-pointer"
              >
                {updateState ? (
                  <ColorRing
                    visible={true}
                    height="48"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={["white", "white", "white", "white", "white"]}
                  />
                ) : <div className="p-3">Continue</div>}
              </button>
            </div>
          </form>
        </div>
      )
  );
};

export default ProfileDetails;
