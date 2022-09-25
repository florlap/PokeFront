import axios from "axios";

export function obtPokemons() {
  return async function (dispatch) {
    let pokeLista = await axios.get(`https://web-pokeapp.onrender.com/pokemon`);
    return dispatch({
      type: "OBT_POKEMONS",
      payload: pokeLista.data,
    });
  };
}

export function obtPokemonPorId(id) {
  return async function (dispatch) {
    let pokeId = await axios.get(`https://web-pokeapp.onrender.com/pokemon/${id}`);
    return dispatch({
      type: "OBT_ID",
      payload: pokeId.data,
    });
  };
}

export function obtPokemonPorNombre(payload) {
  return async function (dispatch) {
    try {
      let pokeNombre = await axios.get(`https://web-pokeapp.onrender.com/pokemon?name=${payload}`); 
      return dispatch({
        type: "OBT_NOMBRE",
        payload: pokeNombre.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function obtTipos() {
  return async function (dispatch) {
    try {
      let pokeTipos = await axios.get(`https://web-pokeapp.onrender.com/type`);
      return dispatch({
        type: "OBT_TIPOS",
        payload: pokeTipos.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function crearPokemon(payload) {
  return async function (dispatch) {
    try {
      let nuevoPoke = await axios.post(`https://web-pokeapp.onrender.com/pokemon`,payload);
      return dispatch({
        type: "CREAR_POKE",
        payload: nuevoPoke.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filtrarPorTipos(payload){
  return {
       type: "FITRAR_TIPOS",
       payload
    }
  }


export function ordenAlfabetico(payload) {
  return {
    type: "FILTRAR_ALFAB",
    payload,
  }
}

export function filtrarporFuerza(payload) {
  return {
    type: "FILTRAR_FUERZA",
    payload,
  }
}

export function filtrarCreados(payload) {
  return {
    type: "FILTRAR_CREADOS",
    payload,
  }
}
export function limpiarDetalle() {
  return {
    type: "LIMPIAR_DETALLE",
    payload: {},
  }
}
