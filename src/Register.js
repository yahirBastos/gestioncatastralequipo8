import { Link } from "react-router-dom";
import Formregistro from "./Componentes/Formregistro";
function Register() {
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
                                    <Formregistro titulo ={"CREAR UNA NUEVA CUENTA"} nombres ={"nombres"} apellidos ={"apellidos"}  correo ={"correo"} telefono ={"telefono"} sexo ={"sexo"} password ={"password"} passrepet ={"passrepet"} linkregistro ={"/Register"} linkolvido ={"#"} linklogin ={"/Login"}/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
}


export default Register;