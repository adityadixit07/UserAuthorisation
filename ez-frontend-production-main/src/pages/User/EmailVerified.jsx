import React, { useEffect } from "react";

// import logo from "../../Assets/main_logo.svg"
import { Link, useNavigate } from "react-router-dom";
import {MdArrowForward} from "react-icons/md";

// import { useDispatch, useSelector } from "react-redux";
// import { loadUser } from "../../actions/userActions";
import { Toaster, toast } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";

const  EmailVerified = ()=> {
 const isLoading = false;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {error, user, isAuthenticated, isLoading}=useSelector((state)=> state.user);

//   useEffect(() => {
//     dispatch(loadUser());

//     if(error){
//         toast.error(error);
//     }

//     if(isAuthenticated){
//         toast.success("Your account has been successfully created")
//     }
//   }, [dispatch]);

  return (
    <>
        {
            isLoading? <Loading/>:
             (   
                    <div className="bg-[#1E1E1E] sm:w-full">
                        <Toaster toastOptions={{duration: 4000}}/>
                        <div className=" flex flex-col lg:flex-row xl:flex-row h-[100vh]">
                            <div className="md:w-2/4">
                                <div className="w-full flex justify-center items-center flex-col">
                                    <div className='w-full flex justify-center items-center pt-[50px] pl-[20px] md:pt-[50px] md:pl-[170px] lg:pt-[230px] lg:pl-[50px] xl:pt-[230px] xl:pl-[150px]'>
                                        <img src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998359/main_logo_yjsqhl.svg" alt="logo" className="w-[200px] md:w-[300px]"/>
                                    </div>
                                </div>
                                {/* <hr className="bg-white lg:hidden"/> */}
                                {/* <div className="vl hidden lg:block"></div> */}
                            </div>

                            <div className="md:w-2/4 px-8 md:border-l-4 md:border-gray-400">
                                <div className="flex flex-col items-center justify-center md:mt-48 mt-10 md:px-6">
                                    <p className='text-[35px] leading-[36px] text-center text-white mt-8 '>Your Email Account has been verified Successfully</p>
                                    
                                    <Link to={'/birthday'} className="p-2 bg-green-400 text-white font-semibold mt-6 rounded px-4 flex justify-center items-center">
                                        Please Continue &nbsp; <MdArrowForward/>
                                    </Link>
                                    <Link to={"/IndividualDashboard"} className="text-blue-500 underline mt-3 leading-loose underline-offset-4">
                                        Skip, proceed to dashboard {`>>`}
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    </>
  )
}
    

export default EmailVerified


