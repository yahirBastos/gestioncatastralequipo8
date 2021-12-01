

import React from "react";

class Imagen extends React.Component {
  render() {
    return <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src= {this.props.imagen} alt={this.props.alternativo} /></div>;
  }
}

export default Imagen;