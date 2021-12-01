import React from "react";

class Frases extends React.Component {
  render() {
    return (
        <div className="card text-white bg-secondaryh my-5 py-4 text-center">
          <div className="card-body2"><p className="text-white m-0">{this.props.frase}</p></div>
        </div>
    )
  }
}

export default Frases;