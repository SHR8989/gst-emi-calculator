import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

 function EmiCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");

  let emi = 0;

  if(principal && rate && months) {
    const monthlyRate = rate / 12 / 100;

    if(monthlyRate === 0) {
      emi = principal / months
    } else {
      emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }
  }

 const downloadPDF = () => {
    const input = document.getElementById("emi-calculator");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("emi-calculation.pdf");
    });
  };

  return (
    <div id="emi-calculator" className="max-w-md mx-auto p-4 bg-white shadow rounded  text-black dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">EMI Calculator</h2>

      <input
        type="number"
        placeholder="Loan Amount (₹)"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="border p-2 w-full mb-2  text-black dark:bg-gray-800 dark:text-white"
      />

      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="border p-2 w-full mb-2  text-black dark:bg-gray-800 dark:text-white"
      />

      <input
        type="number"
        placeholder="Loan Tenure (months)"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="border p-2 w-full mb-2  text-black dark:bg-gray-800 dark:text-white"
      />

      <div className="bg-gray-100 p-4 rounded mt-4  text-black dark:bg-gray-800 dark:text-white">
        <p className="font-bold">Monthly EMI: ₹{Number(emi).toFixed(2)}</p>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
}

export default EmiCalculator