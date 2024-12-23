import { blogs } from "./blogs";
import "./BlogStyles.css";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export const BlogLinks = () => {
  const devBlogs = blogs.filter((blog) => blog.type == "DEV BLOG");
  const miscBlogs = blogs.filter((blog) => blog.type == "MISC");
  const personalBlogs = blogs.filter((blog) => blog.type == "PERSONAL");
  const researchBlogs = blogs.filter((blog) => blog.type == "RESEARCH");
  const businessBlogs = blogs.filter((blog) => blog.type == "BUSINESS");
  const content = [
    devBlogs,
    researchBlogs,
    businessBlogs,
    personalBlogs,
    miscBlogs,
  ];
  return (
    <div className="h-full min-h-screen w-screen overflow-x-hidden">
      <div className="h-full min-h-screen w-screen grid grid-rows-[auto_1fr_auto] h-full text-foreground antialiased bg-[radial-gradient(#ffffff33_1px,_transparent_1px)] bg-[length:1rem_1rem]">
        <div className="py-[30vh] w-screen lg:px-48 px-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full">
            {content.map((item) => (
              <div className="break-words h-full w-full" key={item[0].id}>
                <Link
                  to={"/blog/" + item[0].type.toLocaleLowerCase()}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
                  }}
                >
                  <h3 className="geistMono text-lg text-neutral-400 my-2 tracking-tighter">
                    / {item[0].type}
                  </h3>
                </Link>
                {item.map((blog) => (
                  <Link
                    to={
                      "/blog/" + blog.type.toLocaleLowerCase() + "/" + blog.id
                    }
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
                    }}
                  >
                    <h3 className="geistMono text-sm my-2 tracking-tighter text-neutral-400">
                      <span className="geistMono text-sm tracking-tighter text-green-300"></span>
                      {blog.date} • {blog.topic} •{" "}
                      <span className="geistMono text-sm tracking-tighter text-green-300"></span>
                      {(blog.text.length / 1000).toFixed(0)} min read{" "}
                      {/*/ {views} views{" "}*/}
                    </h3>
                    <h1 className="geistMono text-xl tracking-tighter">
                      <span className="geistMono text-xl tracking-tighter text-green-300">
                        {"#" + (blog.id < 10 ? "0" + blog.id : blog.id) + " "}
                      </span>
                      {blog.title}
                    </h1>
                    <h3 className="geistMono text-base my-2 tracking-tighter text-neutral-400"></h3>
                    <hr />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          className="fixed bottom-10 right-10 bg-neutral-800 rounded-2xl text-green-300 flex justify-center items-center shadow-xl w-14 h-14"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
          }}
        >
          <ArrowUp />
        </div>
      </div>
    </div>
  );
};
