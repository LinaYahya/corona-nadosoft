import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import CountriesPage from "./pages/Countries";
import GeneralInfoPage from "./pages/GeneralInfo";

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
      // {
      //   path: "contacts/:contactId",
      //   element: <Contact />,
      // },

      {
        path: "about",
        element: <About />,
      },
    ]
  },
]);

export default router;
