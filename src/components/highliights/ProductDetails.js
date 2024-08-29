import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";

export default function ProductDetails() {
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let content;

  if (isLoading) content = <p className="text-[14px] font-bold">Loading...</p>;
  if (!isLoading && isError)
    content = <p className="text-[14px] font-bold">{error}</p>;
  if (!isLoading && !isError && products?.length > 0)
    content = products.map((product) => (
      <div
        className="each-product flex justify-between items-center border-b pb-4"
        key={product.id}
      >
        <p className="text-[14px]">{product.name}</p>
        <p className="in-stock text-[20px] font-bold">{product.inStock}</p>
      </div>
    ));

  if (!isLoading && !isError && products?.length === 0)
    content = <p className="text-[14px] font-bold">No product found...</p>;

  const totalStock = products.reduce((prev, curr) => prev + curr.inStock, 0);

  return (
    <div className="product-details rounded-md p-2 bg-white shadow">
      <p className="font-bold">Product Details</p>
      <p className="text-[14px]">
        In Stock <strong className="text-[18px] ml-2">{totalStock || 0}</strong>
      </p>
      <div className="details mt-5">{content}</div>
    </div>
  );
}
