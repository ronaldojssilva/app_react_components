import React, {Component} from "react";

export default class TodoForm extends Component{
    constructor (props){
        super(props);
        console.log(`TodoForm.js PROPS:  ${props}`);
        this.state = {
            todo: ''
        };
    }

    onAdd = (event) => {
        event.preventDefault();
        const {todo} = this.state;
        if (todo) {
            this.props.pushToItems(todo);
            this.setState({
                todo: ''
            });
        }
    }

    onChange = (event) => {
        this.setState({todo: event.target.value});
    }
    
    render(){
        const {todo} = this.state;
        return(
            <div>
                <input type="text" value={todo} name='todo' placeholder='Enter todo here' onChange={this.onChange}/>
                <button type='button' onClick={this.onAdd}>Create</button>
            </div>
        );
    }
}