import React, { Component } from 'react'

export class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);

        // this.inputRef.current.value = "";
        console.log(this.formRef)
        this.formRef.current.reset();
    }

    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                <input ref={this.inputRef} className='add-input' type="text" placeholder='Habit' />
                <button className="add-button">Add</button>
            </form>
        )
    }
}

export default HabitAddForm