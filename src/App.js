import React, { Component } from 'react';
import {v4 as uuid}  from "uuid";
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';


class App extends Component{
  state={
    items: [],
    id: uuid(),
    item:""
  };

  handleChange = e=>{
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e=>{
    e.preventDefault();
    const newItem ={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems=[...this.state.items,newItem]

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid()
    });
  };
  Clear = ()=>{
    this.setState({
      items: []
    });
  };
  Delete = id =>{
    const filteredItems = this.state.items.filter(item=>item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
             <p className="text-center fw-bold fs-1 ">Hulaaa, 👋
              </p>
              <ToDoInput
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}/>
              <ToDoList 
              items={this.state.items} 
              clear={this.Clear}
              Delete={this.Delete}/> 
          </div>
        </div>
      </div>
                    
    ); 
  }
}



export default App;
