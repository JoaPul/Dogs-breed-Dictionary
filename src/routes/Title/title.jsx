import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Title = () => {
  return (
    <Fragment>
      <div style={{ textAlign: "center", backgroundColor: "#022840", color: "#adc5d9", fontSize: "25px", padding: "10px" }}>
        <h1>🐶 Doggy App 🐶</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Title;
