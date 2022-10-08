import React, {Component} from "react";
import Nombre from './Nombre';
import Descripcion from './Descripcion'
import Precio from './Precio'
import SKU from './SKU'
import Cantidad from './Cantidad'
import Llevar from './Llevar'

class Data extends Component {
    render(){
        return(
            <div>
                <Nombre />
                <Descripcion />
                <Precio />
                <SKU />
                <Cantidad />
                <Llevar />

            </div>

        )
    }
}
export default Data