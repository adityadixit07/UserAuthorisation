import { React, lazy, Suspense, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Loading from "../../components/Loader/Loader";
import { getSellerCatalog } from "../../actions/sellerActions";
import { useDispatch } from "react-redux";

const Listing = lazy(() => import("./ServiceListing.jsx"));
const Availability = lazy(() => import("./AvailabilityBuyerSide.jsx"));
const BuyService = lazy(() => import("./BuymyService/Buymyservice.jsx"));
const Checkout = lazy(() => import("./Checkout/Checkout.jsx"));
// import Error404 from "../ErrorPage/Error404";

function Service() {
    const { username } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (username) {
            dispatch(getSellerCatalog({ username: username }));
        }
    }, [username]);

    return (
        <div>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Listing />
                        </Suspense>
                    }
                />

                <Route
                    exact
                    path="/availability/:catalogID"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Availability />
                        </Suspense>
                    }
                />

                <Route
                    exact
                    path="/buymyservice/:catalogID"
                    element={
                        <Suspense fallback={<Loading />}>
                            <BuyService />
                        </Suspense>
                    }
                />

                <Route
                    exact
                    path="/checkout/:catalogID"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Checkout />
                        </Suspense>
                    }
                />

                {/* <Route
                    exact
                    path="*"
                    element={Error404 />}
                /> */}
            </Routes>
        </div>
    )
}

export default Service