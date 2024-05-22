import { create } from "zustand";
import { todos } from './data.js'
import { getToday } from "../utils/date.js";


const useStore = create(set => ({
	todos: todos,  // TODO: "todos" är data som du kan använda under utvecklingen - byt ut den mot din egen testdata

	setTodos: newTodo => set({ todos: newTodo }),

	todayName: getToday(),
	// TODO: du behöver en funktion setTodayName för att kunna testa appen med olika veckodagar


	toggleTodo: id => set(state => {
		// Det är möjligt att det finns en liiiiiten bug här, som man i så fall skulle upptäcka när man testar 😇
		return {
			...state,
			todos: state.todos.map(t => {
				if( t.id === id ) {
					return { done: !t.done, ...t }
				} else {
					return t
				}
			})
		}
	}),

	resetTodos: () => set(state => ({ todos: [] })),

	deleteTodo: id => set(state => ({
        todos: state.todos.filter(t => t.id !== id)
    })),

	uppdateTodo: (id, newText )=> set(state => ({
		todos: state.todos.map(todo => todo.id === id ? {...todo, text: newText} : todo )
	}))


	

}))

export { useStore }
