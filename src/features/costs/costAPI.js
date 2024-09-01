import axios from "../../utils/axios";

export const getCosts = async () => {
  const response = await axios.get("/costs");

  return response.data;
};

export const addCost = async (data) => {
  const response = await axios.post("/costs", data);

  return response.data;
};

export const editCost = async (id, data) => {
  const response = await axios.put(`/costs/${id}`, data);

  return response.data;
};

export const deleteCost = async (id) => {
  const response = await axios.delete(`/costs/${id}`);

  return response.data;
};
