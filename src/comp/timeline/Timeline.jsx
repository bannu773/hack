import React, { useState } from "react";
// import './App.css';
import backgroundImage from "../../assets/stars1.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { useParallax } from "react-scroll-parallax";

const TimeLine = ({timelineRef}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const bg = useParallax({
    speed: 10,
  });
  return (
    <div className="bg " ref={bg.ref} style={{ backgroundRepeat: "repeat" }}>
      <style>
        {`
          /* Apply scale transformation on hover */
          .VerticalTimeline
          {
            overflow: visible;
            z-index: 1;
          }
          .vertical-timeline-element {
            transition: transform 0.3s ease-in-out;
            font-family: 'DM Sans', sans-serif;
            transform-origin: center bottom;
            transform: scale(1); /* Initial size, can be adjusted as needed */
            text-align:justify;
          }
          .vertical-timeline-element:hover {
            transform: scale(1.1); /* Larger size on hover, adjust the scale factor as needed */
          }
          @media screen and (min-width: 1024px) {
            .VerticalTimeline{
              max-width: 1070px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
            }
            .vertical-timeline-element:hover {
              transform: scale(0.9); /* Larger size on hover, adjust the scale factor as needed */
            }
          }
          @media screen and (min-width: 992px){
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 1em 0;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 4em 2em 4em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
            }
          }
          @media screen and (max-width: 991px) {
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 1em 2em 2.5em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
            }
          } 
          
          .grad1 {
            content: "";
            width: 700px;
            height: 700px;
            border-radius: 50%;
            background-color: rgb(171, 43, 226);
            filter: blur(300px);
            z-index: 10;
            position: absolute;
            translate: -10px -900px;
            right:800px;
          }     
          
            p span
           {
            color:pink;
           }
        `}
      </style>
      <div
        className="outerpart  "
        style={{ backgroundImage: `url(${backgroundImage})` }}
        ref={timelineRef}
      >
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <div className="grad1"></div>
              <h3 className="vertical-timeline-element-title">PHASE-1</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Problem Statement Submission
              </h4>
              <p>
                Submit your innovative problem statements, whether you're from
                engineering or non-engineering backgrounds, and present your
                concept with a 1-minute video pitch. Submit early to avoid
                last-minute hassles. The best teams will advance to the next
                phase with mentorship and theme alignment. AVISHKAAR 2023 is
                your platform for innovation and creativity!
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-2</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Evaluation{" "}
              </h4>
              <p>
                The evaluation process at AVISHKAAR 2023 is a carefully
                structured and comprehensive approach designed to provide
                participants with a fair and insightful assessment of their
                innovative solutions. It consists of two distinct phases, each
                playing a crucial role in d etermining the overall quality and
                potential impact of the projects submitted by participants.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-2.1</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {" "}
                Academic Expert Assessment
              </h4>
              <p>
                In this initial phase, our expert team focuses on providing an
                unbiased and in-depth analysis of the work in progress. We
                prioritize evaluating the quality, credibility, and significant
                impact of each project. This phase carries a substantial
                weightage of 50%, emphasizing its integral role in the overall
                evaluation process. It ensures that academic excellence and
                rigorous standards are upheld.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-2.2</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Industry Expert Evaluation
              </h4>
              <p>
                After the academic assessment, the 'Industry Expert Evaluation'
                phase takes center stage. Our expert team meticulously examines
                various factors contributing to project excellence, such as
                creativity, innovation, technical implementation,
                problem-solving, and real-world applicability. This phase
                carries significant weight, constituting 50% of the overall
                assessment, underscoring its importance. It ensures that
                projects are not only academically sound but also relevant and
                applicable in real-world contexts.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-3</h3>
              <h4 className="vertical-timeline-element-subtitle">Mentorship</h4>
              <p>
                At AVISHKAAR 2023, mentorship is a cornerstone of our hackathon
                experience. The first 100 shortlisted participants will be
                paired with dedicated mentors from both professional fields and
                educational institutions. Weekly mentoring sessions will provide
                guidance and project reviews, tailored to the mentors'
                availability. Ongoing evaluations during these sessions will
                significantly impact the final assessment, ensuring participants
                receive the support and expertise needed to excel in their
                innovative endeavors.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <div className="grad2"></div>
              <h3 className="vertical-timeline-element-title">PHASE-4</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Progress Review
              </h4>
              <p>
                It serves to assess participants' project advancements, provide
                constructive feedback, and ensure alignment with our event's
                objectives. Teams are required to follow a structured
                presentation format, showcase prototypes when possible, and
                submit progress within set timeframes. Mentorship sessions offer
                a platform for clarifications, while the 'build and break'
                session allows for in-depth evaluation and improvement of
                projects. Our diligent mentors document each team's journey, and
                progress review plays a vital role in project selection for
                advancement, contributing to the overall success of the
                hackathon.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-5</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Grand Finale
              </h4>
              <p>
                {" "}
                A Celebration of Innovation and Brilliance! Finalist teams will
                have the e steemed opportunity to showcase their inventive
                concepts and solutions to the jury and industry professionals.
                After careful assessment, the most exemplary teams with
                avant-garde ideas will be rewarded for their exceptional
                performance, celebrating innovation and brilliance. We consider
                all aspects of participants' efforts, making the Grand Finale a
                remarkable culmination of AVISHKAAR 2023
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
