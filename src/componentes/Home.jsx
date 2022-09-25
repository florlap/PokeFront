import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtPokemons, obtTipos } from "../redux/actions";
import Paginado from "./Paginado";
//import SearchBar from "./SearchBar";
//import { Link } from "react-router-dom";
//import MenuFilters from "./MenuFilters";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const paginas = () => Math.ceil(pokemons.length / 12);    /// 


  useEffect(() => {
    dispatch(obtPokemons());
    dispatch(obtTipos()); 
  }, [dispatch]);


  return (
    <div className={styles.containerHome}>
      <NavBar/>
       {/* <SearchBar/>  */}
      {/* <Link  className={styles.link} to="/create">
        <button className={styles.btnCreacion}>Crea tu Pokemon</button>
      </Link> */}
      {/* <MenuFilters/> */}

  
      
      <div className={styles.containerHome}>
       <Paginado className={styles.paginado} data={pokemons} pageLimit={paginas()} dataLimit={12} /> 
      </div >
    </div>
  );
};

export default Home;
