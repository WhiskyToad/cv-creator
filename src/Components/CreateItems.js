import React, { Component } from "react";
 
class CreateItems extends Component {
  createTasks(item) {
    return <div className = 'work-segment' key={item.key}>
        <h3>{item.title}</h3>
        <span>{item.company} / {item.location} / {item.date}</span>
        <p>{item.description}</p>
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