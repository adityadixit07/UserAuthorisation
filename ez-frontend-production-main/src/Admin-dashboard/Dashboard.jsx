import { useState } from "react";
import UsersTable from "./UsersTable";
import EzForms from "./ezForms";

function Dashboard() {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-2/12">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <button
            className={`block py-2 px-4 rounded ${
              activeButton === "home" ? "bg-blue-600" : ""
            }`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </button>
          <button
            className={`block py-2 px-4 rounded mt-2 ${
              activeButton === "users" ? "bg-blue-600" : ""
            }`}
            onClick={() => handleButtonClick("users")}
          >
            Users
          </button>
          <button
            className={`block py-2 px-4 rounded mt-2 ${
              activeButton === "forms" ? "bg-blue-600" : ""
            }`}
            onClick={() => handleButtonClick("forms")}
          >
            Forms
          </button>
        </div>
      </div>

      {/* Main area */}
      <div className="bg-gray-100 w-10/12 p-8">
        {activeButton === "home" && (
          <div className="overflow-x-auto flex justify-between">
            <div className="w-3/12 bg-white p-4">Total User 100</div>
            <div className="w-3/12 bg-white p-4">Total Forms 30</div>
            <div className="w-3/12 bg-white p-4">Total Seller 50</div>
          </div>
        )}
        {activeButton === "users" && <UsersTable />}
        {activeButton === "forms" && <EzForms />}
      </div>
    </div>
  );
}

export default Dashboard;
