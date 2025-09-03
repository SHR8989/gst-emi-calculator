import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-6 pt-10 md:pt-[8rem] max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600 ">
        About <span className="text-gray-400">this website</span>
      </h1>

      <p>
        This website helps users calculate <strong>GST</strong> and{" "}
        <strong>EMI</strong> quickly and easily.
      </p>
      <p className="mt-4">
        A GST and EMI calculator is an online tool that streamlines the process
        of calculating taxes and loan repayments. The GST (Goods and Services
        Tax) calculator computes the applicable tax on goods and services,
        helping users determine the final price, including or excluding GST. An
        EMI (Equated Monthly Installment) calculator helps borrowers find their
        monthly repayment amount for loans like home or personal loans.{" "}
      </p>
      <p className="mt-4">
        By entering the principal amount, interest rate, and loan tenure, the
        EMI calculator provides a clear monthly payment breakdown, ensuring
        better financial planning. Combining both functions in one tool can help
        businesses and individuals manage their cash flow and financial
        obligations accurately and efficiently.
      </p>
      <p className="mt-4">
        It is built using <strong>React.js</strong>,{" "}
        <strong>Tailwind CSS</strong>, and hosted on <strong>Vercel</strong>. No
        personal data is collected.
      </p>

      <p className="mt-4">
        This project is made by Shreyansh, a frontend developer from India.
      </p>
    </div>
  );
};

export default About;
