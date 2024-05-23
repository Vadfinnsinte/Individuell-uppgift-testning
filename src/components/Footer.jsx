import { useStore } from "../data/store"

// TODO: hämta dagens datum från store
const Footer = () => {

	let today = useStore(state => state.todayName)

 return (
	<footer>
		<p data-cy="today" > Idag är det: {today} </p>
		<p> Studieguide | 2024 </p>
	</footer>

 )

}


export default Footer
