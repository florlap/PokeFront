import React, { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtTipos,filtrarPorTipos, filtrarCreados,ordenAlfabetico,filtrarporFuerza, obtPokemons } from '../redux/actions';
import styles from "../styles/MenuFilters.module.css"



const MenuFilters = () => {
const dispatch= useDispatch()
const todosLosTipos= useSelector((state)=> state.tipos)


useEffect(()=> {
    dispatch(obtTipos())
	dispatch(obtPokemons())
}, [dispatch])


function handlerTipos(e){        
 e.preventDefault()
 dispatch(filtrarPorTipos(e.target.value))
}

function handlerFuerza(e){
e.preventDefault()
dispatch(filtrarporFuerza(e.target.value))
}

function handlerOrigenCreacion(e){    
e.preventDefault()
dispatch(filtrarCreados(e.target.value))
}

function handlerAlfab(e){
e.preventDefault()
dispatch(ordenAlfabetico(e.target.value))
}

  return (
    <div>
        <div>
		  <label className={styles.titulos}>Tipo de Creacion:</label>  
		<select className={styles.selectHome} onChange={(e)=> handlerOrigenCreacion(e)}>
			<option className={styles.opciones}  value='todos'>Todos</option>
			<option value='existentes'>Existentes</option>
			<option value='creados'>Creados</option>
		</select>
			<label className={styles.titulos}>Tipo de Pokemon:</label>
		<select className={styles.selectHome} onChange={(e)=> handlerTipos(e)}>
			<option value='todos'>Todos</option>
			{
             todosLosTipos?.map((type)=> (
				<option key={type.nombre} value={type.nombre}>{type.nombre}</option>
			 ))
			}
		</select>
			<label className={styles.titulos}>Orden Alfabetico:</label>
		<select className={styles.selectHome} onChange={(e)=> handlerAlfab(e)}>
			<option value='ascendente'>A-Z</option>
			<option value='descendente'>Z-A</option>
		</select>
            <label className={styles.titulos}>Tipo de ataque:</label>
         <select className={styles.selectHome} onChange={(e)=> handlerFuerza(e)}>
            <option value='default'>Default</option>
			<option value='stronger'>Stronger</option>
			<option value='weaker'>Weaker</option>
        </select> 
	  </div>
    </div>
  )
}


export default MenuFilters