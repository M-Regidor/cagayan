import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './compenents/Home';
import NewUserForm from './compenents/NewUserForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "signup",
        element: <NewUserForm/>
      }

    ]
  },
  {
    path: "*",
    element: <Navigate to={"/"}/>
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
    )
}

export default App;
