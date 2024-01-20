import AuthLayout from "../layouts/AuthLayout"
import Customers from "./Customers"
import Dashboard from "./Dashboard"
import Product from "./Product"
import Settings from "./Settings"
import LogIn from "./LogIn"
import DefaultLayout from "../layouts/DefaultLayout"

const config = [
    {
        path:"/",
        element:<Dashboard />,
        Layout:AuthLayout
    },
    // {
    //     path:"/login",
    //     element:<LogIn />,
    //     Layout:DefaultLayout
    // },
    {
        path:"/customers",
        element:<Customers />,
        Layout:AuthLayout
    },
    {
        path:"/product",
        element:<Product />,
        Layout:AuthLayout
    },
    {
        path:"/settings",
        element:<Settings />,
        Layout:AuthLayout
    },
 
]

export default config