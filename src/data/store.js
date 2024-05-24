import { create } from "zustand";
import { todos } from './data.js'
import { getToday } from "../utils/date.js";


const useStore = create(set => ({
	todos: todos, 

	setTodos: newTodo => set({ todos: newTodo }),

	todayName: getToday(),

	setTodayName: newDay => set({ todayName: newDay }),


	toggleTodo: id => set(state => ({
		todos: state.todos.map(todo =>
		  todo.id === id ? { ...todo, done: !todo.done } : todo
		)
	  })),

	
	resetTodos: () => set(state => ({ todos: state.todos.map(todo => ({
        ...todo,
        done: false
    }))
})),

	deleteTodo: id => set(state => ({
        todos: state.todos.filter(t => t.id !== id)
    })),

	uppdateTodo: (id, newText )=> set(state => ({
		todos: state.todos.map(todo => todo.id === id ? {...todo, text: newText} : todo )
	})),

	addTodo: (newTodo) => set(state => ({
		todos: [...state.todos, newTodo]
	}))


}))

export { useStore }
