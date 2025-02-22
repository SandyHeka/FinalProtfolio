"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto aspect-[17/10] sm:aspect-[6/6] md:aspect-video rounded-md cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flip-card-inner w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group flip-card-front bg-cover bg-center text-white rounded-lg p-4 absolute backface-hidden"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group  flip-card-back bg-cover bg-center text-white rounded-lg p-4 absolute backface-hidden"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-5 py-3 z-[30]">
            <h1 className="text-white text-lg sm:text-xl font-semibold">
              {title}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
