
import './App.css';
import Header from './Components/Header/Header';
import SearchInput from './Components/SearchInput/SearchInput';
import Tabs from './Components/Tabs/Tabs';

function App() {
  return (
    <div className="App m-20">
      <Header />
      <h2 className="mtb-20 app-quote" >Find the best music for your code</h2>
      <SearchInput />
      <Tabs />
    </div>
  );
}

export default App;
