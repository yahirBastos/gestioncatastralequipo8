import { Link} from "react-router-dom";

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
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">BIENVENIDO A LA PLATAFORMA DE GESTION CATASTRAL</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Usuario" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Contraseña" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label class="custom-control-label" for="customCheck">Recordar
                                                            Datos</label >
                                                    </div>
                                                </div>
                                                <a href="#" className="btn btn-primary btn-user btn-block">
                                                    Iniciar Sesión
                                                </a>
                                                <br />
                                                <div className="text-center">
                                                    <a className="small" href="#">Olvidé mi contraseña</a>
                                                </div>
                                                <div className="text-center">
                                                    <Link to="/Register" className="small">Crear Nueva Cuenta</Link>
                                                </div>
                                                <hr />
                                                <div className="politicas">
                                                    <label><input type="checkbox" id="cbox1" value="first_checkbox" />Para continuar, este sitio recopilará información personal como nombre, indentificación, preferencias de lenguaje e imagen de perfil para fines operativos de registro y legales.Antes de utilizar este aplicativo, tú puedes revisar nuestra <a href="#">Politica de privacidad</a> y <a href="#">Términos y condiciones de servicio</a>.</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
