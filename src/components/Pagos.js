import React,{Component} from 'react';
import Pago from './Pago';

export default class Pagos extends Component {

    render() {
        return (
                <div className="row">
                    {this.props.pagos.map(pago =>(
                        <Pago 
                            key = {pago.id}
                            pago = {pago}
                        />
                    ))}
                </div>
        );
    }
}