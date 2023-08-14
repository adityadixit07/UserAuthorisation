import React from "react";
import "./buyservice.css";
import UIUXdesign from './UIUXdesign';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSellerCatalogByID } from "../../../actions/sellerActions";
import { useEffect } from "react";
import Loading from "../../../components/Loader/Loader";
// import ServiceListingBanner from "../serviceListingBanner";
// import Footer from "../../Landing/components/footer";

function BuyService() {
  const { catalogID } = useParams();
  const dispatch = useDispatch();

  const { profile } = useSelector(state => state.user);
  const { isFetchingCatalog, catalogs } = useSelector(state => state.seller);
  const { catalog } = useSelector(state => state.seller);

  useEffect(() => {
    if (catalogID) {
      dispatch(getSellerCatalogByID({ catalogID: catalogID }));
    }
  }, [catalogID]);

  return (
    isFetchingCatalog ? <Loading /> : catalog?.serviceType === "Service Package" && (
      <>
        {/* <ServiceListingBanner profile={profile} /> */}

        <section className="section2 flex flex-col md:flex-row gap-4 mx-3 md:mx-28">
          <div className="w-full">
            <UIUXdesign
              catalog={catalog}
              catalogs={catalogs}
            />
          </div>
        </section>

        {/* <div className="w-full mt-20 bg-gray-100">
          <Footer />
        </div> */}
      </>
    )
  );
}
export default BuyService;