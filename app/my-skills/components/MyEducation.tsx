import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaTradeFederation } from "react-icons/fa";
export default function MyEducation() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-white text-[70px]  w-full text-center mb-20 mt-0">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          {" "}
          Education
        </span>
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="2022 - 2023"
          iconStyle={{ background: "rgb(239, 87, 31)", color: "#fff" }}
          icon={<FaTradeFederation />}
          contentArrowStyle={{ borderRight: "7px solid  rgb(239, 87, 31)" }}
          contentStyle={{
            background: "transparent",
          }}
          className="vertical-timeline-element--work text-white bg-transparent bg-bottom"
        >
          <h3 className="vertical-timeline-element-title">
            Master of Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            La Trobe University, Bendigo
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white"
          date="2022 - 2023"
          iconStyle={{ background: "rgb(239, 87, 31)", color: "#fff" }}
          contentStyle={{ background: "transparent" }}
        >
          <h3 className="vertical-timeline-element-title">
            The British College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kathmandu, Nepal
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
