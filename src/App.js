import Header from './components/Header';
import Footer from './components/Footer';
//import Sum from './components/Sum';
import SubtractSum from './components/SubtractSum';

function App() {
	return (
		<div className='ui raised padded text container'>
			<div>
				<Header />
				<SubtractSum />
				<Footer />
			</div>
		</div>
	);
}

export default App;
