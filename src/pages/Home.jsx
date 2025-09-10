import React from "react";
import GstCalculator from "../components/GstCalculator";
import EmiCalculator from "../components/EmiCalculator";
import DiscountCalculator from "../components/DiscountCalculator";

const Home = () => {
  return (
    <div className="min-h-screen p-4 space-y-8 bg-white text-black dark:bg-gray-900 dark:text-white">
      <GstCalculator />
      <EmiCalculator />
      <DiscountCalculator />
    </div>
  );
};

export default Home;
