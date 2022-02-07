import { useState } from 'react';
import './App.css';
import { v1 } from 'uuid';
import GoalInput from './components/GoalInput/GoalInput';
import GoalList from './components/GoalList/GoalList';

function App() {

  const [goals, setGoals] = useState([
    { id: v1(), goal: "read a book" },
    { id: v1(), goal: "create new app" }
  ])

  function saveNewGoal(newGoal: string) {

    let newArrGoal = { id: v1(), goal: newGoal }
    setGoals((prevState) => [...prevState, newArrGoal]
    );
  }

  function deleteHandler(id: string) {
    setGoals((prevGoals) => {
      const filteredGoals = goals.filter(el => (el.id !== id));
      return filteredGoals;
    });
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (goals.length > 0) {
    content = (
      <GoalList goals={goals} onDeleteItem={deleteHandler} />
    );
  }


  return (
    <div>
      <section id='goal_form'>
        <GoalInput newGoalHandler={saveNewGoal} />
      </section>
      <section id='goals'>
        {content}
      </section>
    </div>
  );
}

export default App;
