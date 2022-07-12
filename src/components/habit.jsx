import React, { Component } from 'react'

export class Habit extends Component {
    handleIncrement = () => {
        console.log(this.props.habit)
        this.props.handleIncrement(this.props.habit);
    }
    hnadleDecrement = () => {
        console.log(this.props.habit)
        this.props.hnadleDecrement(this.props.habit);
    }
    handleDelete = () => {
        console.log(this.props.habit)
        this.props.handleDelete(this.props.habit);
    }

    render() {
        const { name, count } = this.props.habit;

        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.hnadleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className='habit-button habit-delete' onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit