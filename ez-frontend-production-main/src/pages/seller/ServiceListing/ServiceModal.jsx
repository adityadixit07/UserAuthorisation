import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCreateCatalog } from "../../../actions/sellerActions";

const ServiceModal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
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
                    You have successfully created your service & will be published soon!
                </p>
                <div className="flex justify-center">
                    <Link
                        to="/seller"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            dispatch(clearCreateCatalog());
                            navigate("/seller");
                        }}
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
