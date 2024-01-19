import React from 'react';
import ComingSoon from '../../Pages/Components/CommingSoon';
import AllComponents from '../../Pages/Components/AllProduct/AllComponents';
import DashboardHome from '../../Pages/DashBoard/DashboardHome';
import AddComponentCategory from '../../Pages/DashBoard/ComponentCategory/AddComponentCategory';
import AddComponent from '../../Pages/DashBoard/ComponentCategory/AddComponent';

const DashboardRoute = [
    {
        path: '/dashboard',
        element: <ComingSoon></ComingSoon>,
    },
    {
        path: '/dashboard/home',
        element: <DashboardHome />,
    },
    {
        path: '/dashboard/add-category',
        element: <AddComponentCategory />,
    },
    {
        path: '/dashboard/add-component',
        element: <AddComponent />,
    }
]

export { DashboardRoute }
