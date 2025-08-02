import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },

  {
    path: "/About",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },

  {
    path: "/privacy",
    element: (
      <>
        <Header />
        <PrivacyPolicy />
      </>
    ),
  },
]);
export default function App() {

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
    <RouterProvider router={router} />
    </div>
  );
}
