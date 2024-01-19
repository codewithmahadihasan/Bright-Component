import React from 'react';
import Home from '../../Pages/Home/Home';
import ComingSoon from '../../Pages/Components/CommingSoon';
import AllComponents from '../../Pages/Components/AllProduct/AllComponents';
import Error from '../../CommonComponets/Error';

const ComponentsRoute = [
    {
        path: '/components',
        element: <ComingSoon></ComingSoon>,
    },
    {
        path: '/components/*',
        element: <Error />,
    },
    {
        path: '/components/:id',
        element: <AllComponents />,
    }
]

export { ComponentsRoute }

