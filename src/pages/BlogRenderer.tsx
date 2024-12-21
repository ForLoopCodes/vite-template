import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { blogs } from "./blogs";
import "./BlogStyles.css";
import { Link, useParams } from "react-router-dom";
import { ArrowUp } from "lucide-react";

interface Blog {
  id: number;
  type: string;
  title: string;
  date: string;
  topic: string;
  text: string; // Assuming you have a 'text' field for the blog content
  views: number; // Add a views property to the Blog interface
}

export const BlogRenderer = () => {
  const { category, id } = useParams<{ category: string; id: string }>();

  const categorizedblogs = blogs.filter(
    (blog) => blog.type == category?.toLocaleUpperCase()
  );
  const blogIndex = categorizedblogs?.findIndex(
    (bl: Blog) => bl.id === Number(id)
  );

  // If the blog is not found, return early
  if (!categorizedblogs) {
    return <div>Blog not found</div>;
  }

  // If the blog is not found, return early
  if (blogIndex === -1 && categorizedblogs) {
    return (
      <div className="h-full min-h-screen w-screen overflow-x-hidden">
        <div className="h-full min-h-screen w-screen grid grid-rows-[auto_1fr_auto] h-full text-foreground antialiased bg-[radial-gradient(#ffffff33_1px,_transparent_1px)] bg-[length:1rem_1rem]">
          <div className="py-[30vh] w-screen lg:px-48 px-10">
            <div className="grid grid-cols-1 gap-10 w-full">
              <div className="break-words h-full w-full">
                {categorizedblogs.map((blog) => (
                  <Link
                    to={
                      "/blog/" + blog.type.toLocaleLowerCase() + "/" + blog.id
                    }
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
  }
  // If the blog is not found, return early
  if (blogIndex === -1) {
    return <div>Blog not found</div>;
  }

  const blog = categorizedblogs[blogIndex]; // Get the blog object

  return (
    <div className="h-full min-h-screen w-screen overflow-x-hidden">
      <div className="h-full min-h-screen w-screen grid grid-rows-[auto_1fr_auto] h-full text-foreground antialiased bg-[radial-gradient(#ffffff33_1px,_transparent_1px)] bg-[length:1rem_1rem]">
        <div className="break-words h-full p-[30vh] lg:px-48 px-10 lg:w-5/6 w-screen">
          <h3 className="geistMono text-2xl my-2 tracking-tighter">
            <span className="geistMono text-2xl tracking-tighter text-green-300"></span>
            {blog.date} • {blog.topic}
          </h3>
          <h1 className="geistMono text-6xl tracking-tighter">
            <span className="geistMono text-6xl tracking-tighter text-green-300">
              {"#" + (blog.id < 10 ? "0" + blog.id : blog.id) + " "}
            </span>
            {blog.title}
          </h1>
          <h3 className="geistMono text-xl my-2 tracking-tighter text-neutral-400">
            <span className="geistMono text-xl tracking-tighter text-green-300"></span>
            {(blog.text.length / 1000).toFixed(0)} min read{" "}
            {/*/ {views} views{" "}*/}
            {" / "}
            <span className="geistMono text-xl tracking-tighter text-green-300">
              <a
                className="underline cursor-pointer"
                onClick={() => {
                  navigator
                    .share({
                      title: document.title,
                      text: "Check out this blog post!",
                      url: window.location.href,
                    })
                    .then(() => console.log("Successful share! 🎉"))
                    .catch((err) => console.error(err));
                }}
              >
                Share
              </a>
            </span>
            {" / "}
            <span
              className="geistMono text-xl tracking-tighter text-green-300"
              onClick={() => {
                navigator.clipboard.writeText(blog.text);
              }}
            >
              <a className="underline cursor-pointer">Copy Md</a>
            </span>
          </h3>
          <div className="bg-neutral-900 rounded-xl my-4 mb-[15vh] w-full h-[2px]" />
          <div className="geistMono tracking blogElement">
            <Markdown>{blog.text + "\n ---"}</Markdown>
          </div>
          <h3 className="geistMono text-right text-3xl my-2 tracking-tighter">
            <span className="geistMono text-base tracking-tighter text-green-300">
              THAT'S IT
            </span>
          </h3>
          <h3 className="geistMono text-sm text-right text-neutral-400 my-2 tracking-tighter">
            FORLOOPCODES / BLOG
          </h3>
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
