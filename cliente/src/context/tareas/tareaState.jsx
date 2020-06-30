import React, { useReducer } from 'react'
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index';

import clienteAxios from '../../config/axios';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    //Crear el dispatch y el state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // crear las funciones
    
    //obtener las tareas de un proyecto
    const obtenerTareas = async proyecto => {
        console.log(proyecto);
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}});
            console.log(resultado);
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = async tarea => {
        console.log(tarea);
        try {

            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado);

            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Validar y muestra el error en caso de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tareas por su id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })

        } catch (error) {
            console.log(error);
        }
    }

        //EDITAR o modifica tarea
        const actualizarTarea = async tarea => {
 
            try {

                const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
                console.log(resultado);
                
                dispatch({
                    type: ACTUALIZAR_TAREA,
                    payload: resultado.data.tarea
                })
            } catch (error) {
                console.log(error);
            }
        } 
    //extrae la tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
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
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada, 
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
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