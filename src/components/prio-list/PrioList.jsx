import PrioItem from "./PrioItem"
import { useStore } from '../../data/store.js'
import { useState, useEffect } from "react"
import { todos } from "../../data/data.js"
const PrioList = () => {
	const orgTodos = todos
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredTodos, setFilteredTodos] = useState(todos.filter(t => !t.done))
	const todoss = useStore(state => state.todos)
	// const setTodos = useStore(state => state.setTodos)
	// let items = todoss.filter((t => !t.done))
	// const [tempTodo, setTempTodo] = useState(orgTodos)

	useEffect(() => {
        if (searchTerm === '') {
            setFilteredTodos(todos.filter(t => !t.done))
        } else {
            setFilteredTodos(todos.filter(item => !item.done && item.text.includes(searchTerm)))
        }
    }, [searchTerm, todos])
	
	const handleSearch = (e) => {
		let value = e.target.value
 // fixa så den inte är case sensitiv. 
		setSearchTerm(value)

	}

	return (

		<div className="prio-list">
			<h2> Vad ska jag göra nu? </h2>
			<div className="list-container">
				<input type="search" placeholder="Filtrera uppgifter" data-cy='search-input' onChange={handleSearch} />

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
