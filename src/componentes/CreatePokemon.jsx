import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { obtPokemons,crearPokemon, obtTipos } from '../redux/actions'
import styles from "../styles/CreatePokemon.module.css"

const CreatePokemon = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const todosLosTipos = useSelector((state)=> state.tipos)
  const todosLosPokes = useSelector((state)=> state.allPokemons)


  useEffect(()=> {
    dispatch(obtPokemons())
    dispatch(obtTipos())
  }, [dispatch])


  const [nuevoPoke, setNuevoPoke]= useState({ 
    nombre: "",
    vida:"",
    ataque:"",
    defensa: "",
    velocidad:"",
    altura :"",
    peso:"",
    imagen:"",
    tipos:[]
  })
  

  // ERRORES
  const [error, setError] = useState({});

	function validate(nuevoPoke) {
		let errors = {};
		if (todosLosPokes.find((pokemon) =>
					pokemon.nombre.toUpperCase() === nuevoPoke.nombre.toUpperCase() // 
			)
		)
		errors.nombre ="Ya existe un pokemon con ese nombre, proba con otro";
		if (!nuevoPoke.nombre)
			errors.name = "Tu poke necesita un nombre";
		if (/[0-9]/.test(nuevoPoke.nombre))
			errors.nombre = "El nombre de tu poke no puede contener numeros";
		if (/[\s]/.test(nuevoPoke.nombre))
			errors.nombre = "El nombre de tu poke no puede contener espacios";
		if (/[^\w\s]/.test(nuevoPoke.nombre))
			errors.nombre = "El nombre de tu poke no puede contener caracteres especiales";

		if (nuevoPoke.vida < 1)
			errors.vida = "Necesitas ingresar un valor mayor o igual a 1";
		if (nuevoPoke.vida === "")
			errors.vida = "No te olvides de ingresar la vida de tu poke";
		if (nuevoPoke.vida > 200) errors.vida = "La vida no puede ser superior a 200";

		if (nuevoPoke.ataque < 1)
			errors.ataque= "Necesitas colocar un valor mayor o igual a 1";
		if (nuevoPoke.ataque === "")
			errors.ataque = "Coloca que tan poderoso es tu poke";
		if (nuevoPoke.ataque > 200)
			errors.ataque = "El ataque no puede ser superior a 200";

		if (nuevoPoke.defensa < 1)
			errors.defensa = "Necesitas colocar un valor mayor o igual a 1";
		if (nuevoPoke.defensa === "")
			errors.defensa = "Coloca que tan resistente es tu poke";
		if (nuevoPoke.defensa > 200)
			errors.defensa = "La defensa no puede ser superior a 200";

		if (nuevoPoke.velocidad < 1)
			errors.velocidad = "Necesitas colocar un valor mayor o igual a 1";
		if (nuevoPoke.velocidad === "")
			errors.velocidad = "Que tan rapido es tu poke?";
		if (nuevoPoke.velocidad > 200)
			errors.velocidad = "La velocidad no puede ser superior a 200";

		if (nuevoPoke.altura < 1)
			errors.altura = "Necesitas colocar un valor mayor o igual a 1";
		if (nuevoPoke.altura === "")
			errors.altura = "No te olvides colocar la altura tu poke";
		if (nuevoPoke.altura > 200)
			errors.altura = "La altura no puede ser superior a 200";

		if (nuevoPoke.peso < 1)
			errors.peso = "Necesitas colocar un valor mayor o igual a 1";
		if (nuevoPoke.peso === "")
			errors.peso = "Que tan pesado es tu poke?";
		if (nuevoPoke.peso > 200)
			errors.peso = "El peso no puede ser superior a 200";

		if (!/\.(jpg|png|gif)$/i.test(nuevoPoke.imagen))
			errors.imagen = "La url que intentas colocar no es valida";
		if (!nuevoPoke.imagen)
			errors.imagen = "Se requiere una URL para la imagen de tu poke";
		return errors;
	}

	//Handlers 
  function handlerChange(e){
    setNuevoPoke({
      ...nuevoPoke, 
      [e.target.name]: e.target.value
    });
    setError(
      validate({
        ...nuevoPoke,
        [e.target.name]: e.target.value,
      })
    )
  }


const handlerTipos = (e) => {
  if(nuevoPoke.tipos?.length > 1) return
  const res =nuevoPoke.tipos.filter(
    (ele) => ele !== e.target.innerHTML 
  );

  if(res.includes(e.target.value)){
    alert("Ya se eligió este tipo")
    setNuevoPoke({
        ...nuevoPoke,
        tipos: [...nuevoPoke.tipos]  
  })
  setError(
    error({
        ...nuevoPoke,
        tipos: [...nuevoPoke.tipos]
      })
  )   
}  else {
    setNuevoPoke({
        ...nuevoPoke,
        tipos: [...nuevoPoke.tipos, e.target.value ]  
    })
    setError(
        validate({
            ...nuevoPoke,
            tipos: [...nuevoPoke.tipos, e.target.value]
        })
    ) 
}
}



