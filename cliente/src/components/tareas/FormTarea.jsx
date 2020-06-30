import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //obtener la funcion del context de Tarea
    const tareasContext = useContext(tareaContext);
    const {
            tareaseleccionada,
            errortarea,
            agregarTarea,
            validarTarea,
            obtenerTareas,
            actualizarTarea,
            limpiarTarea
        } = tareasContext;

    //effect que detecta si hay alguna tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null) {
                guardarTarea(tareaseleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    },[tareaseleccionada])

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    //extraer el nombre del proyecto
    const {nombre} = tarea; 

    //si no hay proyecto seleccionado
    if(!proyecto) return null;

    /**Debido a que proyecto es un arreglo se debe acceder segun su pocicion, es
     * por esa razon que se aplica array destructuring 
     */
    const [proyectoActual] = proyecto;

    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        //revisar si es edicion o nueva tarea
        if(tareaseleccionada === null) {
            //tarea nueva
            //agregar la nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            //editar tarea
            actualizarTarea(tarea);
            //elimia tarea seleccionada del state
            limpiarTarea();
        }
        // pasar la validaci
        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return ( 
        <div className="formulario">
            <form 
                action=""
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input type="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block" 
                        value={tareaseleccionada ? "Editar tarea" : "Agregar tarea"}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
        </div>
     );
}
 
export default FormTarea;