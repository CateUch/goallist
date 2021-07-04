import React, { ReactChild } from 'react';
import './GoalItem.css';

type PropsType = {
    onClick: (id: string) => void,
    id: string,
    children: ReactChild
}

const GoalItem = (props: PropsType) => {

    return (
        <li className="goal_item" onClick={() => props.onClick(props.id)}>
            {props.children}
        </li>
    );
};

export default GoalItem;
