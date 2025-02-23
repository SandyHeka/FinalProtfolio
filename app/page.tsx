import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen items-center justify-center bg-cover bg-center overflow-y-auto"
    >
      <Head>
        <title>Sandesh Heka | About Page</title>
        <meta name="description" content="Professional Software Engineer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-16 text-white z-[10]">
          {/* Right section (original left) */}

          <div className="mt-64 md:mt-56 flex flex-col items-start px-5 md:px-20 ">
            <div className="absolute top-24 md:top-48  bottom-0 left-32 md:left-48  z-[10]">
              <div className="pb-16 md:pb-20 flex flex-col gap-5 z-[10] p-4">
                <div className="w-56 h-56 sm:w-60 sm:h-60 border-4 -rotate-45 border-purple-600 animate-light md:w-96 md:h-96"></div>
                <div className="absolute w-56 h-56 sm:w-60 sm:h-60  border-4 border-blue-500 -rotate-45 animate-light-travel -translate-y-0 translate-x-5 md:w-96 md:h-96"></div>

                <div className="absolute translate-y-1 translate-x-3 md:translate-x-8 overflow-hidden w-56 md:w-96 md:h-96 sm:w-60 sm:h-60 ">
                  <Image
                    src="/file.png"
                    width={350}
                    height={350}
                    alt="img"
                    className="object-cover rounded-full z-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 md:mt-56 flex flex-col items-start justify-center">
            <div className="pb-16 md:pb-20 pl-16 md:pl-32 flex flex-col gap-5 z-[10] max-w-[750px] leading-7 ">
              <h1 className="text-[35px] md:text-[50px] text-white font-semibold text-center sm:text-left ">
                Hi I am
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Sandesh Heka
                </span>
              </h1>
              <h4 className="text-[20px] md:text-[30px] text-white font-semibold text-center sm:text-left">
                I am
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                  {" "}
                  Full-Stack Developer
                </span>
              </h4>
              <p className="text-gray-200 text-sm md:text-base md:block text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore voluptatum labore odit laudantium libero voluptates
                consequatur.
              </p>

              <div className="flex-col md:flex-row hidden md:flex gap-5">
                <Link
                  href="/contact-me"
                  className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
                >
                  Contact Me
                </Link>
                <Link
                  href="/my-resume"
                  className="rounded-[20px] group relativ px-5 py-3 text-lg border border-white text-white max-w-[200px]"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
          {/* Left section (original right) */}
        </div>
      </main>

      {/* Mobile Version of Buttons */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/contact-me"
          className="rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Me
        </Link>
        <Link
          href="/my-resume"
          className="rounded-[20px] bg-transparent px-5 py-3 text-lg border border-white text-white max-w-[200px]"
        >
          Resume
        </Link>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      {/* Stars */}
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </div>
  );
}
