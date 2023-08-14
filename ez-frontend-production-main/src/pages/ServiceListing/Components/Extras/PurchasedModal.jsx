import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetPurchase } from "../../../../actions/userActions";

const PurchasedModal = ({ type, username, isAuthenticated }) => {
    const dispatch = useDispatch();

    return (
        <div
            className="px-2 md:px-0 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            style={{ zIndex: 999 }}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-6">
                    <FaCheckCircle className="text-green-500 text-6xl" />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Congratulations!
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                    {type === "Consultation" || type === "Workshop & Training" ? "You have successfully booked the session. " : "You have successfully purchased the item. "}
                    You will recieve a confirmation email shortly.
                </p>
                <div className="flex justify-center">
                    <Link
                        onClick={() => {
                            if (type !== "Consultation") {
                                dispatch(resetPurchase());
                            }
                        }}
                        to={isAuthenticated ? "/main" : `/${username}`}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                        {isAuthenticated ? "Goto Dashboard" : "Go Back"}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PurchasedModal;
