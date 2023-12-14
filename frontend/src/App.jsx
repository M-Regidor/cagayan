import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NewUserForm from './components/UserComponents/NewUserForm';
import NewSessionForm from './components/UserComponents/NewSessionForm';
import ProductIndex from './components/ProductComponents/ProductIndex';
import ProductShow from './components/ProductComponents/ProductShow';
import ProductHome from './components/ProductComponents/ProductHome';
import ReviewForm from './components/ReviewComponents/ReviewForm';
import CartItemIndex from './components/CartItemComponents/CartItemIndex';
import CategoryProducts from './components/CategoryProducts';
import SearchProducts from './components/SearchProducts';




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
      path: "category/:category",
      element: <CategoryProducts/>
  },
  {
    path: "search/:keyword",
    element: <SearchProducts/>
  },
  {
    path: "cart",
    element: <CartItemIndex/>
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
