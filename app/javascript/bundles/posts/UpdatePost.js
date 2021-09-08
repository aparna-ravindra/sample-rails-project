// app/javascript/bundles/posts/UpdatePost.js
import React from 'react';
import {Button, Table, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class UpdatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      description: ''
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/posts/${id}`).
      then((response) => response.json()).
      then((post) => this.setState({ ...post }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updatePostRequest = (event) => {
    fetch(`/api/v1/posts/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Student Information updated successfully');
      location.href = '/';
    });
  }

  render() {
    const {fullname, description} = this.state;
    return (
      <div>
        <h3>Update Information</h3>
        <div>
          <label>Fullname: </label>
          <input
            type='text'
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
        <button onClick={this.updatePostRequest}>Update</button>
      </div>
    );
  }
}



