import axios from "../../utils/axios";

export const getProducts = async () => {
  const response = await axios.get("/products");

  return response.data;
};

export const addProducts = async (data) => {
  const response = await axios.post("/products", data);

  return response.data;
};

export const editProducts = async (id, data) => {
  const response = await axios.put(`/products/${id}`, data);

  return response.data;
};

export const deleteProducts = async (id) => {
  const response = await axios.delete(`/products/${id}`);

  return response.data;
};
