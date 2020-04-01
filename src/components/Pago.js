import React from 'react';

const Pago = (props) => {
    const {importe, fecha, alumnoId} = props.pago;
    const {nombre, apellido, email} = props.pago
    
    return (
            <div className="col card m-1 text-center">
                <h3>{importe}</h3> 
                <p>{fecha}</p>
                <p>{alumnoId}</p>
                <h3>{nombre}</h3> 
                <p>{apellido}</p>
                <p>{email}</p>
            </div>

    );
};

export default Pago;