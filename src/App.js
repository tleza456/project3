import { useState } from 'react';
import './App.css';
function App() {
  const [count, seCount] =useState(0);
  const addCount = () => {
    
    seCount(count+1);
  };
  return (
    <div>
      <p>คุณกดปุ่มไปแล้ว {count} ครั้ง</p>
      <button onClick={addCount}>+1</button>
    </div>
  );
}

export default App;
