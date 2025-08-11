import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-4">About This Website</h1>
      <p>
        This website helps users calculate <strong>GST</strong> and <strong>EMI</strong> quickly and easily.
      </p>

      <p className="mt-4">
        It is built using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and hosted on <strong>Vercel</strong>. No personal data is collected.
      </p>

      <p className="mt-4">
        This project is made by Shreyansh, a self-taught frontend developer from India.
      </p>
    </div>
  );
};

export default About;
