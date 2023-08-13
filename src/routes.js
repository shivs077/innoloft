// components
import Home from "./pages/home/Home.jsx";
import Product from "./pages/product/Product.jsx";
import ProductEdit from "./pages/product-edit/ProductEdit.jsx";

const routes = [
  {
    path: "/",
    index: true,
    element: Home,
  },
  {
    path: "/product",
    index: false,
    element: Product,
  },
  {
    path: "/product/edit",
    index: false,
    element: ProductEdit,
  },
];

export default routes;
