import { useStore } from "../data/store"

const Header = () => {
	const removeTodos = useStore(state => state.resetTodos)
	const removeChecks = () => {
		removeTodos()
	}
	return (
	<header>
		<h1> Min vecka </h1>
		<button data-cy="redo-week-btn" className="restart-week" onClick={removeChecks}> Starta om vecka </button>
	</header>

	)
	
}
export default Header





