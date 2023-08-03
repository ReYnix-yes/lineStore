import { baseInstance } from "./instances";

export const getProducts = () => baseInstance.get("/products");
export const getProduct = (id) => baseInstance.get(`/products/${id}`);
