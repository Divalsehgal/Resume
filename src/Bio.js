import React ,{useState,useEffect,useCallback} from "react";
import "./Bio.css";
import STACK_LIST from "./List/StackList";

function Bio() {

  const [bioData, setBioData] = useState();
  const load = useCallback(async () => {
    const response = await fetch(
      `https://resume-50c34.firebaseio.com/bio.json`
    );
    const resData = await response.json();
    setBioData(resData);
  }, []);

  useEffect(() => {
    load();
  }, [load]);
  return (
    <div className="Bio">
      <p>{bioData?.name} {bioData?.age}</p>
      <p>
        Works at &nbsp;
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://www.nineleaps.com"
        >
          {bioData?.companyName} ,</a>&nbsp;
        {bioData?.location}
      </p>
      <h5>{bioData?.title}</h5>
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
