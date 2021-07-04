import React, { ChangeEvent, FormEvent } from 'react';
import {useState} from 'react';
import './GoalInput.css';
import Button from '../Button/Button';

type PropsType = {
    newGoalHandler: (value: string) => void
}

const GoalInput = (props: PropsType) => {

    const[inputValue, setInputValue] = useState ('')

    function changeInputValue (event: ChangeEvent<HTMLInputElement>) {
            setInputValue(event.target.value);
    }

    function formSubmitHandler (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.newGoalHandler(inputValue);
        setInputValue('');
    }

return (
    <form onSubmit={formSubmitHandler}>
    <div className='goal_input'>
        <input type="text" onChange={changeInputValue} value={inputValue}/>
        </div>
        <Button type='submit'>Add Goal</Button>
    </form>
)
}

export default GoalInput;