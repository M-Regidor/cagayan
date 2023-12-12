import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NewUserForm from './components/UserComponents/NewUserForm';
import NewSessionForm from './components/UserComponents/NewSessionForm';
import ProductIndex from './components/ProductComponents/ProductIndex';
import ProductShow from './components/ProductComponents/ProductShow';
import ProductHome from './components/ProductComponents/ProductHome';
import ReviewForm from './components/ReviewComponents/ReviewForm';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "products",
    element: <ProductHome/>,
    children: [
        {
          index: true,
          element: <ProductIndex/>
        },
        {
          path: ":productId",
          element: <ProductShow/>
        },
        {
          path: ":productId/create-review",
          element: <ReviewForm/>
        },
        {
          path: ":productId/edit-review/:reviewId",
          element: <ReviewForm/>
        }
    ]
  },
  {
    path: "products/category/:category",
    element: <ProductIndex/>
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
