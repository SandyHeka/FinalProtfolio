import Link from "next/link";
import React from "react";

export default function ContactForm() {
  return (
    <form>
      <div className="mb-3">
        <label className="w-full font-sans font-bold text-[1rem] text-gray-200">
          Your email
        </label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow mt-2"
        />
      </div>
      <div className="mb-3 mt-5">
        <label className="w-full text-[1rem] font-sans font-bold  text-gray-200 ">
          Subject
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow mt-2"
        />
      </div>
      <div className="mb-8 mt-5">
        <label className="w-full  text-[1rem] font-sans font-bold  text-gray-200">
          Message
        </label>
        <textarea
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow mt-2 max-h-40 overflow-auto"
        />
      </div>

      <Link
        href="/contact-me"
        className="rounded-[20px] bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px] "
      >
        Send a message
      </Link>
    </form>
  );
}
