import React, { Component } from "react";
 
class CreateItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
    }
          
    delete(key) {
      this.props.delete(key);
    }
  createTasks(item) {
    return <div className = 'work-segment' key={item.key}>
        <h3>{item.title}</h3>
        <span>{item.company} / {item.location} / {item.date}</span>
        <p>{item.description}</p>
        <span>
          <button onClick={() => this.delete(item.key)}>Delete</button>
        </span>
    </div>
  }
 
  render() {
    var workEntries = this.props.entries;
    var workItems = workEntries.map(this.createTasks);
 
    return (
        <div id = 'work-items'>
          {workItems}
        </div>
    );
  }
};
 
export default CreateItems;