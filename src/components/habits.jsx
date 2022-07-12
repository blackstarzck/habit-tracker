import React, { Component } from 'react'
import Habit from './habit'

export class Habits extends Component {
    state = {
        habits: [
            { id: "1", name: "Reading", count: 0 },
            { id: "2", name: "Running", count: 0 },
            { id: "3", name: "Coding", count: 0 }
        ]
    };
    // REACT에서는 state에 직접 접근해 수정하는 것은 위험하다

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

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit 
                        key={habit.id}
                        habit={habit}
                        handleIncrement={this.handleIncrement}
                        hnadleDecrement={this.hnadleDecrement}
                        handleDelete={this.handleDelete}
                    />
                ))}
            </ul>
        )
    }
}

export default Habits