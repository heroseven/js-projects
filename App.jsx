import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],
         header: "hola"
      }
   }
	
   render() {
      return (
         <div>
         <Component1 nombre="componente 1" codigo="20101170"/>
          <Component1 nombre={this.state.header} codigo={this.state.data[2].name}/>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
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