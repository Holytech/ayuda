import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ProfileCompletion from "./pages/ProfileCompletion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/profile",
    element: <ProfileCompletion />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
