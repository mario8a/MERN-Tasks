import React, { useReducer } from 'react'
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { v4 as uuidv4 } from 'uuid';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
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
        errortarea: false,
        tareaseleccionada: null
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
        tarea.id = uuidv4()
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

    //Cambia el estado de cada tarea
    const cambiarEstadotarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    //extrae la tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    //EDITAR o modifica tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    } 
    //Elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }


    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada, 
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadotarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;