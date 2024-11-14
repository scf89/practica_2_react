import { useState } from "react";
import PropTypes from "prop-types";
import "./Character.css";

const Character = ({ character }) => {
  const [rotated, setRotated] = useState(false);

  return (
    <div>
      <img
        className={rotated ? "rotated" : "straight"}
        src={character.image}
        alt={character.name}
        onClick={() => setRotated(!rotated)}
      />
    </div>
  );
};

Character.propTypes = {
    character: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };

export default Character;
