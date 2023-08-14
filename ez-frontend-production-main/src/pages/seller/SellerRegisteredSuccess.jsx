import { FaCheckCircle } from "react-icons/fa";

const SellerRegisteredPage = () => {
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
          You are now a registered seller with our platform. Start exploring and
          managing your store to reach out to customers.
        </p>
        <div className="flex justify-center">
          <a
            href="/seller"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default SellerRegisteredPage;
