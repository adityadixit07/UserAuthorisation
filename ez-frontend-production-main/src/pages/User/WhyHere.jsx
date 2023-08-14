import { useEffect, useState } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { FaCompass, FaCircle } from "react-icons/fa"
import check from "../../assets/ez-logo/Ellipse-72.svg"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearProfileUpdate, updateUserDetails } from "../../actions/userActions";

const WhyHere = ({ theme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, user, isNewUser } = useSelector(state => state.user);

  const [checkedValue, setCheckedValue] = useState([]);
  useEffect(() => {
    if (isAuthenticated && user?.whyHere?.length > 0) {
      setCheckedValue(user.whyHere);
    }
  }, [isAuthenticated]);

  const handleCheckChange = (e) => {
    const { checked, value } = e.target;

    const updateCheckedValue = checked
      ? [...checkedValue, value]
      : checkedValue.filter((v) => v !== value);

    setCheckedValue(updateCheckedValue);
  };

  const whHereSubmitHandler = () => {
    // const UserProfileDetails = {
    //   ...JSON.parse(localStorage.getItem("UserProfileDetails")),
    // };
    // UserProfileDetails["whyHere"] = checkedValue;
    // localStorage.setItem(
    //   "UserProfileDetails",
    //   JSON.stringify(UserProfileDetails)
    // );
    // navigate("/user/profilecategory");

    const userData = {
      whyHere: checkedValue,
    }
    if (checkedValue.length > 0) {
      dispatch(updateUserDetails(userData));
    }

    setTimeout(() => {
      if (isNewUser) {
        navigate("/user/profilecategory");
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
      <>
        <div className="w-full h-screen flex items-center justify-center">
          <div className="w-full ">
            <h1 className={`text-center text-3xl font-bold  ${theme ? "text-gray-100" : "text-gray-800"}`}>
              Why Are You Here ?
            </h1>

            <div className="w-full mt-4">
              {whyhere.map((item, index) => (
                <div
                  key={`checkbox-${index}`}
                  className="flex items-center gap-4 selection:bg-transparent"
                >
                  <span>{item.icon}</span>
                  <label
                    className="w-full flex items-center bg-[#6AA798] rounded hover:bg-green-500 my-3 cursor-pointer text-white p-2.5 px-3 gap-2"
                    htmlFor={item.id}
                  >
                    <span>
                      {checkedValue.includes(item.text) ? (
                        <div className="w-5 h-5">
                          <img className="w-full" src={check} alt="" />
                        </div>
                      ) : (
                        <FaCircle size={20} />
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={checkedValue.includes(item.text)}
                      value={item.text}
                      name={`checkbox-${item.id}`}
                      id={item.id}
                      onChange={handleCheckChange}
                      className="hidden"
                    />
                    <span className="text-sm">{item.text}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center mt-5 pl-10">
              <button
                className="bg-green-600 hover:bg-green-500 p-2 text-white rounded  font-semibold"
                onClick={whHereSubmitHandler}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

const whyhere = [
  {
    id: 121,
    text: "Connect with like Minded People",
    isChecked: false,
    icon: <WifiIcon fontSize="medium" style={{ color: "#dba015" }} />,
  },
  {
    id: 122,
    text: "Provide service as a freelancer",
    isChecked: false,
    icon: <PeopleAltIcon fontSize="medium" style={{ color: "green" }} />,
  },
  {
    id: 123,
    text: "Provide service as a business",
    isChecked: false,
    icon: (
      <BusinessCenterIcon fontSize="medium" style={{ color: "purple" }} />
    ),
  },
  {
    id: 124,
    text: "looking to buy a service",
    isChecked: false,
    icon: <WorkOutlineIcon fontSize="medium" style={{ color: "blue" }} />,
  },
  {
    id: 125,
    text: "looking to sell a service",
    isChecked: false,
    icon: <FaCompass fontSize="medium" size={25} style={{ color: "green" }} />,
  },
];

export default WhyHere;
