import { useStore } from '../data/store.js'
import Day from "./day/Day"
import PrioList from "./prio-list/PrioList.jsx"
import { splitTodosIntoDays } from '../utils/list.js'

const Main = () => {
	const todos = useStore(state => state.todos)

	const days = splitTodosIntoDays(todos)

	return (
		<main>
			<div  className="day-view">
				{days.map((d, dayIndex)=> (
					<>
					<Day day={d} key={dayIndex} dayIndex={dayIndex} />
					</>
				))}
			</div>

			<hr />

			<PrioList />

		</main>
	)
}

export default Main
