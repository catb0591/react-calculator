import './App.css';
import Title from './components/title';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <Title/>
        <form onsubmit>
          <Input/>
        </form>
    </div>
  );
}

export default App;
