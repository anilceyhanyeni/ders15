import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoAksiyonlari';

export default configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});