import { useState } from "react"
import Item from "./Item"
import { useStore } from "../../data/store"

const Day = ({ day, dayIndex }) => {
	
	const addTodo = useStore(state => state.addTodo)
	const dayName = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]
	const [isEdeting, setIsEdeting] = useState(false)
	const [inputValue, setInputValue] = useState("")

	const handleSave = () => {
		if (isEdeting && inputValue.trim() !== "") {
			setIsEdeting(false)
			let newTodo = {
				id: Date.now(),
				day: dayName[dayIndex].toLowerCase(),
				done: false,
				late: false, 
				text: inputValue
			}
			
			addTodo(newTodo)
			setInputValue("")
		}else {
			setIsEdeting(true)
		}
	}

	return (
		<div data-cy="day" className="day">
	
			
			<h2 data-cy="weekday-header"> {dayName[dayIndex]} </h2>
			
				{day.map((item)=> (
					<div key={item.id}>
						
					<Item key={item.id} item={item}/>
					
					</div>
				))
			
		}
			  

			<div className="controls">
				{isEdeting && <input data-cy="add-input" type="text" onChange={(e) => setInputValue(e.target.value)} /> }
				{<button data-cy="add-btn" onClick={handleSave} > {isEdeting ? 'Spara' : 'Ny uppgift'} </button>}
			</div>
		</div>
	)
}

export default Day
