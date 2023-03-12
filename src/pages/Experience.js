import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            High school 2 March 1934, Redeyef, Tunisia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Mathematics Bachelor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Faculty of Sciences of Gafsa, Gafsa, Tunisia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Fundamental license's Degree
          </h4>

          <p> Computer sciences</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Higher Institute of Computer Science (ISI), Ariana, Tunisia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master's degree
          </h4>

          <p> Intelligent systems in imaging and vision artificial</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Gomycode, Downtown Hackerspace , Tunisia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Certificate in Full-Stack Development With JavaScript
          </h4>

          <p> MERN & MEVN stack</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Science Instructor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Higher Institute of Applied Studies in Humanities of Gafsa, Tunisia
          </h4>
          <p>Web Development Projects.</p>
          <p>
            Supervise the work (projects, dissertation, etc.) of the students.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack JavaScript web developer - Freelance
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Tunisia</h4>
          <p>
            Developement of web application using (ReactJS, VueJS, NodeJS, ExpressJS, MongoDB, Firebase).
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
