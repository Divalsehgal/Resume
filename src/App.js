import React, { useEffect, useRef, useState } from "react";
import Header from "./Header/Header";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import "./App.css";
import Projects from "./Projects";
import Footer from "./Footer/Footer";

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className="App">
    <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
      <div className="sticky-inner">
        {" "}
        <Header />
      </div>
    </div>
    <React.Suspense>
      
      <Switch>
        <Route
        exact
          path="/"
          render={(props) => <Home {...props} />}
        />
        <Route path="/projects" component={Projects} />
      </Switch>
    </React.Suspense>
   <div style={{display:"flex",justifyContent:"center"}}>
    <Footer />
    </div>

    </div>
  );
}

export default App;

// import React, { Fragment, useEffect, useRef, useState } from "react";
// import "./App.css";

// export default () => {
//   const [isSticky, setSticky] = useState(false);
//   const ref = useRef(null);
//   const handleScroll = () => {
//     if (ref.current) {
//       setSticky(ref.current.getBoundingClientRect().top <= 0);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", () => handleScroll);
//     };
//   }, []);

//   return (
//     <Fragment>
//       <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
//         <h1 className="sticky-inner">Sticky</h1>{" "}
//       </div>
//       <div className="data">j khj</div>
//     </Fragment>
//   );
// };
