import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <div className="Project card breath-bottom">
        <header className="card-header">
            <h4 className="card-header-title">{this.props.project.title} <span className="is-size-7 has-text-weight-light breath-horizontal">{this.props.project.category}</span></h4>
            <div className="card-header-icon">
                <button className="button is-danger is-inverted" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</button>
            </div>
        </header>
        <div className="card-content">
            <div className="content">
                {this.props.project.description} 
            </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;