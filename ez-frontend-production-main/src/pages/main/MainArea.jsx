import { lazy, Suspense, useEffect } from "react";
const IndividualDashboard = lazy(() => import("./IndividualDashboard.jsx"));
const ProfileNew = lazy(() => import("../Profile/ProfileNew.jsx"));
const Orders = lazy(() => import("./IndividualDashboard/IndiCommp/DashboardBar/Components/Orders"));
const Marketplace = lazy(() => import("./Marketplace.jsx"));
const StartupCommunity = lazy(() => import("./Startup/Startup.jsx"));
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loader/Loader";
import FirstEditParent from "../Profile/FirstTimeProfileEdit/FirstEditParent.jsx";
import DashboardBar from "./IndividualDashboard/IndiCommp/DashboardBar/DashboardBar.jsx";
import UserNavbar from "../../components/Navbar/UserNavbar.jsx";
import "./MainArea.css";
// import AddEmailPhone from "../../components/Modal/AddEmailPhone";


const MainArea = ({ fetchCode, countryCode, isAuthenticated, isLoading, user, percentage, setOpenComingSoon }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // const profileRoute = `profile/${countryCode}/${user?.username}`;
  const profileRoute = `profile/${user?.username || user?.firstName}`;

  const pathsToShowDashboardBar = ['/main', '/main/marketplace', '/main/orders'];

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/user/login");
    }
  }, [isLoading, isAuthenticated]);

  return (
    <div className="w-full">
      {/* {isAuthenticated && !user?.phone && (
        <AddEmailPhone missing="Phone" />
      )}
      {isAuthenticated && !user?.email && (
        <AddEmailPhone missing="Email" />
      )} */}

      <div className="w-full sticky top-0 z-50 shadow h-[10vh] bg-white">
        <UserNavbar
          fetchCode={fetchCode}
          profileRoute={profileRoute}
          isAuthenticated={isAuthenticated}
          user={user}
          setOpenComingSoon={setOpenComingSoon}
        />
      </div>

      {pathsToShowDashboardBar.includes(location.pathname) && user && (
        <div className="w-full md:h-[90vh] md:overflow-hidden md:px-24">
          <div className="flex md:flex-row flex-col my-0 md:my-2 pt-2 md:pt-4 h-full overflow-hidden md:overflow-y-auto">
            <div className="w-full md:w-1/5 md:mr-[8vh] xl:mr-[12vh] h-full overflow-y-auto scrollbar-hide">
              {user && (
                <DashboardBar
                  user={user}
                  profileRoute={profileRoute}
                  setOpenComingSoon={setOpenComingSoon}
                />
              )}
            </div>

            {/* <div className="w-full md:ml-[100px]"> */}
            <div className="w-full md:w-4/5 h-full overflow-y-auto scrollbar-hide">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<Loading />}>
                      <IndividualDashboard
                        percentage={percentage}
                        profileRoute={profileRoute}
                        user={user}
                        setOpenComingSoon={setOpenComingSoon}
                      />
                    </Suspense>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Orders user={user} />
                    </Suspense>
                  }
                />
                <Route
                  path="/marketplace"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Marketplace />
                    </Suspense>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route
          exact
          path={profileRoute}
          element={
            <Suspense fallback={<Loading />}>
              <ProfileNew />
            </Suspense>
          }
        />
        <Route
          exact
          path={profileRoute + "/profileFirst"}
          element={
            <Suspense fallback={<Loading />}>
              <FirstEditParent />
            </Suspense>
          }
        />
        <Route
          exact
          path="/startupcommunity"
          element={
            <Suspense fallback={<Loading />}>
              <StartupCommunity />
            </Suspense>
          }
        />

      </Routes>
    </div >
  );
};

export default MainArea;