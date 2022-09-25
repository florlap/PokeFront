
import React from 'react'
import {Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import styles from '../styles/NavBar.module.css'
import MenuFilters from './MenuFilters'
//import Paginado from './Paginado'
//import { useSelector } from "react-redux" 

export default function NavBar() {

  return (
    <div className={styles.container}>
      <div>
        <div>
        <SearchBar/>
        </div>
        <MenuFilters/>
        {/* <Paginado className={styles.paginado} data={pokemons} pageLimit={paginas()} dataLimit={12} /> */}
      <Link className={styles.link} to="/create">
        <button className={styles.btnCreacion}>Crea tu Pokemon</button>
      </Link>
      </div>
    </div>
  )
}



// el paginado queda en la home 
