
import { Checkbox } from 'antd';
import { Button } from 'antd';
import './ItemTodo.scss';


function ItemTodo(props) {
    function handleClick() {
        const data = {
                    value: props.data.checked = !props.data.checked,
                    index: props.indexListoDo
                };
        props.onInputChange(data);
    }

    function handleClickRemove() {
        props.onRemoveItem(props.indexListoDo);
    }
   
    return (
        <div className="item-todo d-flex justify-content-between align-items-center mt-3">
             <Checkbox checked={props.data.checked} className="mr-3" onClick={handleClick}></Checkbox>
             <span onClick={handleClick}>{props.data.name}</span>
             <Button className='bg-danger text-white ml-2' onClick={handleClickRemove}>remove</Button>
        </div>
    )
}

export default ItemTodo;