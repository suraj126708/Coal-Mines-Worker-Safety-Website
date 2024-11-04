/* eslint-disable no-unused-vars */
import { useState } from "react";
import NavBar from "../components/Navbar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    address: "",
    age: "",
    gender: "",
    workerID: "",
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData({ ...formData, profilePicture: file });
    } else {
      toast.error("Please select a valid image file.");
    }
  };

  const handleError = (message) => {
    setErrors((prevErrors) => ({ ...prevErrors, apiError: message }));
    toast.error(message);
  };

  const handleSuccess = (message) => {
    toast.success(message);
  };

  const validateForm = () => {
    // Name validation
    if (!formData.name.trim()) {
      handleError("Name is required.");
    }

    // Email validation
    if (!formData.email.trim()) {
      handleError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      handleError("Email address is invalid.");
    }

    // Password validation
    if (!formData.password) {
      handleError("Password is required.");
    } else if (formData.password.length < 6) {
      handleError("Password must be at least 6 characters long.");
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      handleError("Passwords do not match.");
    }

    if (!formData.contact.trim()) {
      handleError("Contact number is required.");
    } else if (!/^\d{10}$/.test(formData.contact)) {
      handleError("Contact number must be exactly 10 digits.");
    }

    // Address validation
    if (!formData.address.trim()) {
      handleError("Address is required.");
    }

    // Age validation
    if (!formData.age.trim()) {
      handleError("Age is required.");
    } else if (isNaN(formData.age) || formData.age < 0 || formData.age > 120) {
      handleError("Age must be a valid number between 0 and 120.");
    }

    // Gender validation
    if (!formData.gender) {
      handleError("Gender is required.");
    }

    // Worker ID validation
    if (!formData.workerID.trim()) {
      handleError("Worker ID is required.");
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const url =
      "https://coal-mines-worker-safety-website-api.vercel.app/auth/signup";

    // Create FormData object
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    // Send the request
    axios
      .post(url, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          handleSuccess("Registration successful!");
          navigate("/login");
        } else {
          handleError(response.data.message || "Registration failed");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error("Error Response:", err.response.data);
          if (err.response.status === 409) {
            handleError("User already exists. Please try logging in.");
          } else {
            const errorMessage =
              err.response.data.message || "Registration failed";
            handleError(errorMessage);
          }
        } else {
          console.error("Error Message:", err.message);
          handleError("An error occurred during registration.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <NavBar id="black" />
      <div className="h-auto mt-24 flex items-center justify-center ">
        <div className="bg-slate-50 bg-opacity-60 p-8 rounded shadow-md my-4 w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Worker Registration
          </h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {[
              {
                label: "Full Name",
                id: "name",
                type: "text",
                placeholder: "Enter your full name",
              },
              {
                label: "Email",
                id: "email",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Password",
                id: "password",
                type: "password",
                placeholder: "Enter your password",
              },
              {
                label: "Confirm Password",
                id: "confirmPassword",
                type: "password",
                placeholder: "Confirm your password",
              },
              {
                label: "Contact Number",
                id: "contact",
                type: "tel",
                placeholder: "Enter your contact number",
              },
              {
                label: "Address",
                id: "address",
                type: "text",
                placeholder: "Enter your address",
              },
              {
                label: "Age",
                id: "age",
                type: "number",
                placeholder: "Enter your age",
              },
              {
                label: "Worker ID",
                id: "workerID",
                type: "text",
                placeholder: "Enter your Worker ID",
              },
            ].map(({ label, id, type, placeholder }) => (
              <div className="mb-4" key={id}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={id}
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="profilePicture"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
            <div className="mt-6 text-center">
              Already have an account?
              <Link to="/Login" className="text-blue-700 cursor-pointer">
                Login
              </Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
