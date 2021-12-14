import Sidebar from "./Componentes/Sidebar";
import Navbar from "./Componentes/Navbar";
import { Link } from "react-router-dom";
import Data from './jsons/pagosenlinea';

function Pagosenlinea() {
    return (
        <><div id="wrapper">
            {/* <!-- Sidebar --> */}
            <Sidebar
                href0={"/Externo"} primephoto={"assets/Logogcm.png"}
                href1={"/Externo"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"#"} icon2={"fas fa-tasks"} card2={"Predios"}
                card2_1={"Predios"} href1card2={"/PrediosAsociadosUser"} name1card2={"Predios Asociados"} href2card2={"/Asociarpredios"} name2card2={"Asociar Predio"} href3card2={"#"}
                href3={"#"} icon3={"fas fa-handshake"} card3={"Solicitar Convenios"}
                card3_1={"Convenios de Pagos"} href1card3={"/Soliconvenio"} name1card3={"Convenios de Pagos"} href2card3={"#"} href3card3={"#"}
                titulo2={"Pagos"}
                href4={"/Pagosenlinea"} icon4={"far fa-money-bill-alt"} card4={"Pagos en Linea"}
                href5={"/"} icon5={"fas fa-sign-out-alt"} card5={"Cerrar Sesión"}
                href6={"#"}
                href7={"#"}
                href8={"#"}
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
                                            <div class="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Elegir</th>
                                                                <th>N°</th>
                                                                <th>Código Catastral</th>
                                                                <th>Área Total (Metros)</th>
                                                                <th>Área Construida (Metros)</th>
                                                                <th>Direccion</th>
                                                                <th>Barrio</th>
                                                                <th>Estrato</th>
                                                            </tr>
                                                        </thead>
                                                        <tfoot>
                                                            <tr>
                                                                <th>Elegir</th>
                                                                <th>N°</th>
                                                                <th>Código Catastral</th>
                                                                <th>Área Total (Metros)</th>
                                                                <th>Área Construida (Metros)</th>
                                                                <th>Dirección</th>
                                                                <th>Barrio</th>
                                                                <th>Estrato</th>
                                                            </tr>
                                                        </tfoot>
                                                        <tbody>

                                                            {Data.plinea.map((plinea1, index) => {
                                                                return (
                                                                    <tr key={plinea1.N}>
                                                                        <td><input type="checkbox" name="seleccion" id="seleccion" /></td>
                                                                        <td>{plinea1.N}</td>
                                                                        <td>{plinea1.codigocatastral}</td>
                                                                        <td>{plinea1.areatotal}</td>
                                                                        <td>{plinea1.areaconstruida}</td>
                                                                        <td>{plinea1.direccion}</td>
                                                                        <td>{plinea1.barrio}</td>
                                                                        <td>{plinea1.estrato}</td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <div class="col-sm-6 ">
                                                    <Link to={"#"} o className="btn btn-primary btn-user btn-block">Pagar en Linea</Link>
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