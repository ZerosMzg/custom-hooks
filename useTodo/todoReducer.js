import React from 'react'

export const todoReducer = (initialState, action) => {
  switch (action.type ) {
    case 'Add ToDo':
            return [...initialState, action.payload]
    case 'Remove toDo':
      return initialState.filter(todo => todo.id !== action.payload);
    
      case 'Toggle toDo':
        return initialState.map(todo => {

          if(todo.id === action.payload ){
            return{
              ...todo,
              done: !todo.done
            }
          }
          return todo
        })
  
    default:
        return initialState;

  }
}
