import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        const {title, Delete} = this.props;
        return <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{title}</h6>
            <div className="todo-icon">
                <span className="mx-2 text-danger" onClick={Delete}>
                    <i class="fas fa-trash"></i>
                </span>
            </div>
        </li>
    }
}

