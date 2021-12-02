
import Formlogin from "./Componentes/Formlogin/";

function Login() {
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
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <Formlogin titulo = {"BIENVENIDO A LA PLATAFORMA DE GESTION CATASTRAL"} usuario = {"usuario"} contrasena = {"contrasena"} linkinicio = {"#"} linkolvido = {"#"} linkregistro = {"/Register"} politica = {"#"} terminos = {"#"}/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
}

export default Login;
