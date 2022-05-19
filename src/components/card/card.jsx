import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ dog }) => {
  const { name, image } = dog;
  return (
    <Link className="card-container" to={`/Dog/${name}`}>
      <div style={{ height: "280px", width: "inherit", display: "flex", alignContent: "center", justifyContent: "center" }}>
        <img alt={`breed ${name}`} src={`${image.url}`} style={{ height: "inherit", width: "inherit", objectFit: "contain", borderRadius: "10px" }} />
      </div>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>Breed: {name}</h2>
    </Link>
  );
};

export default Card;
