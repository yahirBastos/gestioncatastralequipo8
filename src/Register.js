import { Link } from "react-router-dom";

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
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">CREAR UNA NUEVA CUENTA</h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group row">
                                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                                        <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                                            placeholder="Nombres" />
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                            placeholder="Apellidos" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                                        placeholder="Correo Electronico" />
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-6 ">
                                                        <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                            placeholder="Telefono" />
                                                        <br />
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <select class="form-control form-control-userselect" id="gender">
                                                            <option value="choice">Sexo</option>
                                                            <option value="Masculino">Masculino</option>
                                                            <option value="Femenino">Femenino</option>
                                                            <option value="Otro">Otro</option>
                                                        </select>
                                                        <br />
                                                    </div>
                                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Contraseña" />
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleRepeatPassword" placeholder="Repetir Contraseña" />
                                                    </div>
                                                </div>

                                                <a href="#" class="btn btn-primary btn-user btn-block">
                                                    Registrar Cuenta
                                                </a>
                                            </form>
                                            <br />
                                            <div class="text-center">
                                                <a class="small" href="#">Olvidé mi contraseña</a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small" href="#">Ya tengo una cuenta</a>
                                            </div>
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


export default Register;