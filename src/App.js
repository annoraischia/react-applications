import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }
  updateInput(key, value) {
    //keys help react identify which items have been changed
    this.setState({ [key]: value });
  }
  addItem() {
    // sets a new id for each new list item
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    // spread syntax to create new object that inherits current list of items
    const list = [...this.state.list];
    // add the new item to the list
    list.push(newItem);
    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div>
      <h2 className="app-title">TODAY'S TO-DO</h2>
        <div className="container">
          Task here
          <br/>
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i class="material-icons"> + </i>
          </button>
          <br/> <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
