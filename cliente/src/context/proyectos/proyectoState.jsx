import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTO 
} from '../../types';




const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual '},
        { id: 2, nombre: 'Intranet'},
        { id: 3, nombre: 'Diseño de sitio web'},
        { id: 4, nombre: 'MEAN'}
    ]

    //Este state cuando pase a true se mostrara el form para agregar un proyecto nuevo
    const initialState = {
        proyectos: [],
        formulario: false
    }

    //Dispatch para crear las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD
    //FUNCION que va mostrar el formulario
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4()

        //instertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //Provider desde aqui nacen los datos
    /**props.children- los diferentes hijos de este provider se pasen los datos en todos los
     * componentes
     */

    /**tip: Mantener el state en una palabra, todas minusculas
     * funciones: dos palabras y con una mayuscula
     * Colocar los state arriba y funciones abajo
     */
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;