import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Message from './component/Message';
import { Component } from 'react';
import Counter from './component/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet/>
        <Greet>
          <p>React Ultimate Course</p> 
          <button>Register</button>
        </Greet>

        <Message/> */}
        <Counter/>
      </div>
    );
  }
}

export default App;
