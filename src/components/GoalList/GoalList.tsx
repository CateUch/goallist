import React from 'react';
import { v1 } from 'uuid';
import GoalItem from '../GoalItem/GoalItem';

type  GoalType = {
    id: string;
    goal: string;
}

type PropsType = {
    goals: Array<GoalType>,
    onDeleteItem: (id: string) => void
}


const GoalList = (props: PropsType) => {

    return (
        <ul className='goal_list'>
            {props.goals.map(el => (
                <GoalItem
                    key={v1()}
                    id={el.id}
                    onClick={props.onDeleteItem}
                >{el.goal}</GoalItem>
            ))}
            </ul>
    )
}

export default GoalList;