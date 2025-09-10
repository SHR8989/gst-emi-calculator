import { parse } from 'postcss';
import React, { useState } from 'react'

const DiscountCalculator = () => {

    const [price, setPrice] = useState("");
    const [gstRate, setGstRate] = useState("");
    const [discount, setDiscount] = useState("");
    const [gstAmount, setGstAmount] = useState(null);
    const [discountAmount, setDiscountAmount] = useState(null);
    const [finalPrice, setFinalPrice] = useState(null);

    const calculate = () => {
        const priceNum = parseFloat(price);
        const gstNum = parseFloat(gstRate);
        const discountNum = parseFloat(discount);

        if(isNaN(priceNum) || isNaN(gstNum) || isNaN(discountNum)){
            alert("Please enter valid numbers");
            return;
        }
        // GST Calculation
    const gstValue = (priceNum * gstNum) / 100;

    // Discount Calculation
    const discountValue = (priceNum * discountNum) / 100;

    // Final Price (base + GST - discount)
    const total = priceNum + gstValue - discountValue;

    setGstAmount(gstValue);
    setDiscountAmount(discountValue);
    setFinalPrice(total);

    };

  return (
    <div className='max-w-md mx-auto p-4 bg-white text-black dark:bg-gray-800 dark:text-white'>
        <h2 className='text-2xl font-bold mb-4'>GST with discount</h2>

        <input type="number"
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='w-full p-2 mb-2 placeholder-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder-white text-black border'
        />
        <input type="number"
        placeholder='GST'
        value={gstRate}
        onChange={(e) => setGstRate(e.target.value)}
        className='w-full p-2 mb-2 placeholder-gray-800 dark:text-white dark:placeholder-white text-black dark:bg-gray-800  border'
        />
        <input type="number"
        placeholder='Discount'
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        className='w-full p-2 mb-2 placeholder-gray-800 dark:text-white dark:placeholder-white text-black dark:bg-gray-800 border'
        />

        <button onClick={calculate} className='border rounded p-2 mt-2'>Calculate</button>

        {finalPrice !== null && (
            <div className='bg-gray-100 text-black p-4 rounded mt-4 dark:bg-gray-800 dark:text-white'>
                <p>GST Amount: {gstAmount.toFixed(2)}</p>
                <p>Discount Amount: {discountAmount.toFixed(2)}</p>
                <p><b>Final Price: {finalPrice.toFixed(2)}</b></p>
            </div>
        )}
    </div>
  )
};

export default DiscountCalculator