import { useEffect, useState } from "react";
import "./style/gender.css";
import { useNavigate } from "react-router-dom";

import { GiCheckMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { clearProfileUpdate, updateUserDetails } from "../../actions/userActions";

function Gender({ theme }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, isNewUser } = useSelector(state => state.user);

  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // const userDetails = {
    //   ...JSON.parse(localStorage.getItem("UserProfileDetails")),
    // };
    // userDetails["gender"] = gender;
    // localStorage.setItem("UserProfileDetails", JSON.stringify(userDetails));
    const userData = {
      gender: gender,
    }

    if (gender) {
      dispatch(updateUserDetails(userData));
    }

    setTimeout(() => {
      if (isNewUser) {
        navigate("/user/profileDetails");
      }
      else if (!isNewUser) {
        navigate("/main");
      }
    }, 1000);
  };

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/user/login");
    }
  }, [isLoading, isAuthenticated]);

  useEffect(() => {
    dispatch(clearProfileUpdate());
  }, [dispatch]);

  return (
    isAuthenticated && (
      <div className="w-full overflow-hidden">
        <div className="flex w-full flex-col h-screen items-center justify-center overflow-hidden">
          <div className="w-full flex gap-2">
            <div className="w-4/12 cursor-pointer" onClick={() => setGender("Male")}>
              <div className="w-full relative">
                <img
                  src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1684060189/img4_m2wyck.png`}
                  alt="Male Icon"
                  className={`h-28 md:h-40  rounded-3xl bg-white ${gender === "Male"
                    ? "border-4 border-green-600"
                    : "border-4 border-gray-400"
                    }`}
                />
                {gender === "Male" ? (
                  <span className="absolute top-2 right-3 translate-x-[50%] translate-y-[-50%] bg-green-600 text-white p-2 rounded-full">
                    <GiCheckMark />
                  </span>
                ) : null}

                <div className="w-full">
                  <input
                    className="w-full hidden"
                    id="male"
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "Male"}
                  />
                  <label
                    htmlFor="male"
                    className={` ${gender === "Male"
                      ? "bg-green-600 hover:bg-green-500 text-white"
                      : `${theme
                        ? "bg-white text-black"
                        : "bg-slate-600  text-white"
                      }`
                      } font-semibold  w-full flex items-center justify-center p-2 rounded-lg cursor-pointer mt-2`}
                  >
                    Male
                  </label>
                </div>
              </div>
            </div>

            <div className="w-4/12 cursor-pointer" onClick={() => setGender("Female")}>
              <div className="w-full relative">
                <img
                  src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1684060189/img3_ewjkhi.png`}
                  alt="Male Icon"
                  className={`h-28 md:h-40 rounded-3xl bg-white ${gender === "Female"
                    ? "border-4 border-green-600"
                    : "border-4 border-gray-400"
                    }`}
                />
                {gender === "Female" ? (
                  <span className="absolute top-2 right-3 translate-x-[50%] translate-y-[-50%] bg-green-600 text-white p-2 rounded-full">
                    <GiCheckMark />
                  </span>
                ) : null}
                <div className="w-full">
                  <input
                    className="w-full hidden"
                    id="Female"
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "Female"}
                  />
                  <label
                    htmlFor="Female"
                    className={` ${gender === "Female"
                      ? "bg-green-600 hover:bg-green-500 text-white"
                      : `${theme
                        ? "bg-white text-black"
                        : "bg-slate-600  text-white"
                      }`
                      } font-semibold  w-full flex items-center justify-center p-2 rounded-lg cursor-pointer mt-2`}
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="w-4/12 cursor-pointer" onClick={() => setGender("Transgender")}>
              <div className="w-full relative flex flex-col items-center">
                <img
                  src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1684095361/image_70_bejzxw.png`}
                  alt="Trans Icon"
                  className={`h-28 md:h-40  rounded-3xl bg-white ${gender === "Transgender"
                    ? "border-4 border-green-600"
                    : "border-4 border-gray-400"
                    }`}
                />
                {gender === "Transgender" ? (
                  <span className="absolute top-2 right-3 translate-x-[50%] translate-y-[-50%] bg-green-600 text-white p-2 rounded-full">
                    <GiCheckMark />
                  </span>
                ) : null}
                <div className="w-full">
                  <input
                    className="w-full hidden"
                    id="Transgender"
                    type="radio"
                    name="gender"
                    value="Transgender"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "Transgender"}
                  />
                  <label
                    htmlFor="Transgender"
                    className={` ${gender === "Transgender"
                      ? "bg-green-600 hover:bg-green-500 text-white"
                      : `${theme
                        ? "bg-white text-black"
                        : "bg-slate-600  text-white"
                      }`
                      } font-semibold  w-full flex items-center justify-center p-2 rounded-lg cursor-pointer mt-2`}
                  >
                    Transgender
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-[204px] h-[54px] text-lg  flex justify-center bg-[#169057] hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg mx-auto mt-14 ">
              <button className=" text-white font-bold" onClick={handleSubmit}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Gender;
