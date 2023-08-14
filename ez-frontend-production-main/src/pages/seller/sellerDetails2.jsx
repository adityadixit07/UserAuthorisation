import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import "./seller.css";
import { useNavigate } from "react-router";
import { clearSellerError, registerSeller } from "../../actions/sellerActions";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import MultiStepForm from "./MultiStepForm";
import SellerRegisteredPage from "./SellerRegisteredSuccess";
import Navbar from "../../components/Navbar/Newnav/NewNav";

function SellerDetails({ webLoading, isAuthenticated, user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sellerRegisterMessage, sellerRegisterError, isLoading } = useSelector(
    (state) => state.seller
  );

  const [check, setcheck] = useState(null);
  const [checkW, setcheckW] = useState(null);
  // const [head, sethead] = useState([]);

  const [expertise, setExpertise] = useState("");
  const [workStyle, setWorkStyle] = useState("");

  const expertiseHandle = (i, d) => {
    setcheck(i);

    setExpertise(d);
  };

  const workStyleHandle = (d) => {
    setWorkStyle(d);
  };

  const sellerData = {
    ...JSON.parse(localStorage.getItem("sellerType")),
  };

  // const handlehead = (index) => {
  //   const headData = [...head];
  //   headData.push(index);
  //   sethead(headData);
  // };

  const handleExpWrkSubmit = (e) => {
    e.preventDefault();
    // "serviceType":"seller",

    if (expertise && workStyle) {
      sellerData["experince"] = expertise;
      sellerData["sellingStyle"] = workStyle;
    }

    localStorage.setItem("sellerType", JSON.stringify(sellerData));

    // console.log(sellerData);
    dispatch(registerSeller(sellerData));
  };
  // const completion=head.reduce((previous,current)=>{
  //     return previous+current
  // },0)
  // const completion = (2 / 7) * 100;

  const [sellerRegistered, setSellerRegistered] = useState(false);
  useEffect(() => {
    if (sellerRegisterMessage && sellerRegisterMessage !== null) {
      dispatch(clearSellerError());
      setSellerRegistered(true);
    }

    if (sellerRegisterError && sellerRegisterError !== null) {
      toast.error(sellerRegisterError);
      dispatch(clearSellerError());
    }
  }, [dispatch, navigate, sellerRegisterError, sellerRegisterMessage]);

  useEffect(() => {
    if (!webLoading && !isAuthenticated) {
      navigate("/user/login");
    }
    if (!webLoading && isAuthenticated && user?.role === "seller") {
      navigate("/seller");
    }
  }, [webLoading, isAuthenticated, user?.role]);

  return (
    <>
      {webLoading && <Loader />}
      {!isLoading ? (
        <>
          <div className="w-full sticky top-0 z-50 shadow h-[10vh] bg-white">
            <Navbar />
          </div>
          {sellerRegistered && <SellerRegisteredPage />}
          <div className="w-full mt-8 -z-50 overflow-x-auto">
            <MultiStepForm active={1} />
          </div>
          <section className="my-8 mx-2 md:mx-28 -z-50">
            <h1 className="text-2xl md:text-4xl font-semibold mt-10 mb-4">
              How would you rate your level of expertise in your field?
            </h1>
            <div className="flex overflow-x-auto items-center px-5 md:px-0 gap-4 justify-between">
              {[
                "Beginner",
                "Intermediate",
                "Advanced",
                "Expert/PRO",
                "No Exp",
              ].map((data, i) => {
                return (
                  <div
                    key={i}
                    className={`min-w-[200px] relative h-52 ${check === i ? "shadow-xl" : ""
                      } cursor-pointer rounded-[10px] bg-slate-100 flex justify-center items-end "bg-red-500":"bg-slate-200"}`}
                    onClick={() => expertiseHandle(i, data)}
                  >
                    <h4 className="text-base font-bold py-5">{data}</h4>
                    <AiTwotoneCheckCircle
                      className={`absolute ${check === i ? "" : "hidden"
                        } -top-1 -right-1 fill-green-600`}
                      size={35}
                    />
                  </div>
                );
              })}
            </div>
            <div className="py-14">
              <h1 className="text-2xl md:text-3xl font-semibold py-5">
                How would you like to Work?{" "}
              </h1>
              <p className="text-sm md:text-base font-semibold text-slate-500 pb-5">
                To help you get started, we have three selling styles that you
                can choose from. Decide which one suits your goals and
                preferences.
              </p>
              <div className="flex overflow-x-auto px-4 md:p-0 gap-4 justify-between">
                {["Self-Marketer", "eZ Advertiser", "eZ Assured "].map(
                  (data, index) => {
                    return (
                      <div
                        key={index}
                        className={`min-w-[220px] h-[300px] ${checkW === index ? "shadow-2xl" : ""
                          } bg-slate-200 cursor-pointer  rounded-[10px]`}
                        onClick={() => workStyleHandle(data)}
                      >
                        <div
                          className="w-full relative h-2/3 bg-slate-300 rounded-[10px] flex justify-center items-end"
                          onClick={() => setcheckW(index)}
                        >
                          <h4 className="text-base font-semibold py-5">
                            {data}
                          </h4>
                          <AiTwotoneCheckCircle
                            className={`absolute ${checkW === index ? "" : "hidden"
                              } -top-1 -right-1 fill-green-600`}
                            size={35}
                          />
                        </div>
                        <p className="text-sm p-2">
                          If you prefer to find clients on your own
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button
                className="bg-green-500 text-white p-2"
                onClick={handleExpWrkSubmit}
              >
                Continue
              </button>
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default SellerDetails;
