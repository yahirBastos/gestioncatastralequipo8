import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render(){
        return(

            <nav className="navbar navbar-expand navbar-light bg-smorange topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Search --> */}
            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar"
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <Link to={this.props.linksearch} className="nav-link dropdown-toggle"id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                    </Link>

                    {/* <!-- Dropdown - Messages --> */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Buscar" aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                {/* <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">

                    <Link to={this.props.linknotifi} className="nav-link dropdown-toggle"id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw"></i>
                            {/* <!-- Counter - Alerts --> */}
                            <span className="badge badge-danger badge-counter">{this.props.contadornotifi}</span>
                    </Link>

                    {/* <!-- Dropdown - Alerts --> */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            Notificaciones
                        </h6>
                        <Link to={this.props.linkncontenidonotifi1} className="dropdown-item d-flex align-items-center">
                            <div>
                                <div className="small text-gray-500">{this.props.fechanotific}</div>
                                <span className="font-weight-bold">{this.props.contenidonotifi}</span>
                            </div>
                        </Link>

                        <Link to={this.props.linkncontenidonotifi2} className="dropdown-item d-flex align-items-center">
                            <div>
                                <div className="small text-gray-500">{this.props.fechanotific2}</div>
                                {this.props.contenidonotifi2}
                            </div>
                        </Link>

                        <Link to={this.props.linkncontenidonotifi3} className="dropdown-item d-flex align-items-center">
                            <div>
                                <div className="small text-gray-500">{this.props.fechanotific3}</div>
                                {this.props.contenidonotifi3}
                            </div>
                        </Link>
                    </div>
                </li>

                {/* <!-- Nav Item - Messages --> */}
                <li className="nav-item dropdown no-arrow mx-1">

                    <Link to={this.props.linkmensajes} className="nav-link dropdown-toggle" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        {/* <!-- Counter - Messages --> */}
                        <span className="badge badge-danger badge-counter">{this.props.contadormensajes}</span>
                    </Link>

                    {/* <!-- Dropdown - Messages --> */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Mensajes
                        </h6>

                        <Link to={this.props.linkncontenidomensaje} className="dropdown-item d-flex align-items-center">
                        <div className="font-weight-bold">
                                <div className="text-truncate">{this.props.contenidomensaje}</div>
                                <div className="small text-gray-500">{this.props.remitentemensaje}</div>
                            </div>
                        </Link>

                        <Link to={this.props.linkncontenidomensaje2} className="dropdown-item d-flex align-items-center">
                            <div>
                                <div className="text-truncate">{this.props.contenidomensaje2}</div>
                                <div className="small text-gray-500">{this.props.remitentemensaje2}</div>
                            </div>
                        </Link>

                        <Link to={this.props.linkncontenidomensaje3} className="dropdown-item d-flex align-items-center">
                            <div>
                                <div className="text-truncate">{this.props.contenidomensaje2}</div>
                                <div className="small text-gray-500">{this.props.remitentemensaje2}</div>
                            </div>
                        </Link>

                        <Link to={this.props.linkncontenidomensaje3} className="dropdown-item d-flex align-items-center">
                            <div>
                                <div className="text-truncate">{this.props.contenidomensaje3}</div>
                                <div className="small text-gray-500">{this.props.remitentemensaje3}</div>
                            </div>
                        </Link>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                    <Link to={"/Dashboard"} className="nav-link dropdown-toggle" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.props.nombredueño}</span>
                        <i className="fas fa-user-tie"></i>
                    </Link>
                </li>

            </ul>

        </nav>
        )
    }
}
export default Navbar