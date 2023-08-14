import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import verified2 from "../../../assets/verified.png";
import logo from "../../../assets/logo.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSellerCatalogByID } from "../../../actions/sellerActions";
import Loading from "../../../components/Loader/Loader";
import { purchaseItem } from "../../../actions/userActions";
import PurchasedModal from "../Components/Extras/PurchasedModal";
import UserDetail from "../../../components/Modal/UserDetail";

const Checkout = () => {
  const dispatch = useDispatch();
  const { catalogID } = useParams();

  const { isFetchingCatalog, catalogs, catalog } = useSelector(state => state.seller);
  const { isAuthenticated, user, isPurchasing, isPurchased } = useSelector(state => state.user);

  const [openDetail, setOpenDetail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [rawPhone, setRawPhone] = useState("");

  const phoneHandler = (phone, country) => {
    setPhone(phone);
    setCountryCode(country.dialCode);

    const rawPh = phone.replace(country.dialCode, "");
    setRawPhone(rawPh);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setName(`${user.firstName ? user.firstName : ""} ${user.lastName ? user.lastName : ""}`);
      setEmail(`${user.email ? user.email : ""}`);
      setPhone(`${user.phone ? `+91${user.phone}` : ""}`);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(getSellerCatalogByID({ catalogID: catalogID }));
  }, []);

  const filteredCatalogs = catalogs?.length > 0 ? catalogs.filter(data => data?._id !== catalog?._id).slice().reverse() : [];

  const handlePurchaseItem = () => {
    const itemData = {
      isAuthenticated: isAuthenticated,
      seller_id: catalog?.seller_user?._id,
      seller_username: catalog?.username,
      seller_name: `${catalog?.seller_user?.firstName} ${catalog?.seller_user?.lastName}`,
      seller_email: catalog?.seller_user?.email,
      seller_phone: catalog?.seller_user?.phone,
      seller_itemID: catalog?._id,
      seller_itemTitle: catalog?.itemTitle,
      seller_photo: catalog?.seller_avatar,
      ...isAuthenticated && {
        buyer_id: user._id,
        buyer_username: user?.username,
        buyer_photo: user?.avatar?.url,
      },
      buyer_name: name,
      buyer_email: email,
      buyer_countryCode: countryCode,
      buyer_phone: rawPhone,
      ...catalog.serviceType === "Workshop & Training" && {
        bookedDate: catalog.workShopDetails.date,
      },
      price: catalog.price,
      service_type: catalog.serviceType,
      createdAt: new Date(),
    };

    dispatch(purchaseItem(itemData));
  };

  return (
    isFetchingCatalog ? <Loading /> : catalog && (
      <>
        {isPurchased && (
          <PurchasedModal
            type={catalog.serviceType}
            username={catalog.username}
            isAuthenticated={isAuthenticated}
          />
        )}
        {openDetail && (
          <UserDetail
            handleProceedToBuy={handlePurchaseItem}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneHandler={phoneHandler}
            price={`${catalog?.price?.currencyCode} ${catalog?.price?.amount}`}
            loading={isPurchasing}
            openDetail={openDetail}
            setOpenDetail={setOpenDetail}
          />
        )}
        <div className="px-2 md:mx-auto md:px-24">
          <div className="flex justify-center items-center h-full -ml-4 mt-4">
            <img src={logo} alt="logo" className="w-25" />
            <h1 className="text-2xl font-bold ml-0 text-gray-500">Assured Service</h1>

            <img src={verified2} alt="verified" className="w-10" />

          </div>

          <div className="w-full flex justify-center items-center h-full">
            <div className="w-full text-xl font-bold ml-0 md:justify-center mt-3 flex items-center text-gray-500">
              <p>Top Rated Professional  + Work Quality Guarentee</p>
              <div className="flex">
                <div className="relative ml-2 w-20 h-20 md:w-32 md:h-32 bg-green-500 rounded-full"></div>
                <div className="relative -ml-10 md:-ml-12 w-20 h-20 md:w-32 md:h-32 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>


          <div className="bg-gray-1000 mt-5 md:mt-0 mb-16 md:mb-0">
            <h1 className="mb-5 text-3xl font-bold text-gray-700">
              Summary
            </h1>

            <div className="justify-around md:flex md:space-x-6 xl:gap-16 xl:px-0">
              <div className="rounded-lg border md:w-2/3 shadow-md">
                <div className="justify-between rounded-lg bg-white p-6 sm:flex sm:gap-5 sm:justify-start">
                  <img
                    src={catalog?.thumbnail[0]?.url ? catalog?.thumbnail[0]?.url : "/NavLogo.png"}
                    alt="product-image"
                    className={`w-full rounded-lg sm:w-[300px] sm:h-[247.5px] ${catalog?.thumbnail[0]?.url ? "object-cover" : "object-contain"}`}
                  />
                  <div className="">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                        {catalog.itemTitle}
                      </h2>
                      <p className="mt-1 text-xs md:text-[18px] md:leading-6 text-gray-700">
                        {catalog?.description}
                      </p>
                    </div>
                    {/* <div className="mt-4 h-full flex items-center sm:mt-0 sm:block sm:space-x-6">
                      <div className="h-full flex items-center space-x-4">
                        <p className="text-sm flex">
                          <span>{catalog?.price?.currencyCode}</span>
                          <span>{catalog?.price?.amount}</span>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="mt-6 h-full rounded-lg border bg-white p-6 md:p-10 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-4 flex justify-between">
                  <p className="text-gray-700 font-bold text-2xl">Payment Summary</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700 flex">
                    <span>{catalog?.price?.currencyCode}</span>
                    <span>{catalog?.price?.amount}</span>
                  </p>
                </div>
                {/* <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">₹3,386</p>
              </div> */}
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold flex items-center">
                      <span>{catalog?.price?.currencyCode}</span>
                      <span>{catalog?.price?.amount}</span>
                      <span className="pl-2 text-sm text-gray-700">({catalog?.price?.typeOfPayment})</span>
                    </p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button
                  disabled={isPurchasing}
                  onClick={() => setOpenDetail(true)}
                  className={`${isPurchasing ? "bg-blue-600 cursor-not-allowed" : "bg-green-500 cursor-pointer"} h-[40px] text-center mt-6 py-1.5 w-full flex items-center justify-center rounded-md font-medium text-blue-50 hover:bg-blue-600`}
                >
                  Proceed to Pay
                </button>
              </div>
            </div>

            {catalogs?.length > 0 && (
              <div className="pt-10">
                <ProductCard
                  filteredCatalogs={filteredCatalogs}
                />
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default Checkout;