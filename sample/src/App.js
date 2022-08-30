import './App.css';
import Basic from './day002/Basic';
import Wrapper from './day002/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Basic name="jinsil" color="pink" isSpecial={true}></Basic>
      </Wrapper>
    </div>
  );
}

export default App;
