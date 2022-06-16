import React, { useState } from 'react';
import { confirm } from "react-confirm-box";



const TodoElement = ({ todo, deleteTodo, editTodo }) => {
    const [ message, setMessage] = useState('');
    const [ update, setUpdate] = useState(false);

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleDelete = async (id) => {
        const result = await confirm("Are you sure?");
        if (result) {
            console.log("You click yes!");
            deleteTodo(id)
            return;
        }
        console.log("You click No!");
    }

    return (
        <li key={todo._id} >
            { update
                ? <input type="text" value={message} onChange={handleChange} />
                : <div>{todo.action}</div>
            }
            <div style={{
                display: "flex",
                width: "20rem",
            }}>
                <button type="button" onClick={() => handleDelete(todo._id)}>Delete</button>
                {!update
                    ? (<button type="button" onClick={() => {
                        setUpdate(true)
                        setMessage(todo.action)
                        console.log('goto edit '+ todo._id)
                    }}>Edit</button>)
                    : (<div style={{
                        display: "flex",
                        minWidth: "100%",
                    }}>
                        <button type="button" onClick={() => {
                            editTodo(todo._id, message)
                                .then(() => {setUpdate(false)})
                            console.log('save edit '+ todo._id)
                        }}>Save</button>

                        <button type="button" onClick={() => {
                            setUpdate(false)
                            console.log('cancel edit '+ todo._id)
                        }}>Cancel</button>
                    </div>)
                }
            </div>

        </li>
    );
};

export default TodoElement;