import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import CountriesPage from "./pages/Countries";
import GeneralInfoPage from "./pages/GeneralInfo";
import PageNotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children: [
      {
        index: true,
        element: <GeneralInfoPage />,
      },
      {
        path: "countries",
        element: <CountriesPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ]
  },
  { path: '*', element: <PageNotFound /> },

]);

export default router;
