
import Formregistro from "./Componentes/Formregistro";
import React from "react";

class Register extends React.Component {
    datosFormulario = (data) => {
        fetch("http://localhost:3030/api/crear_usuario", {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
    render(){
        return (
            <div className="bg-gradient-primary">
    
                <div className="container">
    
                    {/* <!-- Outer Row --> */}
                    <div className="row justify-content-center">
    
                        <div className="col-xl-10 col-lg-12 col-md-9">
    
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* <!-- Nested Row within Card Body --> */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                                        <Formregistro procDatos={this.datosFormulario} titulo ={"CREAR UNA NUEVA CUENTA"} nivel={"nivel"} nombres ={"nombre"} apellidos ={"apellido"}  correo ={"email"} telefono ={"telefono"} sexo ={"gender"} contrasena ={"contrasena"} repcontrasena ={"repcontrasena"} linkregistro ={"/Register"} linkolvido ={"/olvido"} linklogin ={"/Login"} tipodocumento ={"tipodocumento"} numerodocumento = {"documento"}/>
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
    
        );

    }
    
}


export default Register;