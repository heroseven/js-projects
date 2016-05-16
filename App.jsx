import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
   constructor() {
      super();
	   //se le esta pasando logica del construector al metodo findDomNodeHandler
      this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   findDomNodeHandler(){
      var myDiv= document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color='green';
   }

   render() {
      return (
         <div>
            <button onClick={this.findDomNodeHandler}>FIND DOM HANDLER</button>
            <div id="myDiv">Node</div>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header2222</h1>
         </div>
      );
   }
}

class Component1 extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.nombre}</h1>
            <h2>{this.props.codigo}</h2>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;