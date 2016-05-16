import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
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