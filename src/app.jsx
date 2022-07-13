import React, { Component } from 'react'
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

// REACT에서는 state에 직접 접근해 수정하는 것은 위험하다

export class App extends Component {
  state = {
    habits: [
        { id: "1", name: "Reading", count: 0 },
        { id: "2", name: "Running", count: 0 },
        { id: "3", name: "Coding", count: 0 }
      ]
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;
    this.setState({ habits });
  }
  hnadleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    // if(habits[idx].count > 0) habits[idx].count--;
    const count = habits[idx].count - 1;
    habits[idx].count = count < 0 ? 0 : count;
    this.setState({ habits });
  }
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });

  }
  render (){
    console.log(this.state.habits)
    return(
        <>
          <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.hnadleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
          />
        </>
      )
    }
}

export default App;
