

import Formolvido from "./Componentes/Formolvido";

function Olvido() {
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
                                    <Formolvido email = {"email"} linkolvido = {"#"} linkregister = {"/register"} linklogin = {"/login"} politica ={"#"} terminos = {"#"} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    

    );
}

export default Olvido;
