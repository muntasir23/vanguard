import React, { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { TbSquareRoundedX } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, removeProduct } from "../features/products/productsSlice";

export default function AllProduct() {
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let content;

    
  const handleDelete = (id) =>{
    dispatch(removeProduct(id))
  }

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

  if (!isLoading && !isError && products?.length > 0) {
    content = products.map((p) => (
      <div key={p.id} className="product card p-3 bg-white rounded shadow">
        <div className="flex items-center justify-between">
          <p className="text-[#344029] font-semibold">Name</p>
          <p>
            Stock: <strong>{p.inStock}</strong>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>
            Cloth Cost: <strong>{p.cloth}</strong>{" "}
          </p>
          <p>
            Sewing Cost: <strong>{p.sewing}</strong>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>
            Packaging: <strong>{p.packaging}</strong>
          </p>
          <p>
            Label: <strong>{p.label}</strong>{" "}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>
            Gift: <strong>{p.gift}</strong>{" "}
          </p>
          <p className="text-blue-600">
            Selling Price: <strong>{p.sellingPrice}</strong>{" "}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 border-t pt-2">
          <p className="text-red-600 font-semibold">
            Total Cost of Product:{" "}
            {p.cloth + p.sewing + p.packaging + p.label + p.gift}
          </p>
          <p className="flex items-center gap-2">
            <MdEdit />{" "}
            <p onClick={() => handleDelete(p.id)}>
              <TbSquareRoundedX />
            </p>{" "}
          </p>
        </div>
      </div>
    ));
  }



  return (
    <div className="all-product p-2">
      <div className="mt-5">
        <p className="font-bold">Product Details</p>
        <div className="all-product-details grid md:grid-cols-3 gap-4 grid-cols-1 mt-4">
          {content}
        </div>
      </div>
    </div>
  );
}
