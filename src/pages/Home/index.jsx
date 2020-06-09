import React from "react";
import HomeCard from "../../components/HomeCard";
import PortfolioCard from "../../components/PortfolioCard";
import ContactCard from "../../components/ContactCard";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className="container-fluid">
      {location.pathname === "/" ? <HomeCard /> : ""}
      {location.pathname === "/portfolio" ? <PortfolioCard /> : ""}
      {location.pathname === "/contacts" ? <ContactCard /> : ""}
    </div>
  );
}
