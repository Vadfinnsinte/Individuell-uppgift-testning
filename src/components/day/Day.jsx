import Item from "./Item"

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props

const Day = ({ day }) => {
	// TODO: implement rest of week
	const dayName = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]
	
	return (
		<div className="day">

			{/* {dayName.map(day => (
			<h2 data-cy="weekday-header"> {day} </h2>

			))} */}
	
	{/* {console.log(day)}	 */}
			{day.length !== 0  ? (
				day.map((item, index)=> (
					<div>

					<h2 data-cy="weekday-header"> {item.day} </h2>
						
						{console.log(index)}
					<Item key={item.id} item={item} />
					
					</div>
				))
			) : (
				<>
				{/* <h2 data-cy="weekday-header"> {item.day} </h2>
				<p>inga upg idag.</p> */}
				
				</>
			)
		}
			  

			<div className="controls">
				<button> Ny uppgift </button>
			</div>
		</div>
	)
}

export default Day
