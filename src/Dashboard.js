import Sidebar from "./Componentes/Sidebar/";
import Navbar from "./Componentes/Navbar";
import { Link } from "react-router-dom";
import Frases from "./Componentes/Frases";

function Dashboard() {
    return (
        <><div id="wrapper">

            {/* <!-- Sidebar --> */}
                <Sidebar 
                href0={"/Dashboard"} primephoto={"assets/Logogcm.png"}
                href1={"/Dashboard"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"#"} icon2={"fas fa-tasks"} card2={"Gestionar Pedidos"}
                card2_1={"Gestionar Pedidos"} href1card2={"/Crearpredio"} name1card2={"Crear Predios"} href2card2={"#"} name2card2={"Editar Predios"} href3card2= {"#"} name3card2={"Eliminar Predios"}
                href3={"#"} icon3={"fas fa-house-user"} card3={"Gestionar Usuarios"}
                card3_1={"Gestionar Usuarios"} href1card3={"#"} name1card3={"Crear Usuarios"} href2card3={"#"} name2card3={"Editar Usuarios"} href3card3= {"#"} name3card3={"Eliminar Usuarios"}
                titulo2={"Pagos"}
                href4={"#"} icon4={"far fa-money-bill-alt"} card4={"Cobros"}
                href5={"#"} icon5={"fas fa-handshake"} card5={"Convenios de Pagos"}
                href6={"#"} icon6={"fas fa-dollar-sign"} card6={"Multas"}
                href7={"#"} icon7={"fas fa-calendar-alt"} card7={"Fechas de Pagos y Descuentos"}
                href8={"/"} icon8={"fas fa-sign-out-alt"} card8={"Cerrar Sesión"}
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
                    nombredueño={"Pablo Guerrero"}
                    />
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        </div>

                        {/* <!-- Content Row --> */}
                        <div className="row">

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <Link to="/Crearpredio" className="text-xs font-weight-bold text-primary text-uppercase mb-1">CREAR NUEVO Predio</Link>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-plus-circle fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                                {/* <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <Link to="#" className="text-xs font-weight-bold text-warning text-uppercase mb-1">CREAR NUEVO USUARIO</Link>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <Link to="#" className="text-xs font-weight-bold text-success text-uppercase mb-1">Fecha de pagos y descuentos</Link>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar-check fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <Link to="#" className="text-xs font-weight-bold text-info text-uppercase mb-1">MULTAS</Link>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-cash-register fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Row --> */}

                        <Frases frase={"Bienvenidos al portal de trámites en línea de la Gobernación del Magdalena. Aquí podrá, realizar el pago de sus impuestos, Realizar Convenios de pagos, Verificar Fechas de pagos, entre otros servicios virtuales."}/>

                        <div className="row">

                            <div class="col-lg-6 mb-4">
                                <div id="carouselExampleIndicators" class="carousel slide d-block w-60" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    </ol>
                                    <div class="carousel-inner" >
                                        <div class="carousel-item active">
                                        <img class="d-block w-100" src="assets/2-20181212-09_22_22.jpg" alt="First slide"/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src="assets/quinta-de-san-pedro-aleandrino-008.jpg" alt="Second slide"/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src="assets/stios-turisticos-de-santa-marta-1140x530.jpg" alt="Third slide"/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src="assets/unnamed.jpg" alt="Forth slide"/>
                                        </div>
                                    </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Proximo</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Siguiente</span>
                                        </a>
                                    </div>
                                </div>

                                                           {/* <!-- Pie Chart --> */}
                                <div className="col-xl-4 col-lg-5">
                                 <iframe width="612" height="290" style={{"border":"0"}} loading="lazy" allowfullscreen
                                    src="https://maps.google.com/maps?q=santamarta&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>

                            </div>

                        </div>
                    {/* <!-- /.container-fluid --> */}

                </div>
                {/* <!-- End of Main Content --> */}

            </div>
            {/* <!-- End of Content Wrapper --> */}

            {/* <!-- End of Page Wrapper --> */}
        </div></>
    );
}

export default Dashboard;