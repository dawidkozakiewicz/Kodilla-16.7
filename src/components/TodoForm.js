import React from 'react';
import style from './TodoForm.css';

/*const Form = props => {
  let inputEl;
  return (
    <div> 
      <form>
        <label htmlFor="searchText">Dodaj czynność</label>
        <input
          type="text"
          id="searchText"
          ref={el => inputEl = el}	
          onChange={event => console.log(inputEl)}
        />
          
        <button onClick={() => this.props.add({inputEl})} >Dodaj</button>
      </form>
    </div>
  )
}
export default Form;*/

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
	this.props.add(this.state.value);
    event.preventDefault();
	this.state.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Dodaj zadanie:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Dodaj</button>
      </form>
    );
  }
}

export default Form;