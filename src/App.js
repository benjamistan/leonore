import Header from './components/Header';
import Footer from './components/Footer';
import ShowSum from './components/ShowSum';

function App() {
	return (
		<div className='ui raised padded text container'>
			<div>
				<Header />
				<ShowSum />
				<Footer />
			</div>
		</div>
	);
}

export default App;
