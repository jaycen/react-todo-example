import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects:[]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }
  render() {
    return (
      <div className="App">
        <section className="hero section is-medium is-info is-bold">
          <div class="hero-body">
            <div className="container">
            <h1 className="title has-text-white">Projects</h1>
              <div className="columns">
                <div className="column">
                  <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
                </div>
                <div className="column">
                  <AddProject addProject={this.handleAddProject.bind(this)}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section has-background-dark">
          <footer className="footer has-background-dark">
            <a href="https://bulma.io">
              <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24" />
            </a>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
