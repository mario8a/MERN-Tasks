import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

     //Extraer si un proyecto esta activo
     const proyectosContext = useContext(proyectoContext);
     const {proyecto} = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual} = tareasContext;

    //Extraer proyecto con distroturing
    const [proyectoActual] = proyecto;

    //funcion que se ejecuta cuando el usuario presiona eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual.id)
    }

    //Funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }

        actualizarTarea(tarea);
    }

    // Agrega una tarea actual cuando el usuario desea editarla
    const selecionarTarea = tarea => {
        guardarTareaActual(tarea)
    }

    return (
        <li className="tarea sombra">
            <p> {tarea.nombre} </p>

            <div className="estado">
                {tarea.estado
                ?

                    (
                        <button 
                            type="button" 
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                :
                    (
                        <button 
                            type="button" 
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button 
                    type="button" 
                    className="btn btn-primario"
                    onClick={() => selecionarTarea(tarea)}
                >
                    Editar
                </button>
                <button 
                    type="button" 
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea._id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}
 
export default Tarea;