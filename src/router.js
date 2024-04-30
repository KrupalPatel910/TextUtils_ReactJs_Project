import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";

const router = createBrowserRouter(

    {
        path:"/about",
        element:<About/>
    }
)

export default router;