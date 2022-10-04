import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodo = () => {

    const initialState = [{
        id: new Date().getTime(),
        description: 'Escribe loq eu queires hacer',
        done:false
    }]
    
    const init = () =>{
        return JSON.parse( localStorage.getItem('todos') ) || []
      }
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    const handleNewTodo = (todo) => {
        const action = {
            type:'Add ToDo',
            payload:todo
        }
        dispatch(action)
    }
  
    const handleDeleteTodo = (id) =>{
      dispatch({
        type:'Remove toDo',
        payload:id
      })
    }
  
    const handleToggleTodo = (id) =>{
      dispatch({
        type:'Toggle toDo',
        payload:id
      })
    }
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])

    return {
        
        todos,
        countTodos: todos.length,
        pendingTodos:todos.filter(todo => !todo.done).length ,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo, 
        
    }
}
