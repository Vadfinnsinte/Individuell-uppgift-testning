import PrioItem from "./PrioItem"
import { useStore } from '../../data/store.js'
import { useState } from "react"

const PrioList = () => {
	
	const [searchTerm, setSearchTerm] = useState('');
	const todos = useStore(state => state.todos)
	let items = todos.filter((t => !t.done))
	const filteredTodos = items.filter((item) =>
		item.text.toLowerCase().includes(searchTerm.toLowerCase())
	  );

	let done =  todos.length - items.length
	
	return (

		<div className="prio-list">
			<h2 data-cy="todo-header"> Vad ska jag göra nu? ({done}/{todos.length} klara) </h2>
			<div className="list-container">
				<input type="search" placeholder="Filtrera uppgifter" data-cy='search-input' onChange={(e) => setSearchTerm(e.target.value)} />

				<div className="prio-items">
					{filteredTodos.map((item, index) => (
						<PrioItem key={item.id} item={item} num={index+1} />
					))}
				</div>

			</div>
		</div>
	)
}
export default PrioList
