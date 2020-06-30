import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case FORMULARIO_PROYECTO:
            return {
                ...state, 
                formulario: true
            }
        case OBTENER_PROYECTOS: 
            console.log(action.payload);
            return {
                ...state, 
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            //se crea una copia del state. action.payload estan los proyectos
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTUAL:
            return{
                ...state,
                /**Compara el id con el que estoy seleccionando, por ejemplo primero crea el 
                 * arreglo de los id del 1 al 5 y si selecciono el 2, este lo va reccorrer hasta
                 * hacer ese math con el id 2
                 */
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload)
            }
        case ELIMINAR_PROYECTO :
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
                proyecto: null
            }
        case PROYECTO_ERROR :
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state
    }
}