import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

 function GstCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [includeGst, setIncludeGst] = useState(false);

  const gst = (amount * rate) / 100;
  const total = includeGst ? amount : Number(amount) + gst;
  const base = includeGst ? amount - gst : amount;

  const downloadPDF = () => {
    const input = document.getElementById("gst-result");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("gst-calculation.pdf");
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded text-black dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">GST Calculator</h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-2  text-black dark:bg-gray-800 dark:text-white"
      />

      <select
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="border p-2 w-full mb-2  text-black dark:bg-gray-800 dark:text-white"
      >
        <option value="5">5%</option>
        <option value="12">12%</option>
        <option value="18">18%</option>
        <option value="28">28%</option>
      </select>

      <label className="block mb-2  text-black dark:bg-gray-800 dark:text-white">
        <input
          type="checkbox"
          checked={includeGst}
          onChange={() => setIncludeGst(!includeGst)}
          className="mr-2"
        />
        Amount includes GST
      </label>

      <div id="gst-result" className="bg-gray-100 p-4 rounded mt-4  text-black dark:bg-gray-800 dark:text-white">
        <p>Base Amount: ₹{Number(base).toFixed(2)}</p>
        <p>GST: ₹{gst.toFixed(2)}</p>
        <p className="font-bold">Total: ₹{Number(total).toFixed(2)}</p>
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

export default GstCalculator