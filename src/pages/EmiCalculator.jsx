import { useState } from "react";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");

  const monthlyRate = rate / 12 / 100;
  const emi = principal && rate && months
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    : 0;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">EMI Calculator</h2>

      <input
        type="number"
        placeholder="Loan Amount (₹)"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="number"
        placeholder="Loan Tenure (months)"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <div className="bg-gray-100 p-4 rounded mt-4">
        <p className="font-bold">Monthly EMI: ₹{emi.toFixed(2)}</p>
      </div>
    </div>
  );
}