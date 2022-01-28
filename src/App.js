
import {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchInput from './Components/SearchInput/SearchInput';
import Tabs from './Components/Tabs/Tabs';
import AudioList from './Components/AudioList/AudioList';
import FixFooter from './Components/FixFooter/FixFooter';

function App() {

  const [list,setList] = useState(false);
  
  const onBackButtonPress = () => {
    setList(false);
  }
  
  return (
    <div className="App m-20">
      <Header />
      <h2 className="mtb-20 app-quote" >Find the best music for your code</h2>
      <SearchInput />
      <Tabs />
      {list && <AudioList onBackButtonPress={onBackButtonPress} />}
      <FixFooter />
    </div>
  );
}

export default App;
