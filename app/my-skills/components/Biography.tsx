import React from "react";
import Image from "next/image";
import profilePic from "../../../public/kushum.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

export default function Biography() {
  return (
    <>
      <h1 className="font-bold text-white text-[70px] max-lg:text-[60px]  w-full text-center mb-20 ">
        Passion{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          {" "}
          Fuels{" "}
        </span>
        Purpose
      </h1>
      <div className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-16  text-white">
        <div className="col-span-3 flex flex-col items-start justify-start ">
          <h2 className="mb-4 text-lg font-bold uppercase text-white/75">
            Biography
          </h2>
          <p className="my font-medium">
            Hi, CodeBucks, a web developer and UI/UX designer with a passion for
            creating beautiful, functional, and user-centered digital
            experiences. With 4 years of experience in the field. I am always
            looking for new and innovative ways to bring my clients visions to
            life
          </p>
          <p className="my font-medium">
            Hi,CodeBucks, a web developer and UI/UX designer with a passion for
            creating beautiful, functional, and user-centered digital
            experiences. With 4 years of experience in the field. I am always
            looking for new and innovative ways to bring my clients visions to
            life
          </p>
        </div>
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gray-900" />
          <Image
            src={profilePic}
            alt="hekaSand"
            className="w-full h-65 sm:h-auto    rounded-2xl"
          />
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={50} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-white/75">
              satisfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              {" "}
              <AnimatedNumbers value={10} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-white/75">
              project delivered
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              {" "}
              <AnimatedNumbers value={5} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-white/75">
              satisfied clients
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
