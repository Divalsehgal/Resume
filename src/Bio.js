import React from "react";
import "./Bio.css";
import STACK_LIST from "./List/StackList";

function Bio() {
  return (
    <div className="Bio">
      <p>Dival Sehgal , 23</p>
      <p>
        Works at &nbsp;
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://www.nineleaps.com"
        >
          Nineleaps ,</a>&nbsp;
        BLR
      </p>
      <h5>MERN Stack Developer</h5>
      <div className="stacks">
      {STACK_LIST.map((stack) => {
        return (
          <img
          key={stack.id}
            alt="profiles"
            src={stack.image}
            style={{ height: 30, width: 30, margin: 15 }}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Bio;
