import { RouteObject } from "react-router-dom";
import { ProductCreate } from "@repo/ui/pages/product";
import ProductList from "./ProductList";

const productRoutes: RouteObject[] = [
  {
    id: "product-list",
    path: "",
    element: <ProductList />,
  },
  {
    id: "product-create",
    path: "new",
    element: <ProductCreate />,
  },
];

export default productRoutes;
