import { Suspense, lazy, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useOutsideClick } from "./hooks/clickOutside";

const LandingPage = lazy(() => import("./pages/Landing/LandingPage.jsx"));
const Error404 = lazy(() => import("./pages/ErrorPage/Error404.jsx"));
const User = lazy(() => import("./pages/User/User.jsx"));
const ReferralLink = lazy(() => import("./pages/User/ReferralLink.jsx"));
const Seller = lazy(() => import("./pages/seller/SellerRegistration.jsx"));
const MainArea = lazy(() => import("./pages/main/MainArea.jsx"));
const AdminRouting = lazy(() => import("./Admin-dashboard/AdminRouting.jsx"));
const ForgotPassword = lazy(() => import("./pages/User/ForgotPassword.jsx"));
const ProfileWrapper = lazy(() => import("./pages/PublicProfile/ProfileWrapper.jsx"));
const SellerLanding = lazy(() => import("./pages/seller/SellerLandingPage.jsx"));
const WelcomeEz = lazy(() => import("./pages/seller/WelcomeEz.jsx"));
const SellerRegister1 = lazy(() => import("./pages/seller/registerAsSeller"));
const SellerRegister2 = lazy(() => import("./pages/seller/sellerDetails2"));
import ResetPassword from "./pages/User/ResetPassword";
import Settings from "./Settings";
import Loader from "./components/Loader/Loader.jsx";
import ComingSoon from "./components/Modal/ComingSoon";
import useRememberMe from "./hooks/useRememberMe.js";

const App = () => {
  const { isAuthenticated, isLoading, user } = useSelector((state) => state.user);
  useRememberMe();

  const fetchCode = true;
  const countryCode = "IN";

  const [openComingSoon, setOpenComingSoon] = useState(false);
  const comingSoonRef = useRef(null);
  useOutsideClick(() => {
    if (openComingSoon) {
      setOpenComingSoon(false);
    }
  }, comingSoonRef);

  return (
    < >
      {openComingSoon && <ComingSoon setOpenComingSoon={setOpenComingSoon} comingSoonRef={comingSoonRef} />}

      <Router>
        <Routes>
          {/* Landing Page Route  */}
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <LandingPage />
              </Suspense>
            }
          />

          {/*user page routing routing*/}
          <Route
            path="user/*"
            element={
              <Suspense fallback={<Loader />}>
                <User />
              </Suspense>
            }
          />

          {/* Become Seller Page Route  */}
          <Route
            exact
            path="/sellerhomepage"
            element={
              <Suspense fallback={<Loader />}>
                <SellerLanding
                  isAuthenticated={isAuthenticated}
                  fetchCode={fetchCode}
                  user={user}
                />
              </Suspense>
            }
          />

          {/* Welcome Seller Page Route  */}
          <Route
            exact
            path="/welcomeEzer"
            element={
              <Suspense fallback={<Loader />}>
                <WelcomeEz
                  isAuthenticated={isAuthenticated}
                  fetchCode={fetchCode}
                  user={user}
                />
              </Suspense>
            }
          />

          {/* Seller Page Route 1 */}
          <Route
            exact
            path="/sellerdetails1"
            element={
              <Suspense fallback={<Loader />}>
                <SellerRegister1
                  isLoading={isLoading}
                  isAuthenticated={isAuthenticated}
                  user={user}
                />
              </Suspense>
            }
          />

          {/* Seller Page Route 2 */}
          <Route
            exact
            path="/sellerdetails2"
            element={
              <Suspense fallback={<Loader />}>
                <SellerRegister2
                  webLoading={isLoading}
                  isAuthenticated={isAuthenticated}
                  user={user}
                />
              </Suspense>
            }
          />

          {/* Forgot Pssword Page Route  */}
          <Route
            exact
            path="/forgotpassword"
            element={
              <Suspense fallback={<Loader />}>
                <ForgotPassword />
              </Suspense>
            }
          />

          {/* Reset Pssword Page Route  */}
          <Route
            exact
            path="/reset-password/:token"
            element={
              <Suspense fallback={<Loader />}>
                <ResetPassword />
              </Suspense>
            }
          />

          {/* referral link routing*/}
          <Route
            path="refer/*"
            element={
              <Suspense fallback={<Loader />}>
                <ReferralLink />
              </Suspense>
            }
          />

          <Route
            path="main/*"
            element={
              <Suspense fallback={<Loader />}>
                <MainArea
                  fetchCode={fetchCode}
                  countryCode={countryCode}
                  isAuthenticated={isAuthenticated}
                  isLoading={isLoading}
                  user={user}
                  percentage={user?.profileCompletion}
                  setOpenComingSoon={setOpenComingSoon}
                />
              </Suspense>
            }
          />

          {/*seller page routing routing*/}
          <Route
            path="seller/*"
            element={
              <Suspense fallback={<Loader />}>
                <Seller
                  fetchCode={fetchCode}
                  countryCode={countryCode}
                  isAuthenticated={isAuthenticated}
                  isLoading={isLoading}
                  user={user}
                  percentage={user?.profileCompletion}
                  setOpenComingSoon={setOpenComingSoon}
                />
              </Suspense>
            }
          />

          <Route
            path="ezadmin/*"
            element={
              <Suspense fallback={<Loader />}>
                <AdminRouting />
              </Suspense>
            }
          />

          {/* undefined or error route setting */}
          <Route
            exact
            path={`/settings`}
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />

          {/* public profile page */}
          <Route
            exact
            path="/:username/*"
            element={
              <Suspense fallback={<Loader />}>
                <ProfileWrapper />
              </Suspense>
            }
          />

          <Route
            exact
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <Error404 />
              </Suspense>
            }
          />

          {/* <Route
          exact
          path="/Newnav"
          element={
            <Suspense fallback={<Loader />}>
              <Newnav />
            </Suspense>
          }
        /> */}

          {/* profile Page Route  */}
          {/* <Route
          exact
          path="profile/"
          element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          }
        /> */}

          {/*Service Page Route*/}
          {/* <Route
          path="service/*"
          element={
            <Suspense fallback={<Loader />}>
              <Service
                fetchCode={fetchCode}
                countryCode={countryCode}
              />
            </Suspense>
          }
        /> */}

          {/* <Route
          path="slider"
          element={
            <Suspense fallback={<Loader />}>
              <Slider />
            </Suspense>
          }
        /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
