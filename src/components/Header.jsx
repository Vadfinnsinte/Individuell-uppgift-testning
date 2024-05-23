const Header = () => (
	<header>
		<h1> Min vecka </h1>
		<button className="restart-week"> Starta om vecka </button>
	</header>
)

export default Header


// Går ju inte direkt komponent-testa? Är det ok att "bara" köra e2e test på denna? 

// Annars, ska man köra ett test i Header för att kolla om knappen finns? och sedan köra checkbox-test i item? 

