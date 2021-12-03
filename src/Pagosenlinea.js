import Sidebar from "./Componentes/Sidebar";
import Navbar from "./Componentes/Navbar";
import { Link } from "react-router-dom";

function Pagosenlinea() {
    return (
        <><div id="wrapper">
            {/* <!-- Sidebar --> */}
            <Sidebar
                href0={"/Externo"} primephoto={"assets/Logogcm.png"}
                href1={"/Externo"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"/Asociarpredio"} icon2={"fas fa-tasks"} card2={"Asociar Predio"}
                card2_1={"Asociar Predio"} href1card2={"/Asociarpredio"} name1card2={"Asociar Predio"}
                href3={"#"} icon3={"fas fa-handshake"} card3={"Solicitar Convenios de Pagos"}
                card3_1={"Convenios de Pagos"} href1card3={"#"} name1card3={"Convenios de Pagos"}
                titulo2={"Pagos"}
                href4={"/Pagosenlinea"} icon4={"far fa-money-bill-alt"} card4={"Pagos en Linea"}
                href5={"/"} icon5={"fas fa-sign-out-alt"} card5={"Cerrar Sesión"}
            />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <Navbar linksearch={"#"} linknotifi={"#"} contadornotifi={"3+"} linkncontenidonotifi1={"#"} fechanotific={"2/Dic/2021"}
                        contenidonotifi={"Recibo Pagado"} linkncontenidonotifi2={"#"} fechanotific2={"2/Dic/2021"} contenidonotifi2={"Recibo Pagado"} linkncontenidonotifi3={"#"} fechanotific3={"5/Nov/2021"}
                        contenidonotifi3={"Recibo Pagado"} linkmensajes={"#"} contadormensajes={"4+"} contenidomensajes={"Recibo Pagado"} linkncontenidomensaje={"#"} contadormensaje={"3+"} contenidomensaje={"Pago de Recibo"} remitentemensaje={"Norma Diaz"}
                        linkncontenidomensaje2={"#"} contenidomensaje2={"Recibo Pagado"} remitentemensaje2={"Martin Perez"} contenidomensaje3={"Recibo Pagado"} remitentemensaje3={"Maria Perez"} linkncontenidomensaje3={"#"}
                        nombredueño={"Amanda Rua"}
                    />
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Pagos en Linea</h1>
                        </div>

                        <div class="row justify-content-center">

                            <div class="col-xl-10 col-lg-12 col-md-9">

                                <div class="card o-hidden border-0 shadow-lg my-5">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <i class="fas fa-angle-double-down fa-2x text-gray-300"></i>
                                            </div>
                                            <div class="col mr-2">
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">Seleccione una opcion de Búsqueda</div>
                                            </div>
                                            <hr />
                                            <div class="form-group">
                                                <div class="radio">
                                                    <label><input type="radio" name="opcionbusqueda" value="opcionbusqueda" /> Por Código Catastral</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="opcionbusqueda" value="opcionbusqueda" /> Por Cédula de Ciudadania/Extranjera</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="opcionbusqueda" value="opcionbusqueda" />  Por Dirección</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card o-hidden border-0 shadow-lg my-5">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <i class="fas fa-angle-double-down fa-2x text-gray-300"></i>
                                            </div>
                                            <div class="col mr-2">
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">Diligencie la Información a buscar</div>
                                            </div>
                                            <hr />
                                            <div class="form-group">
                                                <div class="">
                                                    <label class="" for="customCheck">Número de Búsqueda</label>
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Digite Número" name={""} />
                                                    <br />
                                                </div>
                                                <div class="col-sm-6 ">
                                                    <Link to="{this.props.linkregistropredio}" className="btn btn-primary btn-user btn-block">Buscar</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card o-hidden border-0 shadow-lg my-5">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <i class="fas fa-angle-double-down fa-2x text-gray-300"></i>
                                            </div>
                                            <div class="col mr-2">
                                                <div class="h5 mb-0 font-weight-bold text-gray-800"> Seleccione Inmuble</div>
                                            </div>
                                            <hr />
                                            <div class="form-group">
                                                <div class="">
                                                    {/* <!-- Aqui la tabla --> */}
                                                    <br />
                                                </div>
                                                <div class="col-sm-6 ">
                                                    <Link to={"#"}o className="btn btn-primary btn-user btn-block">Pagar en Linea</Link>
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
        </div></>
    );
}
export default Pagosenlinea