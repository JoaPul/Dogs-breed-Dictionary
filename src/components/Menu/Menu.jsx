import { useState, useEffect, useContext } from "react";
import { CounterContext } from "../../context/counter.context";
import { Link } from "react-router-dom";
import men from "../../assets/menu-cla.png";
import "./menu.css";

const Menu = () => {
  const [valopt, setValopt] = useState(false);
  const [opt, setOpt] = useState([]);

  useEffect(() => {
    valopt
      ? setOpt(
          <div className="options">
            <Link className="link" to={`/`}>
              Home
            </Link>
            {/* <br />
            <br /> */}
            <Link className="link" to={"/about"}>
              About
            </Link>
          </div>
        )
      : setOpt(<></>);
  }, [valopt]);

  return (
    <div className="contMenu">
      <div className="open">
        <button className="Menu" onClick={() => setValopt(!valopt)}>
          <img alt="Menu button" src={men} style={{ height: "30px", width: "30px" }} />
        </button>
        {opt}
      </div>
    </div>
  );
};

export default Menu;
