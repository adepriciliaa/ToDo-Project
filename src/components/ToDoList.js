import React, { Component } from 'react'
// import Item from  "./ToDoItem";
import ToDoItem from "./ToDoItem";


export default class ToDoList extends Component {
    
    render() {
        const{items, clear, Delete} = this.props;
        return (
                <ul className="list-group">
                    <p className=" fw-bold fs-4 border-bottom">Your Activity</p>
                {items.map(item =>{
                    return(
                        <ToDoItem 
                        key={item.id}
                        title={item.title}
                        Delete={() => Delete(item.id)}
                        />                        
                    );
                })}
                <div className="border-top" style={{color:"#F6F6F6"}}>.                
                </div>
                <button type="button" className="btn btn-danger btn-block mt-0 mb-5"  onClick={clear}>CLEAR ALL</button>
                
            </ul>

        )
    }
}
