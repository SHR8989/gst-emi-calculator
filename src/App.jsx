import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
