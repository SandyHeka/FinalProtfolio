import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Hi I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Sandesh Heka
            </span>
          </h1>
          <h4 className="text-[30px] text-white font-semibold">
            I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Full-Stack Developer
            </span>
          </h4>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            voluptatum labore odit laudantium libero voluptates consequatur.
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
              className="rounded-[20px]  group relativ px-5 py-3 text-lg border border-white text-white max-w-[200px]"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5  flex-col md:hidden gap-5">
        <Link
          href="/contact-me"
          className="rounded-[20px] bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Me
        </Link>
        <Link
          href="/my-resume"
          className="rounded-[20px]e bg-transparent  px-5 py-3 text-lg border border-white text-white max-w-[200px]"
        >
          Resume
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10]">
        {/* <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-56 top-40"
        /> */}
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}
