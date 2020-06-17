import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return null;

    /**Debido a que proyecto es un arreglo se debe acceder segun su pocicion, es
     * por esa razon que se aplica array destructuring 
     */
    const [proyectoActual] = proyecto;

    return ( 
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input type="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar tarea"/>
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;