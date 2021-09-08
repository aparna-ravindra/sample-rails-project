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
      alert('Student Updated successfully')
    });
  }

  render() {
    const {fullname, description} = this.state;
    return (
      <Container>
        <div>
          <h1 align='center'>Update Student</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input className="form-control"
               type='text'
               required="required"
               name='fullname'
               value={fullname}
               onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control"
            type='text'
            name='description'
            value={description}
            onChange={this.handleInputChange}
            >
          </textarea>
            </div>
            <button onClick={this.updatePostRequest} className='btn btn-md btn-success' type="button">Update</button>
         
            
          </form>
          </div>
         
     
      </Container>
      
    );

  }
}



