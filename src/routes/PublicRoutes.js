import Loadable from "react-loadable";
import { Navigate } from "react-router-dom";
import SignUpLayout from "../layout/SignUpLayout";

const Login =Loadable({ loader: () => import("../component/pages/Login"),
loading: () => <h1>Loading...</h1>,
})

const SignUp=Loadable({ loader: () => import("../component/pages/SignUp"),
loading: () => <h1>Loading...</h1>
})

const PublicRoutes = {
element:<SignUpLayout/>,
children:[
    {
        path:'/',
        element:<SignUp/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:"*",
        element:<Navigate to={'/'}/>
    }
]
}

export default PublicRoutes;