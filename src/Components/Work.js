/* Wish list
form checks
edit the list

*/

import React, { Component } from "react";
import Popup from 'reactjs-popup';
import CreateItems from './CreateItems'

class Work extends Component {
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
            title: this.title.value,
            company: this.company.value,
            location: this.location.value,
            date: this.date.value,
            description: this.description.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });

          this.title.value = "";
          this.company.value = "";
          this.location.value = "";
          this.date.value = "";
          this.description.value = "";
           
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
    <div id = "work-container">
        <h2>Experience:</h2>
        <CreateItems entries = {this.state.items}
                     delete= {this.deleteItem}/>
    <Popup trigger={<button> Add New</button>}  modal nested>
    {close => (
    <form id = 'modal-container' onSubmit={this.addItem}>
        <span id = 'modal-header'>Add work experience</span>
        <div id = 'row'>
            <div className = 'row-segment-left'>
                <label htmlFor = "job-title">Job Title</label>
                <input id = "job-title" type = "text" ref={(a) => this.title = a}></input>
            </div>
            <div className = "row-segment-right">
                <label htmlFor ='job-company'>Company</label>
                <input id = 'job-company' type= 'text' ref={(a) => this.company = a}></input>
            </div>
        </div>
        <div id = 'row'>
            <div className = 'row-segment-left'>
                <label htmlFor = "job-location">Job Location</label>
                <input id = "job-location" type = "text" ref={(a) => this.location = a}></input>
            </div>
            <div className = "row-segment-right">
                <label htmlFor ='job-date'>Date of Employment</label>
                <input id = 'job-date' type= 'text' ref={(a) => this.date = a}></input>
            </div>
        </div>
        <div id ='bottom-row'>
            <label htmlFor  ='job-description'>Job Description</label>
            <textarea id = 'job-description' rows = '5' placeholder = 'Describe your duties...'
            ref={(a) => this.description = a}></textarea>
        </div>
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

export default Work;