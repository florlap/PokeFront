import React from 'react'
import Card from './Card'
import styles from '../styles/Card.module.css'

const Cards = ({pokemons}) => {
  return (
    <div className={styles.cardsContainer}>
        {
           pokemons&&pokemons.map(p=> (
                <div key={p.id}>
                  <Card id={p.id} nombre={p.nombre} imagen={p.imagen} tipos={p.tipos} />
                </div>
           ))
        }
    </div>
  )
}

export default Cards