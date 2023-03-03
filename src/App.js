import { useState } from 'react';
import logo from './logo.svg';
import './bootstrap/bootstrap.scss';
import './App.css';
import 'antd/dist/reset.css';

import ItemTodo from './components/ItemTodo/ItemTodo.js'
import InputListTodo from './components/InputListTodo/InputListTodo.js'

function App() {
  const element = (
    <h1 className='text-primary'>App list todo</h1>
  )
  let [valueListTodo, setValueListTodo] = useState([]);

  function sortITem() {
    let updateArray = [...valueListTodo];
    updateArray.forEach((item) => {
      console.log(item);
    })
  }

  function handleClick(value) {
    let updateArray = [...valueListTodo];
    updateArray[value.index].checked = value.value;
    setValueListTodo(updateArray);
    sortITem();
  }

  function handleInput(value) {
    setValueListTodo([...valueListTodo, {name: value, checked: false}]);
  }
  function removeItem (value) {
    let updateArray = [...valueListTodo];
    updateArray.splice(value, 1);
    setValueListTodo(updateArray);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { element }
        <InputListTodo onInputChange={handleInput}/>
        {valueListTodo.map((item, index) => (
          <ItemTodo
            key={index}
            indexListoDo={index}
            onInputChange={handleClick}
            onRemoveItem={removeItem} data={item}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
