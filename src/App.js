import React, {Component} from 'react';

import Header from './components/Header';
import Pagos from './components/Pagos';
import Formulario from './components/Formulario';

class App extends Component {
  state ={
    pagos : []
  }
  
  componentDidMount() {
    this.consultaPagos();
  }

  consultaPagos = (categoria = 'pago') =>{
   
    let url= `http://localhost:60583/api/${categoria}`;
   


    fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(pagos =>{
      this.setState(
        {
          pagos:pagos
        }
      )
    })

  };

  render (){
    return(
      <div >
        <Header 
         titulo="Noticias"
        />
        <Formulario
          consultarPagos = {this.consultaPagos} 
        />

        <Pagos
          pagos={this.state.pagos}
        />
    </div>
    ); 
  }
}

export default App;
