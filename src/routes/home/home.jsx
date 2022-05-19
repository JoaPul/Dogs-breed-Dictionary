import { useState, useEffect, useContext } from "react";
import { CounterContext } from "../../context/counter.context";
import CardList from "../../components/card-list/card-list";
import SearchBox from "../../components/search-box/search-box";
import Menu from "../../components/Menu/Menu";
import "./home.css";

const Home = () => {
  const { arrDog } = useContext(CounterContext);
  const [searchField, setSearchField] = useState("");
  const [filteredDogs, setFilteredDogs] = useState(arrDog);

  useEffect(() => {
    const newFilteredDogs = arrDog.filter((dog) => {
      return dog.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    setFilteredDogs(newFilteredDogs);
  }, [arrDog, searchField]);

  const onSearchChangeHandler = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="homeDiv">
      <Menu />
      <SearchBox onSearchChange={onSearchChangeHandler} />
      <CardList dogs={filteredDogs} />
    </div>
  );
};

export default Home;
