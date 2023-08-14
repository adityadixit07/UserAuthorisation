import { useEffect, useState } from "react";
import "./style/Birthday.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearProfileUpdate, updateUserDetails } from "../../actions/userActions";

function Birthday({ theme }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, user, isNewUser } = useSelector(state => state.user);

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    if (user?.dob?.year) { setYear(user.dob.year) }
    if (user?.dob?.month) { setMonth(user.dob.month) }
    if (user?.dob?.date) { setDay(user.dob.date) }
  }, [user?.dob]);

  const [daysLeft, setDaysLeft] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // const dob = new Date(`${year}-${month}-${day}`).toLocaleDateString("en-GB");
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthdateThisYear = new Date(`${currentYear}-${month}-${day}`);
    let days = Math.ceil((birthdateThisYear - today) / (1000 * 60 * 60 * 24));
    if (days < 0) {
      days += 365;
    }
    setDaysLeft(days);

    // const UserProfileDetails = {
    //   ...JSON.parse(localStorage.getItem("UserProfileDetails")),
    // };
    // UserProfileDetails["dob"] = {
    //   date: day,
    //   month: month,
    //   year: year,
    // };
    // localStorage.setItem(
    //   "UserProfileDetails",
    //   JSON.stringify(UserProfileDetails)
    // );
    const userData = {
      dob: {
        date: day,
        month: month,
        year: year,
      },
    }

    if (day && month && year) {
      dispatch(updateUserDetails(userData));
    }

    setTimeout(() => {
      if (isNewUser) {
        navigate("/user/gender");
      }
      else if (!isNewUser) {
        navigate("/main");
      }
    }, 1000);
  }

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
      <div className={`w-full flex items-center justify-center ${theme ? "text-white" : "text-black"}`}>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center md:mt-48 mt-4 md:mb-0 mb-20">
            <p className="md:text-[38px] text-2xl leading-[36px] text-center  mt-[20px] font-semibold">
              When's your Birthday ?
            </p>
            <p className=" mt-[34px] text-center  ">
              We'll never share this with other users. We collect this info to
              help provide a better experience for the younger people in our
              community,
            </p>

            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl font-semibold mb-4  mt-[34px] text-center">
                Enter Your Birthday
              </h1>
              <div className=" flex flex-row text-center justify-center items-center gap-4">
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="year"
                    className="mb-2  md:text-center text-left"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    className={`rounded-lg  text-center md:w-[200px] h-[60px] lg:w-[100px] lg:h-[50px] lg:px-0 lg:text-[16px] border border-green-600  focus:outline-none ${theme ? "text-white bg-slate-700" : "text-black"
                      }`}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value=""> Select</option>
                    {Array.from({ length: 100 }, (_, i) => (
                      <option key={i} value={2023 - i}>
                        {2023 - i}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="month"
                    className="mb-2  md:text-center text-left"
                  >
                    Month
                  </label>
                  <select
                    id="month"
                    className={`rounded-lg text-center md:w-[200px] h-[60px] lg:w-[100px] lg:h-[50px] lg:px-0 lg:text-[16px] border border-green-600  focus:outline-none ${theme ? "text-white bg-slate-700" : "text-black"
                      }`}
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value=""> Select</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="day" className="mb-2  md:text-center text-left">
                    Day
                  </label>
                  <select
                    id="day"
                    className={`rounded-lg text-center md:w-[200px] h-[60px] lg:w-[100px] lg:h-[50px] lg:px-0 lg:text-[16px] border border-green-600  focus:outline-none ${theme ? "text-white bg-slate-700" : "text-black"
                      }`}
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >
                    <option value="">Select</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="  hover:bg-green-700 transition duration-200 text-white font-semibold bg-[#1e9059]  border-4 border-green-300 drop-shadow-custom py-2 px-1 rounded-[10px] w-full"
                >
                  Continue
                </button>
              </div>
              {daysLeft !== "" && year && month && day && (
                <p className="text-lg mt-4  text-center">
                  {daysLeft < 0
                    ? `Your birthday was ${-daysLeft} days ago.`
                    : daysLeft === 0
                      ? `Today is your birthday!`
                      : `${daysLeft} days to your birthday!! 🎂🥳`}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default Birthday;
