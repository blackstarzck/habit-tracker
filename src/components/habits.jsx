import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm';

export class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }
    hnadleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }
    handleAdd = (name) => {
        this.props.onAdd(name)
    }

    render() {
        console.log("habits")
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                            key={habit.id}
                            habit={habit}
                            // name={habit.name}
                            // count={habit.count}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.hnadleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button className='habits-reset' onClick={this.props.onReset}>Reset All</button>
            </>
        )
    }
}

export default Habits