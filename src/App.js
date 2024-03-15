import Calculator from './components/calculator/Calculator';
import { useEffect, useState } from 'react'; 
import './App.css';

function App() {
  let [input1, setInput1] = useState(0);
  let [input2, setInput2] = useState(0);
  let [total, setTotal] = useState(input1+input2);
  let handleChangeInput1 = e => setInput1(e.target.value)
  let handleChangeInput2 = e => setInput2(e.target.value)
  useEffect(() => {
    setTotal(parseInt(input1)+parseInt(input2));
    console.log(`The total of ${input1} and ${input2} is ${total}`)
  }, [input1, input2, total])
  return (
    <div className="App">
      <header className="App-header">
        <Calculator 
          input1={input1} 
          input2={input2} 
          total={total}
          handleChangeInput1={handleChangeInput1} 
          handleChangeInput2={handleChangeInput2}
        />
      </header>
    </div>
  );
}

export default App;
