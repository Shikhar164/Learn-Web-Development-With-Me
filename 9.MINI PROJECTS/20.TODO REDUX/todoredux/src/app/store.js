import {configureStore} from '@reduxjs/toolkit';
// export types [MINI PROJECTS\20.TODO REDUX\todoredux\src\assets\export types.jpg]
import todoReducer from '../features/todo/todoSlice'

export const store=configureStore({
    reducer:todoReducer
})