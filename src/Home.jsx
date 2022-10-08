import React, {Component} from 'react';
import Data from './Data';
import sello from './sello_arg.jpg';

class Home extends Component {
    render (){
        return (
                <div>
                    <img
                    src = {sello}
                    style={{ width: 150, height: 200, marginBottom: 15 }}
                    />
                    <Data />
                </div>)
    }
}
export default Home

