import React from "react";

const TodoItem = ({todo, toggleTask, removeTask}) => {
    return (
        <div className="todo-row">
            {todo.task}
            <div className="iconsContainer">
                
            </div>
        </div>
    );
};

export default TodoItem;