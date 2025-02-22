import { Projects } from "@/constants";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen min-h-screen flex items-center justify-center bg-center bg-cover "
    >
      <Head>
        <title>Sandesh Heka | Project Page</title>
        <meta name="description" content="Professional Software Engineer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center min-h-screen">
        <Layout className="pt-[3rem]">
          <h1 className="font-bold text-white text-[32px] sm:text-[50px] lg:text-[70px] text-center mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Projects
            </span>
          </h1>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20">
            {Projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                text={project.text}
                image={project.src}
              />
            ))}
          </div>
        </Layout>
      </main>
    </div>
  );
}
