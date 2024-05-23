
import { useState } from "react"
import { useStore } from "../../data/store"
import { splitTodosIntoDays } from "../../utils/list"

const Item = ({ item }) => {
	const [edit, setEdit] = useState(false)
	let itemClass = ''
	if( item.done ) itemClass += 'done'
	if( item.late ) itemClass += 'due'

	const deleteTodo = useStore(state => state.deleteTodo);
	const uppdateTodo = useStore(state => state.uppdateTodo);
	const toggleTodo = useStore(state => state.toggleTodo)

	const handleChange = () => {
		setEdit(true)
	}

	const handleDelete = () => {
	 	deleteTodo(item.id)
	}
	const handleSave = () => {
		setEdit(false)
	}
	const handleInput = (id, e) => {
		uppdateTodo(item.id,e )
	}
	const handleCheckbox = (id) => {
		toggleTodo(id)
	}

	return (
		<div className="item" data-cy='items'>
		
			<input data-cy="checkbox" type="checkbox" checked={item.done} onChange={() => handleCheckbox(item.id)} />
			{ !edit ? ( <label className={itemClass}>
				{item.text}
			</label> 
			) : ( 
			<input type="text" data-cy="input-field" onChange={( e) => handleInput(item.id, event.target.value)} />
			
			)}
			{/* <span title="Snooza">💤</span> */}
			{ !edit ? (
                <span title="Ändra" data-cy="edit-icon" onClick={handleChange}>✍️</span>
            ) : (
                <span data-cy="save-icon" onClick={handleSave}>💾</span>
            )}
			
			<span data-cy="delete-icon"  title="Ta bort" onClick={() => handleDelete()}>🗑️</span>
		</div>
	)
}

export default Item
