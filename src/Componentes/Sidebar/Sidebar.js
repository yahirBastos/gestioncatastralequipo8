import React from "react";

class Sidebar extends React.Component{

    render(){
        return(
            <ul className="navbar-nav bg-smorange sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href={this.props.href0}>
                <div className="sidebar-brand-icon">
                    <img src={this.props.primephoto} alt="foto"/>
                </div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href={this.props.href1}>
                    <i className={this.props.icon1}></i>
                    <span>{this.props.card1}</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                {this.props.titulo}
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href={this.props.href2} data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className={this.props.icon2}></i>
                    <span> {this.props.card2}</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{this.props.card2_1}</h6>
                        <a className="collapse-item" href={this.props.href1card2}>{this.props.name1card2}</a>
                        <a className="collapse-item" href={this.props.href2card2}>{this.props.name2card2}</a>
                        <a className="collapse-item" href={this.props.href3card2}>{this.props.name3card2}</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href={this.props.href3} data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className={this.props.icon3}></i>
                    <span> {this.props.card3}</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header"> {this.props.card3_1}:</h6>
                        <a className="collapse-item" href={this.props.href1card3}>{this.props.name1card3}</a>
                        <a className="collapse-item" href={this.props.href2card3}>{this.props.name2card3}</a>
                        <a className="collapse-item" href={this.props.href3card3}>{this.props.name3card3}</a>
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
                <a className="nav-link" href={this.props.href4}>
                    <i className={this.props.icon4}></i>
                    <span> {this.props.card4}</span></a>
            </li>

            {/* <!-- Nav Item - Convenios de pagos --> */}
            <li className="nav-item">
                <a className="nav-link" href={this.props.href5}>
                    <i className={this.props.icon5}></i>
                    <span> {this.props.card5}</span></a>
            </li>

            {/* <!-- Nav Item - Multas --> */}
            <li className="nav-item">
                <a className="nav-link" href={this.props.href6}>
                    <i className={this.props.icon6}></i>
                    <span> {this.props.card6}</span></a>
            </li>

            {/* <!-- Nav Item - Fechas de Pago y Descuentos --> */}
            <li className="nav-item">
                <a className="nav-link" href={this.props.href7}>
                    <i className={this.props.icon7}></i>
                    <span> {this.props.card7}</span></a>
            </li>

            {/* <!-- Nav Item - Cerrar Sesion --> */}
            <li className="nav-item">
                <a className="nav-link" href={this.props.href8}>
                    <i className={this.props.icon8}></i>
                    <span> {this.props.card8}</span></a>
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