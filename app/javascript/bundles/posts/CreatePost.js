// app/javascript/bundles/posts/CreatePost.js
import React from 'react';
import {Redirect} from 'react-router-dom';


export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      description: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createPostRequest = (event) => {
    console.log('this.state', this.state);
    fetch('/api/v1/posts', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Student Info created successfully');
      location.href = '/';
    });
  }

  render() {
    const {fullname, description} = this.state;
    return (
      <div>
        <h3>New Student</h3>
        <div>
          <label>fullname: </label>
          <input
            type='text'
            required="required"
            name='fullname'
            value={fullname}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Description: </label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.createPostRequest}>Create</button>
      </div>
    );
  }
}


