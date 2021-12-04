import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {

    //console.log(props);
    
    //const saludo = 'hola mundo';

    return (
        
        <Fragment>
            <h1> { saludo } </h1>
            <p>Primera Aplicación</p>
        </Fragment>
    
    );
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludo: '',
    subtitulo: '' 
}

export default PrimeraApp;