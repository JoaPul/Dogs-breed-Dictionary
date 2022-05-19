import { useState, useEffect, useContext } from "react";
import { CounterContext } from "../../context/counter.context";
import { useParams } from "react-router-dom";
import "./dog.css";

const Dog = () => {
  const { arrDog } = useContext(CounterContext);
  const { breed } = useParams();
  const [Dog, setDog] = useState([]);
  const [Img, setImg] = useState([]);

  useEffect(() => {
    arrDog.filter((dog) => {
      dog.name === breed && setDog(dog);
      dog.name === breed && setImg(dog.image.url);
    });
    document.title = breed;
  }, [breed]);

  return (
    <>
      <div style={{ height: "400px", width: "inherit", display: "flex", alignContent: "center", justifyContent: "center", padding: "20px", margin: "10px" }}>
        <img className="Img-dog" src={Img} style={{ height: "inherit", width: "inherit", objectFit: "contain" }} />
      </div>
      <br />
      <div style={{ display: "flex", alignContent: "center", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "10px" }}>
        <div style={{ width: "600px" }}>
          <h1 style={{ color: "#022840" }}>
            -<span style={{ fontWeight: "1000", textDecoration: "underline" }}>Breed Name:</span> {Dog.name}
          </h1>
          <h1 style={{ color: "#022840" }}>
            -<span style={{ fontWeight: "1000", textDecoration: "underline" }}>Life Span:</span> {Dog.life_span}
          </h1>
          <h1 style={{ color: "#022840" }}>
            -<span style={{ fontWeight: "1000", textDecoration: "underline" }}>Temperament:</span> {Dog.temperament}
          </h1>
          <h1 style={{ color: "#022840" }}>
            -<span style={{ fontWeight: "1000", textDecoration: "underline" }}>Breed for:</span> {Dog.bred_for}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dog;
