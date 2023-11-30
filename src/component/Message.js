import React from 'react';
import { useState } from 'react';

export const Message = () => {
  // Declare state variable 'name' and its updater function 'setName'
  let [name, setName] = useState('Emmanuel');
  let [age, setAge] = useState(20)

  // Define a function to handle the button click and update the 'name' state
  const handleClick = () => setName('Asima');
  

  // JSX content to render
  return (
    <div>
      <h2>
        Welcome {name}! <br/> {name} is {age} years old
      </h2>
      <button onClick={handleClick}>Subscribe</button>
    </div>
  );
};
 
export default Message;
