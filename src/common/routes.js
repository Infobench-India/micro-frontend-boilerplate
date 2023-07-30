import Home from "../views/Home/Home.js";
import Products from "../views/Products/Products.js";
import ProductDetail from "../views/ProductDetail/ProductDetail.js";
import Service from "../views/Service/Service.js";
import Login from "../views/Auth/Login.js";
import Registration from "../views/Auth/Registration.js";

export const ROUTE_BASE = "/app.html#";
export const ROUTES = [
  { path: "/home", view: Home },
  { path: "/products", view: Products },
  { path: "/productDetail/:id", view: ProductDetail },
  { path: "/service", view: Service },
  { path: "/login", view: Login },
  { path: "/registration", view: Registration },
];
