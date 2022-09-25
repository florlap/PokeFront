import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { obtPokemonPorNombre } from "../redux/actions";
import styles from "../styles/SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState(""); // lo seteo en un string vacio porque asi esta al principio

  function handlerChange(e) {
    e.preventDefault();
    setNombre(e.target.value);
  }
  

  function handlerSubmit(e) {
    e.preventDefault();
    if(nombre === "") {
      alert("Debes ingresar el nombre exacto del Pokemon que buscas");
    }
    dispatch(obtPokemonPorNombre(nombre));
    setNombre(""); 
  }




  return (
      <div className={styles.containerSearch}>      
        <form className={styles.form} >
          <div className={styles.inputBusqueda}>
          <input className={styles.inputBusqueda} 
            type="text" value={nombre} onChange={(e) => handlerChange(e)} placeholder="Buscar Pokemon"
          />
          <button className={styles.inputBusqueda}  type="submit" onClick={(e) => handlerSubmit(e)}>
            Buscar
          </button>
          </div>
        </form>
      </div>
  );
};

export default SearchBar;
