import React, { Component } from 'react';

class Formulario extends Component {
    categoriaRef = React.createRef();

    cambiarCategoria = (e) => {
        e.preventDefault();

        
        this.props.consultarPagos(this.categoriaRef.current.value);
    }

    

    render() {
        return (
            <form onSubmit={this.cambiarCategoria}>
                
                <div className="row justify-content-center">
                
                    <div className="col-6">
                        <select ref={this.categoriaRef} className="mdb-select md-form">
                            <option  value=""  >Choose your option</option>
                            <option value="pago">Pagos</option>
                            <option value="alumno">Alumnos</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-info btn-block my-4" type="submit">Buscar</button>
                    </div>
                
                </div>
            </form>
        );
    }
}

export default Formulario;