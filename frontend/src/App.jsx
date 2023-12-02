import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NewUserForm from './components/NewUserForm';
import NewSessionForm from './components/NewSessionForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "signup",
        element: <NewUserForm/>
      },
      
      {
        path: "login",
        element: <NewSessionForm/>
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
