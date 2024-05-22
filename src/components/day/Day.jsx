import Item from "./Item"

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props


const Day = ({ day, dayIndex }) => {
	// TODO: implement rest of week
	const dayName = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]
	
	return (
		<div data-cy="day" className="day">
	
			
			<h2 data-cy="weekday-header"> {dayName[dayIndex]} </h2>
			
				{day.map((item)=> (
					<div>
						
					<Item key={item.id} item={item}/>
					
					</div>
				))
			
		}
			  

			<div className="controls">
				<button> Ny uppgift </button>
			</div>
		</div>
	)
}

export default Day
