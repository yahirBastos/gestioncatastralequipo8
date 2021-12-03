/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Frases from "../Frases";
import { Link } from "react-router-dom";

class Contenidoboard extends React.Component{
    render(){
        return(
            <><div className="row">

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <Link to={this.props.link1} className="text-xs font-weight-bold text-primary text-uppercase mb-1">{this.props.titulo1}</Link>
                                </div>
                                <div className="col-auto">
                                    <i className= {this.props.icon}></i>
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
                                    <Link to={this.props.link2} className="text-xs font-weight-bold text-warning text-uppercase mb-1">{this.props.titulo2}</Link>
                                </div>
                                <div className="col-auto">
                                    <i className={this.props.icon2 + "fa-2x text-gray-300"}></i>
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
                                    <Link to={this.props.link3} className="text-xs font-weight-bold text-success text-uppercase mb-1">{this.props.titulo3}</Link>
                                </div>
                                <div className="col-auto">
                                    <i className={this.props.icon3 + "fa-2x text-gray-300"}></i>
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
                                    <Link to={this.props.link4} className="text-xs font-weight-bold text-info text-uppercase mb-1">{this.props.titulo4}</Link>
                                </div>
                                <div className="col-auto">
                                    <i className= {this.props.icon4 + "fa-2x text-gray-300"}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><Frases frase={this.props.frase} /><div className="row">

                    <div class="col-lg-6 mb-4">
                        <div id="carouselExampleIndicators" class="carousel slide d-block w-60" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="assets/2-20181212-09_22_22.jpg" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/quinta-de-san-pedro-aleandrino-008.jpg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/stios-turisticos-de-santa-marta-1140x530.jpg" alt="Third slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/unnamed.jpg" alt="Forth slide" />
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

                    {/* <!-- Mapa --> */}
                    <div className="col-xl-4 col-lg-5">
                        <iframe width="612" height="290" style={{ "border": "0" }} loading="lazy" allowfullscreen
                            src="https://maps.google.com/maps?q=santamarta&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>

                </div></>
        )
    }
}
export default Contenidoboard;