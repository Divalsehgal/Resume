import React from "react";
import "./Projects.css";
function ProjectItem(props) {
  const { id, title, description, link, native } = props;
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <ul style={{ listStyle: "none", padding: 0 }} key={id}>
        <li>
          <div className="ProjectSection__Item">
            <p
              style={{
                fontSize: "15px",
                fontWeight: "650",
                color: "black",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "550",
                color: "black",
              }}
            >
              {description}
            </p>
            <a
              href="true"
              onClick={() => {
                openInNewTab(`${link}`);
              }}
              style={{ textDecoration: "none", color: "black" ,cursor:"pointer"}}
            >
              {native ? "Download apk" : "Open link"}
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ProjectItem;
