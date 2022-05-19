import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./App.css";
import Dog from "./routes/dogs/dog";
import Home from "./routes/home/home";
import Title from "./routes/Title/title";
import About from "./routes/about/about";
import { CounterContext } from "./context/counter.context";
import axios from "axios";

function App() {
  const [arrDog, setArrDog] = useState([]);

  useEffect(() => {
    // axios("https://pokeapi.co/api/v2/pokemon?limit=1126")
    axios({
      method: "get",
      url: "https://api.thedogapi.com/v1/breeds",
      headers: { "x-api-key": "4b1077fc-4fcf-4047-9ff1-b0d2c5c22ef1" },
    })
      .then((res) => {
        setArrDog(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CounterContext.Provider value={{ arrDog }}>
      <Routes>
        <Route path="/" element={<Title />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Dog/:breed" element={<Dog />} />
        </Route>
      </Routes>
    </CounterContext.Provider>
  );
}

export default App;
