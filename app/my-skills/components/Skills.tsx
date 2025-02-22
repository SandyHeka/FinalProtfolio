import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SkillData } from "@/constants";
import "swiper/css";
import Image from "next/image";
export default function Skills() {
  return (
    <>
      <h1 className="font-bold text-white text-[70px] max-lg:text-[60px]  w-full text-center mb-20 mt-7 ">
        Skills{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          {" "}
          &{" "}
        </span>
        <span>Technologies</span>
      </h1>

      <div className="flex flex-col gap-20 max-w-[100%] text-center justify-center items-center mt-20    ">
        <Swiper
          className="max-w-[20rem] sm:max-w-[100%]"
          slidesPerView={5}
          speed={5000}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[20rem] sm:max-w-[100%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
