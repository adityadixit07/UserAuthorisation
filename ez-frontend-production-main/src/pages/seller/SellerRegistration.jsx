import { lazy, Suspense, useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import Loading from "../../components/Loader/Loader.jsx";
import Availability from "./dashboard/Availability.jsx";
import Bookings from "./dashboard/Bookings.jsx";
import ManageListings from "./dashboard/ManageListings/ManageListings.jsx";
import SellerNavbar from "./SellerNavbar.jsx";
import Marketplace from "../main/Marketplace.jsx";
import Startup from "../main/Startup/Startup.jsx";
import SellerDashboardSidebar from "./SellerDashboardSidebar.jsx";

import "./SellerRegistration.css";
import AddService from "./dashboard/AddService.jsx";
// import AddEmailPhone from "../../components/Modal/AddEmailPhone.jsx";
import { useDispatch } from "react-redux";
import { getBookings } from "../../actions/sellerActions.js";
const SellerDashboard = lazy(() => import("./SellerDashboard.jsx"));

const SellerRegistration = ({
  fetchCode,
  countryCode,
  isAuthenticated,
  isLoading,
  user,
  percentage,
  setOpenComingSoon,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const profileRoute = `/main/profile/${countryCode}/${user?.firstName}`;
  const profileRoute = `/main/profile/${user?.username || user?.firstName}`;
  // const { percentage } = useProfileCompletion({ isLoading, isAuthenticated, userID: user?._id });

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <SellerDashboard
            user={user}
            isAuthenticated={isAuthenticated}
            profileRoute={profileRoute}
            percentage={percentage}
          />
        </Suspense>
      ),
    },
    {
      path: "/addservice",
      element: (
        <Suspense fallback={<Loading />}>
          <AddService user={user} setOpenComingSoon={setOpenComingSoon} />
        </Suspense>
      ),
    },
    {
      path: "/marketplace",
      element: (
        <Suspense fallback={<Loading />}>
          <Marketplace />
        </Suspense>
      ),
    },
    {
      path: "/managelistings",
      element: (
        <Suspense fallback={<Loading />}>
          <ManageListings
            user={user}
            isAuthenticated={isAuthenticated}
            profileRoute={profileRoute}
          />
        </Suspense>
      ),
    },
    {
      path: "/availability",
      element: (
        <Suspense fallback={<Loading />}>
          <Availability />
        </Suspense>
      ),
    },
    {
      path: "/bookings",
      element: (
        <Suspense fallback={<Loading />}>
          <Bookings user={user} />
        </Suspense>
      ),
    },
    {
      path: "/startupcommunity",
      element: (
        <Suspense fallback={<Loading />}>
          <Startup />
        </Suspense>
      ),
    },
  ]);

  const pathsToShowDashboardBar = [
    "/seller",
    "/seller/marketplace",
    ,
    "/seller/addservice",
    ,
    "/seller/managelistings",
    "/seller/availability",
    "/seller/bookings",
  ];

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      let sellerDetail = {};
      // if (user?.phone) {
      //   sellerDetail = {
      //     seller_phone: user.phone,
      //   };
      // } else if (user?.email) {
      //   sellerDetail = {
      //     seller_email: user.email,
      //   };
      // }
      sellerDetail = {
        seller_id: user._id
      };
      dispatch(getBookings(sellerDetail));
    }
  }, [isLoading, isAuthenticated]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/user/login");
    }
    if (!isLoading && isAuthenticated && user.role !== "seller") {
      navigate("/main");
    }
  }, [isLoading, isAuthenticated, user?.role]);

  return (
    <>
      <div className="w-full">
        {/* {isAuthenticated && !user?.phone && (
          <AddEmailPhone missing="Phone" />
        )}
        {isAuthenticated && !user?.email && (
          <AddEmailPhone missing="Email" />
        )} */}

        <div className="w-full sticky top-0 z-50 shadow h-[10vh] bg-white">
          <SellerNavbar
            fetchCode={fetchCode}
            profileRoute={profileRoute}
            isAuthenticated={isAuthenticated}
            user={user}
            setOpenComingSoon={setOpenComingSoon}
          />
        </div>

        {pathsToShowDashboardBar.includes(location.pathname) ? (
          <div className="w-full md:h-[90vh] md:overflow-hidden md:px-24">
            <div className="flex md:flex-row flex-col my-0 md:my-2 pt-2 md:pt-4 h-full overflow-hidden md:overflow-y-auto">
              <div className="w-full md:w-1/5 md:mr-[8vh] xl:mr-[12vh] h-full overflow-y-auto scrollbar-hide">
                {user && (
                  <SellerDashboardSidebar
                    user={user}
                    profileRoute={profileRoute}
                    setOpenComingSoon={setOpenComingSoon}
                  />
                )}
              </div>

              <div className="w-full md:w-4/5 h-full overflow-y-auto scrollbar-hide">
                {routes}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">{routes}</div>
        )}
      </div>
    </>
  );
};

export default SellerRegistration;
