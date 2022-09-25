import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";

const Card = ({ id, imagen, nombre, tipos }) => {
  return (
    <div className={styles.cardIndividual}>
      <Link to={`/detail/${id}`}>
        <img className={styles.img} src={imagen} alt={nombre} />
        <h2>{nombre}</h2>
        {tipos?.map((tipo, index) => (
          <p key={index}>{tipo.nombre}</p>
        ))}
      </Link>
    </div>
  );
};

export default Card;
