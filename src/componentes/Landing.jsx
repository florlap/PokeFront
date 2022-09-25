import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/Landing.module.css'

export default function Landing (){
  return (
    <div className={styles.Landing}>
      <h1 className={styles.titulo}>PokeApp</h1>
    <Link className={styles.containerBtn} to= "/home"><button className={styles.button}>Ingresar</button></Link>
    </div>
  )
}

