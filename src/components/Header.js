import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div className="row bg-success">
                <div className="col text-center">
                    <h1> {props.titulo} </h1>
                </div>
            </div>
        </div>
    );
};

export default Header;