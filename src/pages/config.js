import AuthLayout from "../layouts/AuthLayout"
import Home from "./Home"


const config = [
    {
        path:"/",
        element:<Home />,
        Layout:AuthLayout
    }
]

export default config