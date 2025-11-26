import React from "react";
import { FaRegCalendarAlt, FaRegClock, FaRegCommentDots } from "react-icons/fa";
import meta from "../assets/img/meta.png";
import headphones from "../assets/img/headphones.png";
import bitcoin from "../assets/img/bitcoin.png";

export default function OurBlogs() {
  const blogs = [
    {
      id: 1,
      image: meta,
      title: "Meta Platforms plans to release fre...",
      description:
        "The parent company of Facebook, Meta Platforms, is introducing software to help deve...",
      date: "August, 8, 2023",
      readTime: "3 min read",
    },
    {
      id: 2,
      image: headphones,
      title: "8 Things You Probably Didn't Know About Headphones",
      description:
        "Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It's easy to spot these people, the headphone are almo...",
      date: "March, 28, 2023",
      comments: 0,
    },
    {
      id: 3,
      image: bitcoin,
      title: "Analyzing the August 17th Bitcoin Price Drop",
      description:
        "On August 17th at 9:30PM UTC, Bitcoin's price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled",
      date: "August, 17, 2023",
      comments: 0,
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Blogs</h2>

          <button className="flex items-center gap-1 text-gray-700 hover:text-black transition text-sm sm:text-base">
            View all
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition h-fit">
            <div className="h-64 sm:h-55 overflow-hidden">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            <div className="p-6">
              <div className="flex items-end gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <FaRegCalendarAlt className="w-4 h-4" /> {blogs[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegClock className="w-4 h-4" /> {blogs[0].readTime}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                {blogs[0].title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-2">
                {blogs[0].description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {blogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition flex flex-col sm:flex-row"
              >
                <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaRegCalendarAlt className="w-4 h-4" /> {blog.date}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaRegCommentDots className="w-4 h-4" /> {blog.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
