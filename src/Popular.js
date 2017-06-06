import React, { Component } from 'react';


const SelectedLanguage = (props) => {
  console.log(props)
  const language = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <div className="menu-area">


      <ul className="menu">
        {language.map((item, key) => {
          return (
            <li style={props.selectedlang === item ? { color: 'red' } : null}
              key={key}
              onClick={props.onSelect.bind(null, item)}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      value: ''
    }
    this.updateLanguages = this.updateLanguages.bind(this)
  }
  updateLanguages(item) {
    this.setState({ selected: item })
  }


  submitForm(e) {
    e.preventDefault();
    console.log(e.value)
  }

  handleChange(event) {
    this.setState({value:event.target.value})
  }
  render() {
    return (
      <div className="container">
        <SelectedLanguage
          onSelect={this.updateLanguages}
          selectedlang={this.state.selected} />
        <div>
          <h1>Hello</h1>
          <form action="" onSubmit={(e) => this.submitForm(e)}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default Popular;
