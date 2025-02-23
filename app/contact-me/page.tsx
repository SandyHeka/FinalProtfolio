import React from "react";
import ContactForm from "./Components/ContactForm";
import Head from "next/head";
import Layout from "../components/Layout";
import { Socials } from "@/constants";
import Image from "next/image";

export default function Page() {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen max-h-screen overflow-hidden md:overflow-auto bg-cover bg-center flex items-center justify-center"
    >
      <Head>
        <title>Sandesh Heka | Contact Me</title>
        <meta name="description" content="Professional Software Engineer" />
      </Head>

      <Layout className="pt-24 w-full min-h-screen md:h-auto overflow-auto">
        {/* Page Title */}
        <h1 className="font-bold text-white text-[70px] max-lg:text-[60px] max-md:text-4xl w-full text-center mb-5">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Me
          </span>
        </h1>

        {/* Responsive Container */}
        <div className="-ml-10 md:ml-36 h-auto w-[140%] md:w-[90%] relative bg-cover bg-center rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-8 md:gap-x-10">
          {/* Right Side - Biography / Socials */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h2 className="mb-4 text-lg font-bold uppercase text-white/100">
              Let's Connect
            </h2>
            <p className="my-2 font-medium text-white">
              Looking for new opportunities? My inbox is always open. Whether
              you have a question or just want to say hi, I'll try my best to
              get back to you.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start flex-row gap-5 mb-2">
              {Socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                />
              ))}
            </div>
          </div>
          {/* Left Side - Contact Form */}
          <div className="w-full md:w-2/4">
            <ContactForm />
          </div>
        </div>
      </Layout>
    </div>
  );
}
