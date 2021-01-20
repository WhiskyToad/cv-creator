import React, { Component } from "react";
import Popup from 'reactjs-popup';
import CreateEd from './CreateEd'

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
        this.addItem = this.addItem.bind(this); 
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        var newItem = {
            qual: this.qual.value,
            school: this.school.value,
            date: this.date.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });

          this.qual.value = "";
          this.school.value = "";
          this.date.value = "";
           
        e.preventDefault();
    } 
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
render(){
return (
    <div id = "education-container">
        <h2>Education</h2>
        <CreateEd entries = {this.state.items}
                  delete = {this.deleteItem}/>
    <Popup trigger={<button> Add New</button>}  modal nested>
    {close => (
    <form id = 'modal-container' onSubmit={this.addItem}>
        <span id = 'modal-header'>Add education</span>
        <label htmlFor = "qual">Qualification</label>
        <input id = "qual" type = "text" ref={(a) => this.qual = a}></input>
        <label htmlFor = "school">School</label>
        <input id = "school" type = "text" ref={(a) => this.school = a}></input>
        <label htmlFor = "date">Date Achieved</label>
        <input id = "date" type = "text" ref={(a) => this.date = a}></input>
        <div id = 'button-container'>
            <button type = "submit" >Submit</button>
            <button onClick={() => {
              close();
            }}>Cancel</button>
        </div>
    </form>
    )}
  </Popup>
  </div>
    
    )}};

export default Education;