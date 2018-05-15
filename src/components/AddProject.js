import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value,
        description: this.refs.description.value
      }}, function(){
          //console.log(this.state);
          this.props.addProject(this.state.newProject);
      });
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="AddProject box">
        <h3 className="title">Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" ref="title"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select type="text" ref="category">
                  {categoryOptions}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <div className="control">
                <textarea className="textarea" placeholder="(optional)" ref="description"/>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="button is-info" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;