import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaTradeFederation } from "react-icons/fa";
const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  companyColor,
}) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between text-white">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}{" "}
          <a
            href={companyLink}
            className={`${companyColor} capitalize`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-white/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};
export default function Experience() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-white text-[70px]  w-full text-center mb-20">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          {" "}
          Experience
        </span>
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaTradeFederation />}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{
            background: "transparent",
          }}
          className="vertical-timeline-element--work text-white bg-transparent bg-bottom"
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software Developerr
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            South West Tafe, Warrnambool
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white"
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "transparent" }}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SquareV, Bendigo
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white"
          date="2020 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "transparent" }}
        >
          <h3 className="vertical-timeline-element-title">
            Product Designer / Digital Marketing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Heka Kitchen Store
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "transparent" }}
        >
          <h3 className="vertical-timeline-element-title">Laravel Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Young Minds</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
