import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NewUserForm from './components/NewUserForm';
import NewSessionForm from './components/NewSessionForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "login",
    element: <NewSessionForm/>
  },
  {
    path: "signup",
    element: <NewUserForm/>
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
