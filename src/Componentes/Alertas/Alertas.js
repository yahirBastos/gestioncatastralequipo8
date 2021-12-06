

import React from "react";
import { Link } from "react-router-dom";

class Alertas extends React.Component {
    render() {
        return (
            <><div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="alert alert-danger" role="alert">
                            <b>{this.props.bold}</b>{this.props.texto}
                        </div>
                        <Link to={this.props.href} className="btn btn-primary" data-toggle="modal" data-target="#logoutModal">
                            {this.props.boton}
                        </Link>
                    </div>
                </div>
            </div><div>
                    {/* <!-- Alerts Window 1 --> */}
                    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{this.props.titulo}</h5>
                                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">{this.props.cuerpo}</div>
                                <div class="modal-footer">
                                    <button class="btn btn-secondary" type="button" data-dismiss="modal">{this.props.boton1}</button>
                                    <a href={this.props.href1} class="btn btn-primary" data-toggle="modal" data-target="#paysent">{this.props.boton2}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Alerts Window 2 --> */}
                    <div class="modal fade" id="paysent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{this.props.titulo2}</h5>
                                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">{this.props.cuerpo2}</div>
                                <div class="modal-footer">
                                    <a class="btn btn-primary" href={this.props.href2}>{this.props.boton3}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>

        )
    }
}

export default Alertas;