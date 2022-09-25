
const initialState = {
 allPokemons:[], 
 pokemonesPorCreacion: [],
 pokemons:[],    
 detalle:{}, 
 origen:[],
 tipos: []
}



function rootReducer (state= initialState, action){
 switch(action.type){
    case "OBT_POKEMONS":
        return {
            ...state,
            pokemons:[...action.payload], 
            allPokemons:[...action.payload],
            pokemonesPorCreacion: [...action.payload],
        }
    case "OBT_ID":    
        return {
            ...state,
           detalle: action.payload
        }

    case "OBT_NOMBRE":   
        return {
            ...state,
            pokemons: action.payload  
        }    

    case "OBT_TIPOS":    
        return {
            ...state,
            tipos: action.payload

        }  
        
    case "FITRAR_TIPOS":   
        const todosLosFiltros = [...state.pokemonesPorCreacion]
         if(action.payload === 'todos') {
            return {
                ...state,
                pokemons: todosLosFiltros
              }
            }else{
                    const tiposDeFiltros = todosLosFiltros.filter((t)=> 
                    t.tipos[0]?.nombre === action.payload || t.tipos[1]?.nombre === action.payload)
                    return{
                        ...state,
                        pokemons: tiposDeFiltros
                       }  
                   } 
           

               
    case "FILTRAR_ALFAB":
        const ordenAlfa = [...state.pokemons]
        if (action.payload === "ascendente"){
            ordenAlfa.sort((a,b)=> {
                if(a.nombre < b.nombre){
                    return -1;
                 }else{
                     return 1;
                 }
            })
        }
        if(action.payload === "descendente"){
            ordenAlfa.sort((a,b)=> {
                if(a.nombre < b.nombre){
                    return 1;
                 }else{
                    return -1;
                }
            })
        }
        return {
            ...state,
            pokemons: ordenAlfa
        }
       
           

    case "FILTRAR_FUERZA":
        const filtroFuerza = [...state.pokemons ]
        if(action.payload === 'default'){
        filtroFuerza.sort((a, b)=> {
        if(a.id < b.id){
            return -1;
        } else {
            return 1;
        }
        })
        }
        if(action.payload === 'stronger'){
        filtroFuerza.sort((a, b)=>{
         if(a.ataque < b.ataque){
           return 1;
        }else if(a.ataque > b.ataque){
            return -1 
        }else {
            return 0;
         }
       })
        } 
        if(action.payload === 'weaker'){
        filtroFuerza.sort((a, b)=> {
        if(a.ataque < b.ataque){
            return -1;
         }else if(a.ataque > b.ataque){
            return 1;
         }else {
            return 0;
         }
        })
        }
        return{
            ...state,
            pokemons: filtroFuerza
        }
                                                                        
                                                                        
                                                                        
    case "CREAR_POKE":
        return {
            ...state
            }


    case "FILTRAR_CREADOS":   
        const filtroDeCreacion = [...state.allPokemons]
        if(action.payload === 'existentes'){
           const creadoEnApi = filtroDeCreacion.filter((detalle)=>  typeof(detalle.id) === "number" )
            return{
                ...state,
                pokemons: creadoEnApi,
                origen:creadoEnApi,
                pokemonesPorCreacion: creadoEnApi,
             }   
             
        }else if(action.payload === 'creados'){
            const creadoEnBase = filtroDeCreacion.filter((detalle)=> typeof(detalle.id) === "string")
            return{
                ...state,
                pokemons:creadoEnBase,
                origen:creadoEnBase,
                pokemonesPorCreacion: creadoEnBase,
            }
        }
        return{
            ...state,
            pokemons: filtroDeCreacion,
            origen: filtroDeCreacion,
            pokemonesPorCreacion: filtroDeCreacion
        }
       

    case 'LIMPIAR_DETALLE':
        return{
           ...state,
           detalle:action.payload
         }
         
         
    default:
        return state;    
 }
}
export default rootReducer;