function handlerSubmit(e){
   e.preventDefault()
  dispatch(crearPokemon({...nuevoPoke, nombre: nuevoPoke?.nombre.toLowerCase()}))
  alert("Pokemon creado exitosamente ")
  setNuevoPoke({
    nombre: "",
    vida:"",
    ataque:"",
    defensa: "",
    velocidad:"",
    altura :"",
    peso:"",
    imagen:"",
    tipos:[]
  })
  setTimeout(()=> {
    navigate("/home")
  }, 1000)
}


 function handlerDelete(e){
  let filtro = nuevoPoke.tipos.filter(ele => ele !== e.target.innerHTML)
  setNuevoPoke({
  ...nuevoPoke,
  tipos: filtro
  })
  setError(
  validate({
  ...nuevoPoke,
  tipos:[...filtro]
  })
  )
}


const [disabledButton, setDisabledButton] = useState(true)

useEffect(()=> {
  if(
     nuevoPoke.nombre === "" ||
     nuevoPoke.tipos.length <1 ||
     error.hasOwnProperty("nombre")||
     error.hasOwnProperty("vida")||
     error.hasOwnProperty("ataque")||
     error.hasOwnProperty("defensa")||
     error.hasOwnProperty("velocidad")||
     error.hasOwnProperty("altura")||
     error.hasOwnProperty("peso")||
     error.hasOwnProperty("imagen")
  ){
    setDisabledButton(true);
  }else {
    setDisabledButton(false);
  } 
 },[error , nuevoPoke, setDisabledButton]); 

  return (
    <div className={styles.navBar}>
      <Link className={styles.link} to="/home"><button>Volver</button></Link> 
      <h1 className={styles.titulo}>Crea tu Pokemon</h1>
      <div className={styles.formulario}>
      <form className={styles.formulario} onSubmit={(e)=> handlerSubmit(e)}>
        <div >
          <div className={styles.form}>
              <label className={styles.formlabel}>Nombre:</label>
              <input type="text" name="nombre" placeholder= "nombre" onChange={(e)=> handlerChange(e)}/> 
              {error.nombre && <p>{error.nombre}</p>}
          </div> 
           <div className={styles.form}>
              <label>Vida:</label>
              <input type="number" name="vida"  placeholder="Ej:20" onChange={(e)=> handlerChange(e)}/>
              {error.vida && <p>{error.vida}</p>}
          </div>
           <div className={styles.form}>
              <label>Ataque:</label>
              <input type="number" name="ataque"  placeholder="Ej:20" onChange={(e)=> handlerChange(e)}/>
              {error.ataque && <p>{error.ataque}</p>}
          </div>
            <div className={styles.form}>
              <label>Defensa:</label>
              <input type="number" name="defensa"  placeholder="Ej:20" onChange={(e)=> handlerChange(e)}/>
              {error.defensa && <p>{error.defensa}</p>}
            </div>
          <div className={styles.form}>
              <label>Velocidad:</label>
              <input type="number" name="velocidad" placeholder="Ej:20" onChange={(e)=> handlerChange(e)} />
             {error.velocidad && <p>{error.velocidad} </p>}
          </div>
          <div className={styles.form}>
              <label>Altura:</label>
              <input type="number" name="altura" placeholder="Ej:20" onChange={(e)=> handlerChange(e)}/>
              {error.altura && <p>{error.altura} </p>}
          </div>
          <div className={styles.form}>
              <label>Peso:</label>
              <input type="number"  name="peso" placeholder="Ej:20" onChange={(e)=> handlerChange(e)}/>
               {error.peso && <p>{error.peso} </p>}
            </div>
          <div className={styles.form}>
              <label>Imagen:</label>
              <input type="text" name="imagen" placeholder="Ingresa una imagen" onChange={(e)=> handlerChange(e)}/>
              {error.imagen && <p>{error.imagen}</p>}
          </div>
          <select className={styles.formselect} defaultValue={"default"} onChange={(e) => handlerTipos(e)}>
                <option value="default">Elegir Tipo</option>
                {todosLosTipos &&
                  todosLosTipos.map((elemento, index) => {
                    return (
                      <option key={index} value={elemento.nombre}>
                        {elemento.nombre}
                      </option>
                    );
                  })}
              </select>
              <div>
            <ul>
              {nuevoPoke.tipos.length > 0 ? (
                nuevoPoke.tipos.map((ele) => (
                  <li key={ele} onClick={(e) => handlerDelete(e)}>
                    {ele}
                  </li>
                ))
              ) : (
                <p >{error.tipos}</p>
              
              )}
            </ul>
          </div>
              <button className={styles.btnCrear}  disabled={disabledButton} onClick={(e) => handlerSubmit}>Crear</button>
        </div>
      </form>
      </div>
    </div>
  )
 }


export default CreatePokemon;