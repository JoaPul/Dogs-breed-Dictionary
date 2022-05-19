import Menu from "../../components/Menu/Menu";
import "./about.css";

const About = () => {
  return (
    <div>
      <Menu />
      <div className="credits">
        <h2>Dogs Breed Dictionary</h2>
        <h3>Thanks for visit this webside</h3>
        <p>
          The information that appear in this app was made thanks to <a href="https://thedogapi.com/">The Dog API</a>
        </p>
      </div>
    </div>
  );
};

export default About;
