import React, { useState, Fragment } from 'react';

function Cita({ cita }) {
    return ( <
        div className = "cita" >
        <
        p > Mascota: < span > { cita.mascota } < /span></p >
        <
        p > Dueño: < span > { cita.propietario } < /span></p >
        <
        p > Fecha: < span > { cita.fecha } < /span></p >
        <
        p > Hora: < span > { cita.hora } < /span></p >
        <
        p > Sintomas: < span > { cita.sintomas } < /span></p >
        <
        /div>
    );
}


function Formulario({ crearCita }) {
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };


    const enviarCita = (e) => {
        e.preventDefault();

        // pasar la cita al componente principal
        crearCita(cita);
        // reiniciar el state (el form)
    };

    return ( <
        Fragment >
        <
        h2 > Crear Cita < /h2>

        <
        form onSubmit = { enviarCita } >
        <
        label > Nombre Mascota < /label> <
        input type = "text"
        name = "mascota"
        className = "u-full-width"
        placeholder = "Nombre Mascota"
        onChange = { actualizarState }
        />

        <
        label > Nombre Dueño < /label> <
        input type = "text"
        name = "propietario"
        className = "u-full-width"
        placeholder = "Nombre Dueño de la Mascota"
        onChange = { actualizarState }
        />

        <
        label > Fecha < /label> <
        input type = "date"
        className = "u-full-width"
        name = "fecha"
        onChange = { actualizarState }
        />               

        <
        label > Hora < /label> <
        input type = "time"
        className = "u-full-width"
        name = "hora"
        onChange = { actualizarState }
        />

        <
        label > Sintomas < /label> <
        textarea className = "u-full-width"
        name = "sintomas"
        onChange = { actualizarState } >
        < /textarea>

        <
        button type = "submit"
        className = "button-primary u-full-width" > Agregar < /button> <
        /form> <
        /Fragment>    
    );
}

function App() {
    // haciendo uso se useState
    // 1. el state actual = this.state
    // 2. funcion que actualiza el state: this.setState({})
    const [citas, guardarCita] = useState([]);

    const crearCita = cita => {
        // tomar copia del state y crear nueva cita
        const nuevasCitas = [...citas, cita];
        // almacenamos en el state
        guardarCita(nuevasCitas);
    }

    return ( <
        Fragment >
        <
        div className = "App" >
        <
        h1 > Administrador de Pacientes < /h1> <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "one-half column" >
        <
        Formulario crearCita = { crearCita }
        /> <
        /div>         <
        div className = "one-half column" > {
            citas.map((cita, index) => ( <
                Cita key = { index }
                index = { index }
                cita = { cita }
                />
            ))
        } <
        /div>         <
        /div> <
        /div> <
        /div> <
        /Fragment>  
    );
}

export default App;