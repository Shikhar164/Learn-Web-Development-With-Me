import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{
        id:1,
        text:"Add Your todo Here",
        completed:false
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        // state represent the current state and action have the parameters to change the particular todo like id,text
        addTodo:(state,action)=>{
            console.log('Add to do');
            console.log('state:',state.todos)
            console.log('action:',action.payload)
            const todo={
                id:nanoid(),
                text:action.payload
            }
            // console.log(action)
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            console.log('Remove to do');
            console.log('state:',state.todos)
            console.log('action:',action.payload)   
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        toggleComplete:(state,action)=>{
            const {completed}=state.todos;
            console.log(completed)
            state.todos=state.todos.map((prevTodo)=>prevTodo.id===action.payload?prevTodo.completed=!completed:prevTodo.completed)
        },
        editTodo:(state,action)=>{
            
        }
    }
})

export const {addTodo,removeTodo,editTodo,toggleComplete}=todoSlice.actions;//you sent reducers separately because you never know which components can used these reducers

export default todoSlice.reducer