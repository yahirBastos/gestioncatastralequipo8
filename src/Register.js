
import Formregistro from "./Componentes/Formregistro";
import React from "react";

class Register extends React.Component {
    datosFormulario = (data) => {
        console.log('desde el Login: ', data);
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
                                        <Formregistro procDatos={this.datosFormulario} titulo ={"CREAR UNA NUEVA CUENTA"} nombres ={"nombres"} apellidos ={"apellidos"}  correo ={"correo"} telefono ={"telefono"} sexo ={"sexo"} contrasena ={"contrasena"} repcontrasena ={"repcontrasena"} linkregistro ={"/Register"} linkolvido ={"/olvido"} linklogin ={"/Login"} tipodocumento ={"tipodocumento"} numerodocumento = {"numerodocumento"}/>
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