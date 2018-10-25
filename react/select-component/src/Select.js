import React from 'react';
import './Select.css';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {value: props.config.defaultOption};
  }

  handleChange(event) {
    this.props.onSelectChange( event.target.name, event.target.value );
    this.setState(
      {value: event.target.value}
    );
  }

  render() {
    return (
      <div>
        <label> {this.props.config.label}:<br />
          <select name={this.props.config.name} onChange={this.handleChange} value={this.state.value}>
            {this.props.config.options.map(option => <option key={option.id} value={option.value}>{option.label}</option>)}
          </select>
        </label>
      </div>
    );
  }
}

export default Select
