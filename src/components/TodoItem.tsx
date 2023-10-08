import { ITodo } from "../types/types";
import {FC} from 'react';
interface TodoItemProps {
    todo:ITodo
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return ( 
<div>
    <input type="checkbox" checked={todo.complated}/>
    {todo.id},{todo.title}
</div>
     );
}
 
export default TodoItem;