import React, { Component } from 'react'


export default class ToDoInput extends Component {
    render() {
        const{item, handleChange, handleSubmit}= this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="+ Add ur activity" value={item} onChange={handleChange}/>
                        <div className="input-group-prepend">
                            <div className="input-group-text text-white" style={{backgroundColor:"#6D9886"}}>
                                <button type="submit" className="btn text-white btn-sm" style={{boxShadow:"none"}}><i className="fas fa-plus fa-center"/></button>
                            </div>
                        </div>
                      </div>
                </form>
                
            </div>
        )
    }
}
