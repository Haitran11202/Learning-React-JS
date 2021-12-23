import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import CountDown from './CountDown';
// import Content from './Content';
// import Image from './Image';
import Message from './Message';

function App() {

  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Message/> }
    </div>
  );
}
export default App;
