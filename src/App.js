import Header from './components/Header';
import Footer from './components/Footer';
import Sum from './components/Sum';

function App() {
	return (
		<div className='ui raised padded text container'>
			<div>
				<Header />
				<Sum />
				<Footer />
			</div>
		</div>
	);
}

export default App;
