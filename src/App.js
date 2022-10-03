import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import ShowCase from "./Elements/ShowCase/ShowCase";

function App() {
  const [showSidebar, setshowSidebar] = React.useState(false);
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  return (
    <>
      <Navbar
        showSidebar={showSidebar}
        showHandler={showHandler}
        setshowSidebar={setshowSidebar}
      />
      <ShowCase showHandler={showHandler} />
    </>
  );
}

export default App;
