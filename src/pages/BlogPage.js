import React, { useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import SingleBlogs from "../components/singleblogs/SingleBlogs";
import { Link, useParams } from "react-router-dom";
import RelatedBlogs from "../components/singleblogs/RelatedBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../features/blog/blogSlice";

export default function BlogPage() {
  const dispatch = useDispatch();

  const { blog, isError, isLoading, error } = useSelector((state) => state.blog);



  const { blogId } = useParams();
  console.log(blogId);

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  let content ;

  if (isLoading) content = <h1>Loading...</h1>;
  if (!isLoading && isError) content = <h1>{error}</h1>;

  if (!isLoading && !isError && blog?.id === 0)
    content = <h1>"No Blogs Found"</h1>;
  if (!isLoading && !isError && blog?.id > 0)
    content = <SingleBlogs blog={blog} />;


  return (
    <div className="w-[100%] grid place-items-center">
      <div className="md:w-[1100px] w-[100%] md:mt-[50px] mt-[30px] px-2">
        <Link to="/" className=" text-gray-600 home-btn " id="lws-goHome">
          <button className="flex items-center gap-2 border px-3 py-1 rounded font-semibold bg-rose-200 text-red-600">
            <IoHomeOutline /> Go Home
          </button>
        </Link>
      </div>
      <div className="md:w-[1100px] w-[100%] mt-[20px] gap-[30px]  flex md:flex-row flex-col md:items-start item-center justify-center ">
        <div className="md:w-[70%] md:gap-0 flex md:flex-col justify-between w-[100%] p-2">
          {/* <SingleBlogs /> */}
          {content}
        </div>
        <div className="md:w-[30%] w-[100%] p-2">
          <RelatedBlogs id={blog.id} tags={blog.tags} />
        </div>
      </div>
    </div>
  );
}
