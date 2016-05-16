import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
   constructor() {
      super();
	   //se le esta pasando logica del construector al metodo findDomNodeHandler
      this.setPlusOne= this.setPlusOne.bind(this);
      
      this.state={
         data:0,
      }
   };
   
   setPlusOne(){
      
      this.setState({data: this.state.data+1});
   }

  

   render() {
      return (
         <div>
            <button onClick={this.setPlusOne}>SUMAR +1</button>
            <Mostrar myNumber={this.state.data}/>
         </div>
      );
   }
}


class Mostrar extends React.Component {
 
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}


export default App;