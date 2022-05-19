import Card from "../card/card";
import "./card-list.styles.css";

const CardList = ({ dogs }) => {
  return (
    <div className="card-list">
      {dogs.map((dog) => {
        return <Card key={dog.id} dog={dog} />;
      })}
    </div>
  );
};

export default CardList;
