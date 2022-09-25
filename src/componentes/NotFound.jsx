import React from 'react'
import styles from '../styles/NotFound.module.css'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div className={styles.not}>
      <p>Error 404- Ha ocurrido un problema</p>
      <Link to="/home">Volver al Home</Link>
    </div>
  )
}
