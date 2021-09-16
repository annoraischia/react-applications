import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
 constructor(props){
   super(props)
   this.state = {
      newItem:"",
      list:[]
   }
 }
 updateInput(input){
   this.setState({
     newItem: input
   });
 }
 addItem(input){
   let listArray = this.state.list;
   listArray.push(input);
   this.setState({
     list: listArray,
     newItem: ""
   })
 }
 render() {
   return (
     <div className="App">
       <div>
         <h3>Today's To-Do</h3>
         <br/>
         <input
          type="text"
          placeholder="Task here"
          value={this.state.newItem}
          onChange={(e)=> this.updateInput(e.target.value)}
         />
         <button
           onClick={() => this.addItem(this.state.newItem)}
          >
          Add
         </button>
         <ul>
           {this.state.list.map( (val)=> <li>{val}</li>)}
         </ul>
       </div>
     </div>
   );
 }
}

export default App;