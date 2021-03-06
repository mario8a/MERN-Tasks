import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {
    //obtener el state del formulario | consumiendo el context
    /**Con esta esta linea todas las funciones y el state definido se va poder acceder */
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;


    const [proyecto, guardarProyecto] = useState({
        nombre: '',
    });

    //extrear ombre del proyecto
    const {nombre} = proyecto;
    //lee los contenidos del input
    const onChangeProyeto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onsubmitProyecto = (e) => {
        e.preventDefault();

        //validar proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        //Agregar al state en caso de esatr correcto
        agregarProyecto(proyecto);

        //reiniciar el form
        guardarProyecto({
            nombre: ''
        });
    }

    //mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 

        <Fragment>
             <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
            Nuevo Poryecto
            </button>

            {
                formulario ? 
                (
                    <form 
                        action="" 
                        className="formulario-nuevo-proyecto"
                        onSubmit={onsubmitProyecto}
                        >
                            <input 
                                type="text" 
                                className="input-text" 
                                placeholder="Nombre proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyeto}
                            />

                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />
                        </form>
                ) : null
            }

            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}

        </Fragment>
       


     );
}
 
export default NuevoProyecto;