import React, { useReducer } from 'react'
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA 
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1,nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {id: 2,nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 3,nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3},
            {id: 4,nombre: 'Elegir Hosting', estado: false, proyectoId: 4},
            {id: 5,nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {id: 6,nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 7,nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3},
            {id: 8,nombre: 'Elegir plataforma', estado: true, proyectoId: 4},
            {id: 9,nombre: 'Elegir Colores', estado: false, proyectoId: 1},
            {id: 10,nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3},
            {id: 11,nombre: 'Elegir plataforma', estado: true, proyectoId: 3},
            {id: 12,nombre: 'Elegir Colores', estado: false, proyectoId: 4},
            {id: 13,nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3},
        ],
        tareasproyecto: null,
        errortarea: false
    }

    //Crear el dispatch y el state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // crear las funciones
    
    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Validar y muestra el error en caso de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tareas por su id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;