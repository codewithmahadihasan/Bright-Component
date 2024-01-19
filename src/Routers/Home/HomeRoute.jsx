import SignIn from "../../Pages/Home/Auth/SignIn"
import SignUp from "../../Pages/Home/Auth/SignUp"
import Home from "../../Pages/Home/Home"


const HomeRoute = [
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    }
]

export { HomeRoute }