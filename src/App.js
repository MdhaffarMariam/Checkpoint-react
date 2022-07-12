import './App.css';
import TextInput from './components/formulaire/TextInput';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cardsholder/Cards';


function App() {
  return (
    <div className="App">
      <NavBar/>
     <TextInput/>
     <Cards/>
    </div>
  );
}

export default App;
