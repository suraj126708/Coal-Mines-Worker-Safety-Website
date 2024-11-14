/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import NavBar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils";

function LoginPage({ isAuthorised }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    try {
      const url =
        "https://coal-mines-worker-safety-website-api.vercel.app/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (!response.ok) {
        const errorMessage = result?.message || "Login failed";
        setErrors({ apiError: errorMessage });
        handleError(errorMessage);
        console.log(errorMessage);
        return;
      }

      const { token: jwtToken, user } = result;

      if (jwtToken && user) {
        const { name = "Guest", profilePicture } = user;
        handleSuccess("Login successful!");

        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem(
          "profilePicture",
          profilePicture ||
            "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        );

        setTimeout(() => navigate("/"), 1000); // Navigate with a delay
      } else {
        setErrors({ apiError: "Invalid login response structure." });
        handleError("Login response did not contain user data.");
      }
    } catch (err) {
      const errorMessage = err.message || "An unexpected error occurred.";
      setErrors({ apiError: errorMessage });
      handleError(errorMessage);
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar id="black" isAuthorised={isAuthorised} />
      <div className="h-[100vh] flex items-center justify-center">
        <div className="bg-slate-50 bg-opacity-60 p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-black-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-700 cursor-pointer">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
