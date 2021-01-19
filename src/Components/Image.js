import React, { Component } from "react";

class Image extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null
      };
  
      this.onImageChange = this.onImageChange.bind(this);
    }
  
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        document.getElementById("image-text").classList.add('hidden');
        this.setState({
          image: URL.createObjectURL(img)
        });
      }
    };
  
    render() {
      return (
            <div id = "image-container">
              <img alt = "" src={this.state.image} />
              <h1 id = "image-text">Select Image</h1>
              <input type="file" name="myImage" onChange={this.onImageChange} />
            </div>
      );
    }
  }
  export default Image;