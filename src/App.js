import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
const router = createBrowserRouter(
  [
    {
      path: '/e-commerce-project/',
      element: <HomePage/>
    },
    {
      path: '/e-commerce-project/product/:id',
      element: <ProductDetails/>
    }
  ]
);
function App() {
  return <RouterProvider router={router}/>
}

export default App;
