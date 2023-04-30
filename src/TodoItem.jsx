import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from './redux/todoAksiyonlari';


const TodoItem = ({ id, title, completed }) => {
	const araciFonksiyon = useDispatch();

	const handleCheckboxClick = () => {
		araciFonksiyon(toggleComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		araciFonksiyon(deleteTodo({ id }));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input onClick={handleCheckboxClick} type='checkbox' className='mr-3' checked={completed}></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;