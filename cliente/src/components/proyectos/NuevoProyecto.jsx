import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {


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

        //validar


        //Agregar al state en caso de esatr correcto

        //reiniciar el form
    }

    return ( 

        <Fragment>
             <button
                type="button"
                className="btn btn-block btn-primario"
                onSubmit={onsubmitProyecto}
            >
            Nuevo Poryecto
            </button>

            <form action="" className="formulario-nuevo-proyecto">
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
        </Fragment>
       


     );
}
 
export default NuevoProyecto;