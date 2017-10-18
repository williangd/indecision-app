import React from 'react';

export default class AddOptions extends React.Component {
  state = { error: undefined };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
      e.target.elements.option.focus();
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option__error">{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} className="add-option">
          <input type="text" name="option" className="add-option__input"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}
