/* eslint-disable react/prop-types */
import NavBar from "../components/Navbar";
import Home1 from "../components/Home1";
import NeedOfWorkerPage from "../components/Home2";
import SafetyInformation from "../components/Home3";
import SafetyAlertsPage from "../components/Home4";
import WorkerOfTheMonth from "../components/Home5";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { handleError } from "../utils";

export default function HeroPage() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          "https://coal-mines-backend.onrender.com/workers",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        handleError(error);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails)
    return (
      <div className="text-center mt-[20rem] font-serif font-semibold text-2xl">
        Loading...
      </div>
    );

  return (
    <div className="bg-gray-100">
      <NavBar />
      <Home1 />
      <SafetyAlertsPage />
      <WorkerOfTheMonth user={userDetails} />
      <NeedOfWorkerPage />
      <SafetyInformation />
      <Footer />
    </div>
  );
}
