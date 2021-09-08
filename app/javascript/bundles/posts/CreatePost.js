// app/javascript/bundles/posts/CreatePost.js
import React from 'react';
import { Container } from 'react-bootstrap';
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
      alert('Student added successfully');
    });
  }

  render() {
    const {fullname, description} = this.state;
    return (
      <Container>
      <div>
          <h1 align='center'>New Student</h1>
          <form>
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input class="form-control"
               type='text'
               required="required"
               name='fullname'
               value={fullname}
               onChange={this.handleInputChange}/>
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control"
            type='text'
            name='description'
            value={description}
            onChange={this.handleInputChange}
            >
          </textarea>
            </div>
            <button onClick={this.createPostRequest} className='btn btn-md btn-success'>Create</button>
          </form>
          </div>
      </Container>
    );
  }
}


