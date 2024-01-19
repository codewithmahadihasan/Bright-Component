import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import ScrollToTop from "../ScrollTop";
import { HomeRoute } from "./Home/HomeRoute";
import { ComponentsRoute } from "./ComponentsRoute/ComponentsRout";
import CompontsLayout from "../Layouts/CompontsLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import { DashboardRoute } from "./DashBoardRouter/DashboardRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <ScrollToTop />
            <HomeLayout />
        </>,
        children: HomeRoute

    },
    {
        path: "/components",
        element: <>
            <ScrollToTop />
            <CompontsLayout />
        </>,
        children: ComponentsRoute
    },
    {
        path: "/dashboard",
        element: <>
            <ScrollToTop />
            <DashboardLayout />
        </>,
        children: DashboardRoute
    }
])

export default Router;