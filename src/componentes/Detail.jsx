import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { limpiarDetalle, obtPokemonPorId } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css"


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtPokemonPorId(id));
    return()=> {
    dispatch(limpiarDetalle())  
    }
  }, [dispatch, id]);
  
  const detalle = useSelector((state) => state.detalle);
 


  return (
    <div className={styles.containerDetalle}>
      <div className={styles.detalleCard}>
        <h2>Id: {detalle.id}</h2>
        <img className={styles.imgDetalle} src={detalle.imagen} alt="Imagen no encontrada" />
        <h2>Nombre: {detalle.nombre}</h2>
        <h2>Tipos: </h2>
         {
           detalle.tipos?.map((t, index)=> (
           <p key= {index}>{t.nombre}</p>
           ))
        } 
        <h4>Vida: {detalle.vida}</h4>
        <h4>Ataque:{detalle.ataque}</h4>
        <h4>Defensa:  {detalle.defensa}</h4>
        <h4>Velocidad: {detalle.velocidad}</h4>
        <h4>Altura:  {detalle.altura}</h4>
        <h4>Peso: {detalle.peso}</h4>
        <h4>Pais: {detalle.pais}</h4> 
      </div>
      <Link to="/home"><button className={styles.btnDetalle}>Volver al inicio</button></Link>
    </div>
  );
};

export default Detail;
