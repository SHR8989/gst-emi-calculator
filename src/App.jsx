import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },

  {
    path: "/About",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },

  {
    path: "/privacy",
    element: (
      <>
        <Header />
        <PrivacyPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
]);
export default function App() {

  return (
    <div className="bg-white overflow-x-hidden min-h-screen text-black dark:bg-gray-900 dark:text-white">
    <RouterProvider router={router} />
    </div>
  );
}
