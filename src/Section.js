import React, { useCallback, useEffect, useState } from "react";
import "./Section.css";

const SingleSection = (props) => {
  const { title, List } = props;
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
  return (
    <div className="Section">
      <h3> {title}</h3>
      <div className="Section__Data">
        {List?.map((edu) => {
          return (
            <ul key={edu.id}>
              <li>
                <div key={edu.id} className="Section__Item">
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "550",
                      color: "black",
                    }}
                  >
                    {edu.line1}
                  </p>
                  {!edu.certiLink ? (
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "550",
                        color: "black",
                      }}
                    >
                      {edu.line2}
                    </p>
                  ) : (
                    <p
              
                       onClick={ () => {openInNewTab(`${edu.link}`)}}
                        style={{
                          textDecoration: "none",
                          fontSize: "12px",
                          fontWeight: "550",
                          color: "black",
                          cursor:"pointer"
                        }}
                      >
                        {"Open link"}
                    </p>
                  )}
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
function Section(props) {
  const [sectionList, setSectionList] = useState();
  const load = useCallback(async () => {
    const response = await fetch(
      `https://resume-50c34.firebaseio.com/section.json`
    );
    const resData = await response.json();
    setSectionList(resData);
  }, []);

  useEffect(() => {
    load();
  }, [load]);
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "rgba(222, 242, 241, 0.8)",
        scrollBehavior:"smooth",
        overflow:"scroll"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: 250,
        }}
      >
        {!sectionList ? (
           <div
           style={{
             marginTop: "80px",
             justifyContent:"center",
             fontFamily: "Poppins",
             fontWeight: 450,
             display: "flex",
             flex: "auto",
             height:"100%"
           }}
         >
           Loading...{" "}
         </div>
        ) : (
          sectionList.map((section) => {
            if (!section){
              return "";
            }
            return (
              <SingleSection
                key={section.id}
                title={section.title}
                id={section.id}
                image={section.image}
                List={section.List}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Section;
