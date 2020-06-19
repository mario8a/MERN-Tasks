import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types/index';


export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO: 
            return {
                ...state, //hara el match con las tareas s egun si id del prpyecto
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA: 
            return {
                ...state,
                tareas: [ action.payload, ...state.tareas],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
    
        default:
            return state
    }
}