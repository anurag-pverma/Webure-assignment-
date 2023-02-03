import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../Components/Blog";
import Careers from "../Components/Careers";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import RoiStory from "../Components/RoiStory";
import Service from "../Components/Service";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/service",
      element: <Service/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
    },
    {
      path: "/careers",
      element: <Careers/>,
    },
    {
      path: "/roi_story",
      element: <RoiStory/>,
    },
  ]);

  export default router;