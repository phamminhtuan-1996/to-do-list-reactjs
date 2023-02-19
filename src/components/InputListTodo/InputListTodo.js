import { useState } from 'react';
import { Input, Button } from 'antd';
import './InputListTodo.scss';

function InputListTodo(props) {
    let [valueInput, setValueInput] = useState('');
    function handleInput(event) {
        setValueInput(event.target.value);
    }
    function handleClickSubmid() {
        if (valueInput === '') {
            return;
        }
        props.onInputChange(valueInput);
        setValueInput('');
    }
    return (
        <div className="input-list-todo d-flex">
            <span className='input-list-todo__label d-block mr-2'>Input value</span> <Input value={valueInput} onChange={handleInput} placeholder="Basic usage" />
            <Button className='bg-success h-100 ml-2 text-white' onClick={handleClickSubmid}>Submit</Button>
        </div>
    )
}
export default InputListTodo;