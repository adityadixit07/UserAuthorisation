import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../actions/userActions";
import { Route, Routes, useParams } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar/Newnav/NewNav";
import Loader from "../../components/Loader/Loader";

const PublicProfile = lazy(() => import("./PublicProfile"));
const Service = lazy(() => import("../ServiceListing/Service"));

const ProfileWrapper = () => {
    const { username } = useParams();
    const dispatch = useDispatch();
    const { isFetchingProfile, profile, isAuthenticated, user } = useSelector(state => state.user);

    useEffect(() => {
        if (username) {
            dispatch(fetchProfile({
                username: username,
                profileView: user?.username !== username || (!isAuthenticated && !user),
            }));
        }
    }, [username]);

    return (
        <>
            <Toaster toastOptions={{ duration: 5000 }} />

            <div className="w-full sticky top-0 z-50 shadow h-[10vh] bg-white">
                <Navbar />
            </div>

            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loader />}>
                            {isFetchingProfile ? <Loader /> : profile && <PublicProfile />}
                        </Suspense>
                    }
                />
                <Route
                    path="service/*"
                    element={
                        <Suspense fallback={<Loader />}>
                            {isFetchingProfile ? <Loader /> : profile && <Service />}
                        </Suspense>
                    }
                />
            </Routes>

        </>
    );
};

export default ProfileWrapper