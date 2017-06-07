import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api'
const RepoGrid = (props) => {
  console.log(props.repos)
  return (
    <ul className="popular-list">
      {props.repos.map((repo, k) => {
        return (
          <li key={k}>
            <h4>{k + 1}</h4>
            <img src={repo.owner.avatar_url} alt="" />
            <a href={repo.html_url}>{repo.name}</a>
            <span className="username">@{repo.owner.login}</span>
            <span>{repo.stargazers_count} stars</span>
          </li>
        )
      })}
    </ul>
  )
}


const SelectedLanguage = (props) => {
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
      value: '',
      repos: null
    }
    this.updateLanguages = this.updateLanguages.bind(this)
  }

  componentDidMount() {
    this.updateLanguages(this.state.selected)
  }
  updateLanguages(item) {
    this.setState({ selected: item, repos: null })

       fetchPopularRepos(item)
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos
          }
        });
      }.bind(this));
  }

  render() {
    return (
      <div className="container">
        <SelectedLanguage
          onSelect={this.updateLanguages}
          selectedlang={this.state.selected} />
        {!this.state.repos
          ? <p>LOADING!</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default Popular;
