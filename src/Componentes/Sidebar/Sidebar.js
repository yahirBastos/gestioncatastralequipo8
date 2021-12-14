import React from "react";
import { Link} from "react-router-dom";

class Sidebar extends React.Component{

    render(){
        return(
            <ul className="navbar-nav bg-smorange sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link  className="sidebar-brand d-flex align-items-center justify-content-center" to={this.props.href0}>
                <div className="sidebar-brand-icon">
                    <img src={this.props.primephoto} alt="foto"/>
                </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link  className="nav-link" to={this.props.href1}>
                    <i className={this.props.icon1}></i>
                    <span>{this.props.card1}</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                {this.props.titulo}
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link  className="nav-link collapsed" to={this.props.href2} data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className={this.props.icon2}></i>
                    <span> {this.props.card2}</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{this.props.card2_1}</h6>
                        <Link  className="collapse-item" to={this.props.href1card2}>{this.props.name1card2}</Link>
                        <Link  className="collapse-item" to={this.props.href2card2}>{this.props.name2card2}</Link>
                        <Link  className="collapse-item" to={this.props.href3card2}>{this.props.name3card2}</Link>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <Link  className="nav-link collapsed" to={this.props.href3} data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className={this.props.icon3}></i>
                    <span> {this.props.card3}</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header"> {this.props.card3_1}:</h6>
                        <Link  className="collapse-item" to={this.props.href1card3}>{this.props.name1card3}</Link>
                        <Link  className="collapse-item" to={this.props.href2card3}>{this.props.name2card3}</Link>
                        <Link  className="collapse-item" to={this.props.href3card3}>{this.props.name3card3}</Link>
                    </div>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                {this.props.titulo2}
            </div>

            {/* <!-- Nav Item - Cobros --> */}
            <li className="nav-item">
                <Link  className="nav-link" to={this.props.href4}>
                    <i className={this.props.icon4}></i>
                    <span> {this.props.card4}</span></Link>
            </li>

            {/* <!-- Nav Item - Convenios de pagos --> */}
            <li className="nav-item">
                <Link  className="nav-link" to={this.props.href5}>
                    <i className={this.props.icon5}></i>
                    <span> {this.props.card5}</span></Link>
            </li>

            {/* <!-- Nav Item - Multas --> */}
            <li className="nav-item">
                <Link  className="nav-link" to={this.props.href6}>
                    <i className={this.props.icon6}></i>
                    <span> {this.props.card6}</span></Link>
            </li>

            {/* <!-- Nav Item - Fechas de Pago y Descuentos --> */}
            <li className="nav-item">
                <Link  className="nav-link" to={this.props.href7}>
                    <i className={this.props.icon7}></i>
                    <span> {this.props.card7}</span></Link>
            </li>

            {/* <!-- Nav Item - Cerrar Sesion --> */}
            <li className="nav-item">
                <Link  className="nav-link" to={this.props.href8}>
                    <i className={this.props.icon8}></i>
                    <span> {this.props.card8}</span></Link>
            </li>


            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        )
    }
}

export default Sidebar 