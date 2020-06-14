import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {

    //state para iniiar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //extrear el email y el password
    const {nombre ,email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    //cuando el usuairo quiere iniciar sesion

    const onSubmit = (e) => {
        e.prevendDefault();

        //validacion de campos vacias

        //Password minimimo 6 caracteres

        //revisar que los dos password sean iguales

        // Pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>

                <form action="" onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange} />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange} />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange} />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar"
                            value={confirmar}
                            placeholder="Repite tu password"
                            onChange={onChange} />
                    </div>


                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar"/>
                    </div>
                </form>

                <Link to="/" className="enlace-cuenta">
                    Iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta  ;