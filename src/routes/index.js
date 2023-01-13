
import AuthContainer from "../features/auth/AuthContainer";
import HomeContainer from "../features/home/HomeContainer";


export default [
    {
        name: 'Auth',
        isSidebarLink: true,
        path: '/',
        element: <AuthContainer />,
        isPrivate: false
    },
    {
        name: 'Home',
        isSidebarLink: true,
        path: '/home',
        element: <HomeContainer />,
        isPrivate: true
    },
]