import { useState } from "react";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const authData = {
    username: "ez-admin",
    password: "1234",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    if (authData.username === username && authData.password === password) {
      navigate("/ezadmin/dashboard");
    } else {
      navigate("/ezadmin");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-green-600 text-white p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="appearance-none border rounded  text-slate-900 w-full py-2 px-3  leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              type="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              autoComplete="my-ussebdj"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded text-slate-900 w-full py-2 px-3  leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="what-the"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-300 hover:text-gray-400"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
