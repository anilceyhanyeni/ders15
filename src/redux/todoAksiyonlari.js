import { createSlice } from '@reduxjs/toolkit';

export const todoAksiyonlari = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'Ekmek alınacak', completed: false },
        { id: 2, title: 'Süt alınacak', completed: false },
        { id: 3, title: 'Yumurta alınacak', completed: true },
        { id: 4, title: 'Meyve alınacak', completed: false },
        { id: 5, title: 'Bulaşık yıkanacak', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
        deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
    },
});


export const { addTodo, toggleComplete, deleteTodo} = todoAksiyonlari.actions;

export default todoAksiyonlari.reducer;