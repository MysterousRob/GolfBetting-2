import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import LiveOdds from "./pages/livegolfodds";
import Sites from "./pages/golfbettingsites";
import Tips from "./pages/golfbettingtips";
import Week from "./pages/Betsoftheweek";
// import OpenChamp from "./pages/tournaments/openchamp";
// import TheMasters from "./pages/tournaments/themaster";
// import TheOpen from "./pages/tournaments/theopen";
// import UsPga from "./pages/tournaments/uspga";
import News from "./pages/News";
import LiveScores from "./components/LiveScores";
import AboutUs from "./pages/AboutUs";
import GbsInfo from "./pages/GBSpredictorinfo";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ImageOff } from "lucide-react";

//header router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Tips",
    element: <Tips />,
  },
  {
    path: "/Odds",
    element: <LiveOdds />,
  },
  {
    path: "/Week",
    element: <Week />,
  },
  {
    path: "/Sites",
    element: <Sites />,
  },
  //footer router
  {
    path: "/Masters",
    element: <TheMasters />,
  },
  {
    path: "/Open",
    element: <TheOpen />,
  },
  {
    path: "/OpenChamp",
    element: <OpenChamp />,
  },
  {
    path: "/PGA",
    element: <UsPga />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Scores",
    element: <LiveScores />,
  },
  {
    path: "/About",
    element: <AboutUs />,
  },
  {
    path: "/Info",
    element: <GbsInfo />,
  },
  {
    path: "",
    element: "",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
