import React, {  useCallback, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import "./Section.css";

const ProjectSection = () => {
  const [projectList, setprojectList] = useState();
  const load = useCallback(async () => {
    const response = await fetch(
      `https://resume-50c34.firebaseio.com/projects.json`
    );
    const resData = await response.json();
    setprojectList(resData);
    console.log(resData);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="ProjectSection">
      <div className="innerSection">
        <div className="sectionTop">
          <h4>React</h4>

          <div className="sectionTopInner">
            {!projectList ? (
              <div
                style={{
                  marginTop: "80px",
                  display: "inline",
                  fontFamily: "Poppins",
                  fontWeight: 450,
                }}
              >
                Loading...{" "}
              </div>
            ) : (
              projectList.projectDescList.map((project) => {
                return (
                  <ProjectItem
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    link={project.link}
                    description={project.description}
                    native={project.native}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className="sectionDown">
          <h4>React Native</h4>

          <div className="sectionDownOuter">
            {!projectList ? (
              <div
                style={{
                  marginTop: "80px",
                  display: "inline",
                  fontFamily: "Poppins",
                  fontWeight: 450,
                }}
              >
                Loading...{" "}
              </div>
            ) : (
              projectList.nativeList.map((project) => {
                return (
                  <ProjectItem
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    link={project.link}
                    description={project.description}
                    native={project.native}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
