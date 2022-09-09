import React, {Component} from "react";
import TodoListItem from "./TodoListItem";

//1 FORMA - Guarda estado
// export default class TodoList extends Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return (
//             <ul></ul>
//         );
//     }
// }

//2 FORMA: stateless, não guarda estado.
export const TodoList = (props) => {
    const {items, removeFromItems} = props;
    return(
        <ul className="list-group">
            {items.map((item, index) => (
                <TodoListItem key={index} index={index} item={item} removeFromItems = {removeFromItems}/>
            ))}
        </ul>
    )
}