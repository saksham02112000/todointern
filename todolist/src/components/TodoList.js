import React, {useEffect} from 'react';
import TodoItem from './TodoItem';
import {useDispatch, useSelector} from "react-redux";
import {getTodosAsync} from "../Redux/todoSlice";

const TodoList = () => {
		const dispatch=useDispatch();
		const todos=useSelector((state)=>state.todos);
		useEffect(()=>{
			dispatch(getTodosAsync());
		},[dispatch]);
		return(

		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
