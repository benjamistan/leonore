import Grid from './components/Grid';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="ui raised padded text container">
      <div>
        <Header />
      </div>
      <div>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Footer />
      </div>
    </div>      
  );
}

export default App;
