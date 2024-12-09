import './App.css';
import { AppRouter } from './AppRouter';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AppRouter/>
    </div>
  );
}

export default App;
