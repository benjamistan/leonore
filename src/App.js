import PrintTemplate from 'react-print';
import Grid from './components/Grid';
import Header from './components/Header';

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
      </div>
    </div>

      
  );
}

export default App;
