import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
   constructor() {
      super();
	   //se le esta pasando logica del construector al metodo findDomNodeHandler
      this.setChangeAccordingToInput= this.setChangeAccordingToInput.bind(this);
      
      this.state={
         data:'',
      }
   };
   
   /*getDomNode(){
      var valor=document.getElementById('valor');
      return ReactDOM.findDOMNode(valor).value;
   };*/
   
   setChangeAccordingToInput(e){
      this.setState({data:e.target.value})
   }
   

  
   componentWillMount(){
      this.setState({data:'hola'});
   }
   render() {
      return (
         <div>
            {this.state.data}<input value={this.state.data} onChange={this.setChangeAccordingToInput} id="valor" type="text"/>
         </div>
      );
   }
}


class Mostrar extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
 
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}


export default App;