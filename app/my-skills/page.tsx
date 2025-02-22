"use client";

import Head from "next/head";
import Layout from "../components/Layout";
import Skills from "./components/Skills";
import Biography from "./components/Biography";
import Experience from "./components/Experience";
import MyEducation from "./components/MyEducation";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen  items-center justify-center bg-cover bg-center overflow-y-auto "
    >
      <Head>
        <title>Sandesh Heka | About Page</title>
        <meta name="description" content="Professional Software Engineer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-24">
          <Biography />
          <Skills />
          <Experience />
          <MyEducation />
        </Layout>
      </main>
    </div>
  );
};

export default Page;
