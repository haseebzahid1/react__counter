import React, {Component } from 'react';

class Counter extends Component {

    // state = {
    //      value: this.props.counter.value,
    // } 

    // handleIncement = () => {
    //     this.setState({value:this.state.value+1})
    // }
     
    render() { 
      
       return(
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* <button onClick={this.handleIncement} className='btn btn-secondary btn-sm'>Increment</button> */}
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} 
            className='btn btn-secondary btn-sm mx-3' disabled={this.props.counter.value === 0 ? 'disable' : ''}>
                Decrement
            </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm'>Delete</button>
          
        </div>
       )
    }

    getBadgeClasses() {
        let classes = "p-2 m-2 text-black bg-";
        // classes += (this.state.value === 0) ? 'warning' : 'primary';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        let val = this.props.counter.value;
        // let val = this.state.value;
        return val === 0 ? 'Zero' : val;
    }
}


 
export default Counter;

