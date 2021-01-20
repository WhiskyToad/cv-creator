import React, { Component } from "react";
 
class CreateEd extends Component {
    constructor(props) {
        super(props);
     
        this.createEdItems = this.createEdItems.bind(this);
    }
          
    delete(key) {
      this.props.delete(key);
    }
  createEdItems(item) {
    return <div className = 'education-segment' key={item.key}>
        <h3>{item.qual}</h3>
        <span>{item.school} / {item.date}</span>
        <div>
          <button onClick={() => this.delete(item.key)}>Delete</button>
        </div>
    </div>
  }
 
  render() {
    var edEntries = this.props.entries;
    var edItems = edEntries.map(this.createEdItems);
 
    return (
        <div id = 'work-items'>
          {edItems}
        </div>
    );
  }
};
 
export default CreateEd;