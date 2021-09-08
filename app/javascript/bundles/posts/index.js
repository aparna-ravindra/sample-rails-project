import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Table, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPostsList();
  }

  fetchPostsList = () => {
    fetch('/api/v1/posts').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  };

  fetchSortedPostsList = () => {
    fetch('/api/v1/posts/sort').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  };

  handleDelete = (postId) => {
    fetch(`/api/v1/posts/${postId}`, { method: 'delete' }).
      then((response) => {
        alert('Student deleted successfully')
        this.fetchPostsList();
      });
  }

  sortByName = () => {
    const sortedArray = this.state.posts.sort((a,b) => a.fullname.localeCompare(b.fullname))
    this.setState({posts: sortedArray})
  }

  sortByIDAscending = () => {
    const sortedArray = this.state.posts.sort((a,b) => {return parseInt(a.id) - parseInt(b.id)})
    this.setState({posts: sortedArray})
  }

  sortByIDDescending = () => {
    const sortedArray = this.state.posts.sort((a,b) => {return parseInt(b.id) - parseInt(a.id)})
    this.setState({posts: sortedArray})
  }

  render() {
    const { posts } = this.state;
    return (
      <Container>
      <div>
        <p align= 'center'>All Students </p>

        <div className='d-flex'>
          <Link to="/posts/new">
            <button className='btn btn-primary'>New Student</button>
          </Link>

          <DropdownButton id="dropdown-basic-button" title="Sort By Id" style={{marginLeft: '10px'}}>
            <Dropdown.Item  onClick={() => {this.sortByIDAscending()}}>Ascending</Dropdown.Item>
            <Dropdown.Item  onClick={() => {this.sortByIDDescending()}}>Descending</Dropdown.Item>
          </DropdownButton>

          <button style={{marginLeft: '10px'}} className='btn btn-primary' onClick={() => this.sortByName()}>Sort by Name</button>

        </div>
        {/* <button style={{marginLeft: '20px'}} onClick={()=> this.fetchSortedPostsList()}>Sort by ID</button> */}
            
        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th>ID</th>
              <th> Fullname </th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
          {
            posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>

                      {post.fullname}
                 
                  </td>
                  <td>{post.description}</td>
                  <td>
                    <Link to={`/posts/${post.id}/edit`}>

                     <button className='btn btn-info'> Edit </button>
                    </Link>
                    </td>
                    <td>
                    <button onClick={() => this.handleDelete(post.id)} className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
      </div>
      </Container>
    );
  }
}

