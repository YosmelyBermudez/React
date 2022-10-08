import React,{Component} from "react";

class Llevar extends Component {
    constructor(props) {
        super(props);
        this.state = { showTitle: false };
}
render() {
    return (
      <div>
        <button onClick={() => this.setState({ showTitle: true })}>Comprar</button>
        {this.state.showTitle && (
          <h1>¡Gracias por su Compra!</h1>
        )}
      </div>
    );
  }
}
export default Llevar