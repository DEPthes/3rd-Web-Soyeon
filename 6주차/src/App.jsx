import { useState } from 'react';
import './App.css';

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
    console.log(input)
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
      setInput(eval(input));
      console.log(input)
  };

  return (
    <div>
      <table>
          <tr>
            <td colSpan="4">
              <input type="text" value={input} readOnly />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick('%')}>%</button>
            </td>
            <td>
              <button onClick={handleClear}>C</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick('7')}>7</button>
            </td>
            <td>
              <button onClick={() => handleClick('8')}>8</button>
            </td>
            <td>
              <button onClick={() => handleClick('9')}>9</button>
            </td>
            <td>
              <button onClick={() => handleClick('/')}>/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick('4')}>4</button>
            </td>
            <td>
              <button onClick={() => handleClick('5')}>5</button>
            </td>
            <td>
              <button onClick={() => handleClick('6')}>6</button>
            </td>
            <td>
              <button onClick={() => handleClick('*')}>*</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick('1')}>1</button>
            </td>
            <td>
              <button onClick={() => handleClick('2')}>2</button>
            </td>
            <td>
              <button onClick={() => handleClick('3')}>3</button>
            </td>
            <td>
              <button onClick={() => handleClick('-')}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick('0')}>0</button>
            </td>
            <td>
              <button onClick={() => handleClick('.')}>.</button>
            </td>
            <td colSpan="2">
              <button onClick={handleCalculate}>=</button>
            </td>
          </tr>
      </table>
    </div>
  );
}
