import React, {Component} from "react";

export default class TodoListItem extends Component{
    constructor(props){
        super(props);
    }

    onRemove = () => {
        this.props.removeFromItems(this.props.index);
    }

    render(){
        const {item} = this.props;
        return(
            <li>
                {item}
                <button type="button" onClick={this.onRemove}>X</button>
            </li>
        );
    }
}